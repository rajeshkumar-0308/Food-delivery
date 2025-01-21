import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://food-ordering:RAJESH2004@cluster0.8uagx.mongodb.net/food-del').then(()=>console.log("DB Connected"));
} 