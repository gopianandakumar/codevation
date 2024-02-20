import React, { useEffect, useState } from 'react'

function HookCounter1() {
    const [data, setData] = useState(0)
    useEffect(()=>{
        document.title=`you Click the ${data} time`
    })
  return (
    <div>
        <button onClick={()=>setData(data+1)}>Click me</button>
    </div>
  )
}

export default HookCounter1