import React from 'react'

function MemoCom({name}) {
  return (
    
    <div>{name}</div>
  )
}

export default React.memo(MemoCom)