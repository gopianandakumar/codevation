import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        return(
        this.state.isLoggedIn ? <div>Hello vishawas</div> : <div>Hello Guest</div>
        )// let message
        // if(this.state.isLoggedIn){
        //     message = <div>Hello vishwas</div>
        // }
        // else{
        //     message = <div>Hello Guest</div>
        // }
        // return <div>{message}</div>
        //    if(this.state.isLoggedIn){
        //     return<div>Hello Gopi</div>
        //    }else{
        //     return <div>Hello outsider!</div>
        //    }
    }
}

export default UserGreeting