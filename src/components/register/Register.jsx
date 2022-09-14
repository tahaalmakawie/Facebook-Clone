import React from "react"
import "./regsiter.css"
import { Link } from "react-router-dom"

const Register = () => {
  return (
    <>
      <div className='login'>
        <div className='loginWrapper'>
          <div className='loginLeft'>
            <h3 className='loginLogo'>Facebook</h3>
            <span className='loginDesc'>Connect with friends and the world around you on Facebook.</span>
          </div>
          <div className='loginRight'>
            <div className='loginBox'>
              <input type='text' placeholder='Username' className='loginInput' />
              <input type='email' placeholder='Email' className='loginInput' />
              <input type='password' placeholder='Password' className='loginInput' />
              <input type='password' placeholder='Password Again' className='loginInput' />
              <button className='loginButton'><Link to= '/home' className="link-raute">Sign Up</Link></button>
              <button className='loginRegisterButton'><Link to= '/' className="link-raute">Log into Accout</Link></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
