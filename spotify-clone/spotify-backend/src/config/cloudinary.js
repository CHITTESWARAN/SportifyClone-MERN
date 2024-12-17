import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Cloudinary configuration
const connectCloudinary = () => {
    try {
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_SECRET_KEY,
        });
        console.log("Cloudinary connected successfully");
    } catch (error) {
        console.error("Error configuring Cloudinary:", error);
        throw new Error("Failed to connect to Cloudinary");
    }
};

export default connectCloudinary;
