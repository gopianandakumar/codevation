import React from 'react'

function Person({person}) {
    const personList = ['Bruce', 'Diana', 'Clark']
  return (
    <div>
        {
            personList.map((name, index)=><h2 key={index}>{name}</h2>)
        }
        {/* <h1>My Name is:{person.name},I Know:{person.code}</h1> */}
    </div>
  )
}

export default Person