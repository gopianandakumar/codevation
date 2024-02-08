import React from 'react'
import Person from './Person'


function NameList() {
    const data = ['Bruce', 'Clark', 'Diana']
    const personData = [
        {
            id:1,
            name:'Bruce',
            code:'React'
        },
        {
            id:2,
            name:'Clark',
            code:'Angular'
        },
        {
            id:3,
            name:'Diana',
            code:'Vue'
        }
    ]
    const myData = data.map(name =>
        <Person key={name.id} person={name} />)
  return (
    <div>{myData}</div>
  )
}

export default NameList