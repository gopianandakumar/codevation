import axios from 'axios'
import React, { Component } from 'react'

 class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:'',
         name:'',
         body:''
      }
    }

    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandlder =(e)=>{
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state).then(
            response=>{
                console.log(response)
            }
        ).catch(error=>{
            console.log(error)
        })
        console.log(this.state)
    }
  render() {
    let {userId, title, body}= this.state
    return (
      <div>
        <form onSubmit={this.submitHandlder}>
            <div>
                <input type="text" value={userId} name="userId" onChange={this.changeHandler} />
            </div>
            <div>
                <input type="text" value={title} name="name" onChange={this.changeHandler} />
            </div>
            <div>
                <input type="text" value={body} name="body" onChange={this.changeHandler} />
            </div>
        </form>
        <button type="submit" onClick={this.submitHandlder}>Submit</button>
      </div>
    )
  }
}

export default PostForm