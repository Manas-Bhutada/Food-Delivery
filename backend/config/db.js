import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://manas_19:b2JfTDH8cowKCgoz@cluster0.mdxgw.mongodb.net/food-del');
    console.log("Connected Db SUccessfully");
}