import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://kaushaltiwari191:RadhaKrishna06@cluster1.h5dnw.mongodb.net/Food-Delivery');
    console.log("DB Connected successfully");
  } catch (error) {
    console.error("Error connecting to DB:", error);
  }
};