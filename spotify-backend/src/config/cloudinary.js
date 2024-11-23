import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Cloudinary configuration
const connectCloudinary = () => {
    try {
        cloudinary.config({
            cloud_name: "dr8furnpq",
            api_key:"513875763888375",
            api_secret:"WUoThcW1wltpnPjrQCzUX_1be-4",
        });
        console.log("Cloudinary connected successfully");
    } catch (error) {
        console.error("Error configuring Cloudinary:", error);
        throw new Error("Failed to connect to Cloudinary");
    }
};

export default connectCloudinary;
