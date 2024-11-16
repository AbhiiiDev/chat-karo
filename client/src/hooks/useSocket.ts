import { useEffect, useState } from 'react';
import {io} from 'socket.io-client';

const socketServerUrl="http://localhost:8002";

interface UseSocket{
    messages:string[],
    sendMessage:(messages:string)=>void;
}

export default function useSocket():UseSocket{
    const [messages,setMessages]=useState<string[]>([]);
useEffect(()=>{
const newSocket=io(socketServerUrl);
newSocket.on('chat message',(message:string)=>{
    setMessages((prevMessages)=>[...prevMessages,message]);
})

return ()=>{
    newSocket.close();
}

},[])


const sendMessage=(message:string)=>{
    if(socket) socket.emit('chat message',message);
}



return {messages,sendMessage}
}

const socket=io(socketServerUrl);

socket.on('connect',()=>{
    console.log('client connected');
})