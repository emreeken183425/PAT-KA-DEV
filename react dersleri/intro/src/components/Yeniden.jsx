import axios from 'axios'
import React from 'react'
import {useState,useEffect} from 'react'
function Yeniden() {

const [users, setUsers] = useState([])
const [post, setPost] = useState([])
const [loading, setLoading] = useState(true)
useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>res.json())
.then(data=>setUsers(data))
.catch((e)=>console.log(e))

},[])
useEffect(()=>{
    axios('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then((res)=>setPost(res.data))
    .catch((e)=>console.log(e))
    
    
})

  return (

    <div>
       {
        users.map((ek)=>(
        <div key={ek.id}>{ek.name}</div>
        ))
       }
       {loading&&<div>
        LOOOODNG...
       </div>}
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

export default Yeniden