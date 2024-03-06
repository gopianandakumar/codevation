import React, { useMemo, useState } from 'react'

function MyCallBack() {
    const [counterone, setCounterOne] = useState(0)
    const [countertwo, setCounterTwo] = useState(0)

    const incrementOne = ()=>{
        setCounterOne(counterone+1)
    }

    const incrementTwo = ()=>{
        setCounterTwo(countertwo+1)
    }

const isEven = useMemo(()=>{
    let i = 0
    while(i < 200000000) i++
    return counterone%2===0
}, [counterone])

  return (
    <div>MyCallBack
        <span>{isEven?'Even':'odd'}</span>
        <div>
            <button onClick={incrementOne}>
                counter -{counterone}
            </button>
        </div>
        <div>
            <button onClick={incrementTwo}>
                counter -{countertwo}
            </button>
        </div>
    </div>
  )
}

export default MyCallBack