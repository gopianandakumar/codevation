import React, { useState } from 'react'

function HookL() {
    const [data, setData] = useState([])

    const increM=()=>{
        setData([...data,{
            id:data.length,
            value:Math.floor(Math.random() * 10)+1
        }])}
  return (
    <div>
        <button onClick={increM}>Click me</button>
       <ul>
        {
            data.map(da=>(<li key={da.id}>{da.value}</li>))
        }
       </ul>
    </div>
  )
}

export default HookL