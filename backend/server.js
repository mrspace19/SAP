const express = require('express');
const app = express();

app.use(express.json);


app.get('/',(req,res)=>{
    res.json({message:'Welcome'});
})

app.listen(5001,(req,res)=>{
    console.log("Server starts at 5001");
})