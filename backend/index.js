import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import {connectionDB} from "./src/lib/db.js";
import userRoutes from './src/routes/user.js';


const app = express();

dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors({
    origin: 'http:localhost:5173,',
    credentials:true
}));
app.use(cookieParser());

app.use('/api/users',userRoutes);


app.get('/',(req,res)=>{
    res.json({message:'Welcome'});
});

app.listen(process.env.PORT, ()=>{
    console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
    connectionDB();
})