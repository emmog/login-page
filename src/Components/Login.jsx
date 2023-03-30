import React, { useState } from "react";


function Login(){
    const [username,setUsername]=useState("")
const [password ,setpassword]=useState("")
const[loading,setloading]=useState(false)


const handleLogin=()=>{
    event.preventDefault(true)
    setloading(true)
    console.log({username,password})
   setTimeout(() => {
    setloading(false)
   },2000);
//    setInterval(() => {
//     console.log ({test:"Text"})
//    }, 2000);

}
return(

<>

<div className="grid md:grid-cols-2 h-screen ">
<div>
<img className="w-full h-sreen md:block hidden" src="https://images.unsplash.com/photo-1680013995061-2d6d1f3ab417?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/>
</div>
<div className="">
<form onSubmit={handleLogin} className="p-4 max-w-lg mx-auto">
    <p className="text-4xl front-bold text-center py-16">welcome to home learn</p>
    <p>Username</p>
    <input value={username}onChange={(event)=>setUsername(event.target.value)} type="text"className="p-3 rounded-lg border border-green-700 focus:outline-none w-full mb-4"/>
    <p>password</p>
    <input value={password}onChange={(event)=>setpassword(event.target.value)} type="password"className="p-3 rounded-lg border border-green-700 focus:outline-none w-full mb-4"/>
    
        <p> don't you have an account?<a href=""><span className="text-green-600">signup now</span></a></p>
   {!loading&& <button type="submit" className="bg-green-600 px-4 py-2 rounded w-full my-2 ">sigin</button>}
   {loading&&<p>loading..</p>}
</form>
</div>
</div>
</>


)


}
export default Login;







