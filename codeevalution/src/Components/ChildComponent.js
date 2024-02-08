import React from 'react'

function ChildComponent(props) {
  return (
    <div>ChildComponent
        <button onClick={()=>props.evetHand('Child')}>Click me</button>
    </div>
  )
}

export default ChildComponent