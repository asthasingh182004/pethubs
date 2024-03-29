import React, { useState } from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

const Login = () => {
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const submitForm = () =>{
    console.log (email + '' + password);
  }
  return (
    
    <section className='login-box'>
        <div className="login-form">
          <form>
            <h3>Login</h3>
            <br/>
            <div className="login-input-box">
              <span>Your Email Id: </span>
              <input type='text' name='' required="required" onChange={e=>setEmail(e.target.value)}/>
            </div>
            <br/>
            <div className='login-input-box'>
              <span>Password </span>
              <input type='text' name='' required="required"  onChange={e=>setPassword(e.target.value)}/>
            </div>
            <br/>
            <div className="login-input-box">
              <button onClick={submitForm}>Login</button>
            </div>
            <br/>
            <h6>Dont have an account?? <Link to='/account'>Create An Account </Link></h6>

          </form>
            
        </div>
      
    </section>
    
  )
}

export default Login
