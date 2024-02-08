import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         msg:'Parent'
      }
    this.handlerFun = this.handlerFun.bind(this)

    }

    handlerFun (childName){
       alert(`Hello ${this.state.msg} from${childName}`)
    }

  render() {
    return (
      <div>
        <ChildComponent evetHand ={this.handlerFun}/>
      </div>
    )
  }
}

export default ParentComponent