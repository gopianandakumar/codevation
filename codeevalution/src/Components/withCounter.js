import React from "react";

const updatedComponent =(OriginComponent)=>{
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
              count:0
            }
          }
      
         increCount =()=>{
          this.setState(prevState=>{
              return {count:prevState.count+1}
      
          })
         }
        render(){
            return<OriginComponent count ={this.state.count} incrementCount={this.increCount}/>
        }
    }
    return NewComponent
}

export default updatedComponent