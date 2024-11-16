import { Button, TextInput } from '@mantine/core'
import React, { useState } from 'react'
import useSocket from '../hooks/useSocket';

const Chat:React.FC = () => {

const [input,setInput]=useState<string>('');
const {messages,sendMessage}=useSocket();

const handleSubmit=()=>{
if(input.trim()){
    sendMessage(input);
    setInput('');
}
}

  return (
    <div className='w-full relative'>
    <div className='flex w-1/2 flex-col absolute right-0'>
{messages && messages.map((message)=>(
<p className='mt-1'>
    {message}
</p>
))
}   </div>
    <div className='flex'>
      <TextInput
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      placeholder='type your message'
      />
      <Button onClick={handleSubmit}>Send</Button>
      </div>
    </div>
  )
}

export default Chat
