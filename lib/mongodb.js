import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connect to MONGODB");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
    }
}