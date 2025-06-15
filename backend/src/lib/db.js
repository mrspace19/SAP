import mongoose from "mongoose";

export const connectionDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected : ${conn.connection.host}`);
    } catch(error){
        console.log(`MongoDB Error : ${error.message}`);
        process.exit(1); // Stop the server if DB connections fails
    }  
};