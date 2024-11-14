import { Button, Input } from '@mantine/core'
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
    <div>
      <Input
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      placeholder='type your message'
      />
      <Button onClick={handleSubmit}>Send</Button>

    <div className='flex flex-col mt-8'>
{messages && messages.map((message)=>(
<p className='mt-1'>
    {message}
</p>

))
}
    </div>
    </div>
  )
}

export default Chat
