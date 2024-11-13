import { Request, Response } from "express";

const express=require('express');

const app=express();


app.get('/health',(req:Request,res:Response)=>{
res.send("server is up and running fine");
});

app.listen(3000,()=>{
console.log("server working on 3000");
});


