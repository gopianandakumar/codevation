import React,{Component} from 'react'


class Message extends Component{
    constructor(){
        super()
        this.state ={
            name:" outsider"
        }
    }
    
    render(){

        const  changeData = () => {
            this.setState({
                name:"Thank you for Subscribing"
            })
        }
        return(
            <>
            <h1>Hello{this.state.name}</h1>
            <button onClick={()=> changeData()}>Subscribe</button>
            
            </>
        )
    }
}

export default Message