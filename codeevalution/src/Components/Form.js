import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        userName:'',
        comment:'',
        topic:'React'
      }
    }

    changeNamHandler = event =>{
        this.setState({
            userName : event.target.value
        })}
    
    CommentHandler = event =>{
        this.setState({
            comment:event.target.value
        })
    }
    
    TopicHandler = event =>{
        this.setState({
            topic:event.target.value
        })
    }

    submitHandler = event =>{
        alert(`${this.state.userName} and ${this.state.comment} and
        ${this.state.topic}`)
        event.preventDefault()
    }
    
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
            <label>UserName</label>
            <input type="text" value={this.state.name} onChange={this.changeNamHandler} />
        </div>
        <div>
            <label>Comments</label>
            <textarea value={this.state.comment} onChange={this.CommentHandler} />
        </div>
        <div>
            <label>Topic</label>
            <select value={this.state.topc} onChange={this.TopicHandler}>
                <option value='React'>React</option>
                <option value='Angular'>Angular</option>
                <option value='vue'>Vue</option>

            </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form