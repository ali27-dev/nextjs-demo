'use client'

import React,{useState,useEffect} from 'react'

export default function TransectionSearch() {
  const [query ,setQuery] = useState("")
  const [results,setResults] = useState<any[]>([]);


  useEffect(()=>{
if(!query){
  setResults([])
  return
}

const timeout = setTimeout(async()=>{
  const res= await fetch(`/api/transactions/search?q=${query}`);
  const data =await res.json();
  setResults(data);
},300)

return ()=> clearTimeout(timeout)
  },[query])
  
  return (
    <div>
      <input value={query} onChange={(e)=>setQuery(e.target.value)}
      placeholder='Search transection' />

      <ul>
        {results.map((r)=> (
          <li key={r.id}>{r.desc}</li>
        ))}
      </ul>
    </div>
  )
}
