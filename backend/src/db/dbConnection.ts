import mongoose from "mongoose";

export const dbConnection=async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/food-delivery");
        console.log("Database Connected");
    } catch (error) {
        console.log("Database Connection ERROR",error);
    }
};