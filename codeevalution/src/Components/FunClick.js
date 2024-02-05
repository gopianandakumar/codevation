import React from 'react'

function FunClick() {

    function clickHandler() {
        console.log("button from fucntion")
    }

  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunClick