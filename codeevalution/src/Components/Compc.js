import React from 'react'
import { UserConsumer } from './UserContext'

function Compc() {
  return (
    <div>
      <UserConsumer>
        {
          (userName)=>{
            return<h1>Hello {userName} this is compc</h1>
          }
        }
      </UserConsumer>
    </div>
  )
}

export default Compc