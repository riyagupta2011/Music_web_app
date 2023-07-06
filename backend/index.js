const express=require("express");
const mongoose=require("mongoose");
const app=express();
require("dotenv").config();
const port=8000;
mongoose.connect(process.env.MONGO_URL )
    .then(()=>console.log("DB Connection Successfull!"))
    .catch((err)=>{
        console.log(err);
    });

app.get("/",(req,res)=>{
    res.send("Hello world")
});
app.listen(port,()=>{
    console.log("App is running on port "+port);
})