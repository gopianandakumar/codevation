import React, { useEffect, useState } from 'react'

function HookCounter() {
    const [data, setData] = useState(0)

    useEffect(()=>{
        const inte = setInterval(tick, 1000)
        return ()=>{
            clearInterval(inte)
        }
    })

    const tick =()=>{
        setData(data+1)
    }
  return (
    <div>HookCounter
        {data}
    </div>
  )
}

export default HookCounter