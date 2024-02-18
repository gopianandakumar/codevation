import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'
import MemoCom from './MemoCom'

 class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name:'Vishwas'
      }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Vishwas'
            })
        },2000)
    }
  render() {
    console.log("*************paerntComponet***************")
    return (
      <>ParentComp
      <PureComp name={this.state.name} />
      <RegComp name={this.state.name} />
      <MemoCom name={this.state.name} />
      </>
    )
  }
}

export default ParentComp