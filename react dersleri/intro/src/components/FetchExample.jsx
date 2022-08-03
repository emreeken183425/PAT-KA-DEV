import {useEffect,useState } from 'react'

function FetchExample() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>res.json())
.then(data=>setUsers(data))
.catch((e)=>console.log(e))
.finally((loading)=>setLoading(false))
},[])
  return (
    <div>
     <h1>users</h1>
     {loading&&<div>
       LOADİNG..... 
     </div>}

     {
users.map((user)=>(
    <div key={user.id} >{user.name} </div>
))
     }
    </div>
  )
}

export default FetchExample
