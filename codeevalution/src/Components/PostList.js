import axios from 'axios'
import React, { Component } from 'react'

 class PostList extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            response =>{
                this.setState({posts:response.data})
            }
        ).catch(error=>{
            console.log(error)
        })
    }


  render() {
    let {posts} = this.state
    return (
      <div>{
        posts.length?
        posts.map(post=><div id={post.id}>{post}</div>):null
      }</div>
    )
  }
}

export default PostList