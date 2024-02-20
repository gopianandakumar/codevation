import axios from 'axios'
import React, { useEffect, useState } from 'react'

function EffectFetch() {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
            setPosts(res.data)}
        ).catch(err=>{console.log(err)})
    },[])
  return (
    <div>EffectFetch
        <ul>{
            posts.map(pst =>(<li key={pst.id}>{pst.title}</li>))
            }

        </ul>
    </div>
  )
}

export default EffectFetch