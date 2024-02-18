import React, { Component } from 'react'
import updatedComponent from './withCounter'

 class Counterc extends Component {

   
  render() {
    let {count, incrementCount} = this.props
    return (
      <div>
        <button onClick={incrementCount}>clicked{count}time</button>
      </div>
    )
  }
}

export default updatedComponent(Counterc)