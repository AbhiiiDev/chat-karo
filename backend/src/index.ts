import { Request, Response } from "express";
import cors from 'cors';
import {Server} from 'socket.io'
import { createServer } from "http";

const express=require('express');

const app=express();
app.use(cors());

const server=createServer(app);
const io=new Server(server,{
    cors:{origin:"http://localhost:5173"}
})

app.get('/health',(req:Request,res:Response)=>{
res.send("server is up and running fine");
});

io.on('connection',(socket)=>{
    console.log(`${socket} connected`);


    socket.on('chat message',(msg:string)=>{
        io.emit('chat message',msg);
    })

})



server.listen(8000,()=>{
console.log("server working on 8000");
});


