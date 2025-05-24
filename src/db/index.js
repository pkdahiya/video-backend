import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`);
    console.log("Connected to MongoDB", connectionInstance.connection.host);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Re-throw the error for further handling
  }
}
export default connectDB;
export { mongoose }; // Export mongoose for use in other modules