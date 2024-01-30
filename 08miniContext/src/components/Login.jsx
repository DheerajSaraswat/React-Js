import React from "react"
import { useState } from "react"
import { useContext } from "react";
import UserContext from "../Context/UserContext";
function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext)
  return (
    <>
    <h2>Login Page</h2>
    <input type="text" placeholder="username..."value={username} onChange={ (e)=>setUsername(e.target.value) } />
    <input type="password" placeholder="password..." value={password} onChange={ (e)=>setPassword(e.target.value) } />
    <button onClick={ (e)=>{
        e.preventDefault()
        setUser({username,password})
    } } >Submit</button>
    </>
  )
}
export default Login