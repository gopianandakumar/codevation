import axios from 'axios'
import React, { useEffect, useState } from 'react'

function EffectFetch() {
    const [posts, setPosts] = useState([])
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`).then(res=>{
            setPosts(res.data)}
        ).catch(err=>{console.log(err)})
    },[idFromButtonClick])
    const handleBtn=()=>{
        setIdFromButtonClick(id)

    }
  return (
    <>
        console.log(posts)
        <input type='text' name='id' value={id} onChange={e=> setId(e.target.value)} /><br/>
        <button onClick={handleBtn}>click me!</button>
        {
          posts.title
        
        /* <ul>{
            posts.map(pst =>(<li key={pst.id}>{pst.title}</li>))
            }

        </ul> */}
    </>
  )
}

export default EffectFetch