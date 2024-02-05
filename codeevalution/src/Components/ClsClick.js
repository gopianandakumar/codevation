import React, { Component } from 'react'

 class ClsClick extends Component {
    handleClick(){
        console.log('form class component')
    }
  render() {
    return (
      <div><button onClick={this.handleClick}>Click for Class</button></div>
    )
  }
}

export default ClsClick