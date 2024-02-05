import React, { Component } from 'react'

 class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
       msg:"Hello"
      }
    //   this.handlerFunc = this.handlerFunc.bind(this)
    }

    // handlerFunc(){
    //     this.setState({
    //         msg:"GoodBye!"
    //     })

    // }

    handlerFunc = () =>{
        this.setState({
            msg:"Good Bye!"
        })
    }
  render() {
    return (
      <div><h1>{this.state.msg}</h1>
      {/* <button onClick={this.handlerFunc.bind(this)}>ClickMe</button> */}
      {/* <button onClick={()=>this.handlerFunc()}>ClickMe</button> */}
      <button onClick={this.handlerFunc}>ClickMe</button>


      </div>
    )
  }
}

export default EventBind