import { useState } from 'react'

export default function Chatbot(){
  const [msg,setMsg]=useState('')
  const [chat,setChat]=useState<string[]>([])

  function send(){
    setChat([...chat,'You: '+msg,'AI: Hello 👋'])
    setMsg('')
  }

  return (
    <div>
      <div>
        {chat.map((c,i)=><p key={i}>{c}</p>)}
      </div>
      <input value={msg} onChange={e=>setMsg(e.target.value)} />
      <button onClick={send}>Send</button>
    </div>
  )
}
