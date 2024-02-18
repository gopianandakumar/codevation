import React, { useState } from 'react'

function HookCouneter() {
    const [counter, setCounter] = useState(0)
    const [name, setName] = useState({firstName:'', lastName:''})

  return (
    <div>HookCouneter
        <button onClick={()=>setCounter(counter+1)}>Countr=={counter}</button>
        <input type="text" value={name.firstName} name="firstName" onChange={(e)=>setName({...name,firstName:e.target.value})} />
        <input type="text" value={name.lastName} name="lastName" onChange={(e)=>setName({...name,lastName:e.target.value})} />
       <h1>{JSON.stringify(name)}</h1>
    </div>
  )
}

export default HookCouneter