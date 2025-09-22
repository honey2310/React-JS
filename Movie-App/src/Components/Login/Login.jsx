import React, { useState } from 'react'
import { replace, useNavigate } from 'react-router-dom';
import "./Login.css"

export default function Login() {

    const [Email,setEmail]= useState("");
    const navigate=useNavigate();

  return (
    <div>

       <div className="login-container">
      <div className="login-box">
        <h1>Welcome</h1>
        <p>Login to continue adding movies</p>

        <form>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={Email}
              onChange={(e)=>{setEmail(e.target.value)}}
              required
            />
          </div>

          <button type="submit" className="login-btn" onClick={()=>{
            localStorage.setItem("user",JSON.stringify({email:Email}))
            navigate("/home",{replace:true})
          }}>
            Login
          </button>
        </form>

        <p className="signup-text">
          Don’t have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
    </div>
  )
}
