import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://hasibulnirob987:userdatabase@cluster0.tdijz8w.mongodb.net/food-delivery-website').then(()=>console.log("DB Connected"))
}