import React from "react"
import "./login.css"
import { Link } from "react-router-dom"

const Login = () => {
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
              <input type='email' placeholder='Email' className='loginInput' />
              <input type='password' placeholder='Password' className='loginInput' />
              <button className='loginButton'> <Link to='/home' className="link-raute">Log In</Link> </button>
              <span className='loginForget'>Forget Password</span>
              <button className='loginRegisterButton'><Link to='/register' className="link-raute" >Create a New Account</Link></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
