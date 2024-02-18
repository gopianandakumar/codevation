import axios from 'axios'
import React, { Component } from 'react'

 class PostList extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
         errorMsg:""
      }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            response =>{
                this.setState({posts:response.data})
            }
        ).catch(error=>{
            this.setState(
              {errorMsg:"Retrieving Data is failed"}
            )
        })
    }


  render() {
    let {posts, errorMsg} = this.state
    console.log(posts)
    return (
      <div>{
        posts.length?posts.map(post=><ul  key={post.id}><li>{post.id}</li>
        <li>{post.title}</li></ul>):null

        }
      {errorMsg?<div>{errorMsg}</div>:null}

        
      </div>
    )
  }
}

export default PostList