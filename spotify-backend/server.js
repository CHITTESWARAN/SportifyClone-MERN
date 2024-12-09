import express from "express";
import cors from "cors";
import "dotenv/config";
import songRouter from "./src/routes/songRoute.js";
import connectDB from "./src/config/mongodb.js";
import dotenv from "dotenv";
import connectCloudinary from "./src/config/cloudinary.js";
import albumRouter from "./src/routes/albumRoute.js";
dotenv.config();

// App configuration
const app = express();
const port = process.env.PORT || 4000;

// Database and Cloudinary connections
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());

// Configure CORS
const allowedOrigins = [
  "https://stately-parfait-dea40a.netlify.app",
  "https://sportifyclone-admin.onrender.com",
  "https://sportifyclone-frontend.onrender.com"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

// Initializing routes
app.use("/api/song", songRouter);
app.use("/api/album", albumRouter);

// Test route
app.get("/", (req, res) => res.send("API Working"));

// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
