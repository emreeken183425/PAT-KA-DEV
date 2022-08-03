import React from 'react'
import axios from 'axios';
import {useEffect,useState} from 'react'
function Axiosexample() {

    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect(()=>{
        axios('https://jsonplaceholder.typicode.com/posts/1/comments')
        .then((res)=>setPost(res.data))
        .catch((e)=>console.log(e))
        .finally(()=>setLoading(false))
    })
  return (
    <div>
        {loading&&<div>LOADİNG....</div> }
        {
            post.map((post)=>(
                <div key={post.id} >
                    {post.name}
                </div>
            ))
        }
    </div>
  )
}

export default Axiosexample