import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import {connectionDB} from "./src/lib/db.js";

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json());



app.get('/',(req,res)=>{
    res.json({message:'Welcome'});
});

app.listen(process.env.PORT, ()=>{
    console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
    connectionDB();
})