import React from 'react'
import './Register.css'

const Register = () => {
  return (
    <section className='register'>
        <div className="register-box">
            <form>
                <h2>Registeration Form</h2>
                <br/>
            <div className="register-input-box">
              <span>Full Name </span>
              <input type='text' name='' required="required"/>
            </div>
            <br/>
            <div className='register-input-box'>
              <span> Email Address : </span>
              <input type='email' name='' required="required"/>
            </div>
            <br/>
            <div className='register-input-box'>
              <span> Phone Number : </span>
              <input type='number' name='' required="required"/>
            </div>
            <br/>
            <div className='register-input-box'>
              <span> City : </span>
              <input type='text' name='' required="required"/>
            </div>
            <br/>
            <div className='register-input-box'>
              <span> State : </span>
              <input type='text' name='' required="required"/>
            </div>
            <br/>
            <div className='register-input-box'>
              <span> Postal Code/Zip : </span>
              <input type='number' name='' required="required"/>
            </div>
            <br/>
            <div className='register-input-box'>
              <span> Country : </span>
              <input type='text' name='' required="required"/>
            </div>
            <br/>
            <h2>Additional Deatils </h2>
   
            <br/>
           
            </form>
        </div>
      
    </section>
  )
}

export default Register
