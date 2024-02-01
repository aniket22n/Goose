import mongoose from "mongoose";
require("dotenv").config("../../.env");

export const dbConnect = async () => {
  try {
    console.log(process.env.MONGO_URL!);

    await mongoose.connect(process.env.MONGO_URL!);
    console.log("Successfully connected database ");
  } catch (error) {
    console.log("Error connecting database");
  }
};
