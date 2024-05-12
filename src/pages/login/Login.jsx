import React from 'react'
import './style.css'
import { MdOutlineMail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className='container'>
      <div className='left-login'>
        <div className='left-content'>
          <div className='content'>
            <h1 className='content-title'>Creatopay</h1>
            <p className='content-desc'>Helping your brands connect with your Audience</p>
          </div>

          <div className='bg-circle'>
            <div className='circle'></div>
            <div className='circle'></div>
          </div>
        </div>
      </div>

      <div className="right-login">
        <div className='right-content'>

          <div className="login-box-header">
            <div className="login-box-title">Hello Again!</div>
            <div className="login-box-subtitle">Welcome Back</div>
          </div>

          <div className='login-box-content'>
            <div className='login-input-box'>
              <MdOutlineMail className='login-box-icons' />
              <input type="text" placeholder="Email Address" className='login-box-input' />
            </div>

            <div className="login-input-box">
              <FaLock className='login-box-icons' />
              <input type="password" placeholder="Password" className='login-box-input' />
            </div>

            <div className='login-btn-div'>
              <button className='login-btn'>Login</button>
            </div>
            
            <p className='p-fp'>Forgot Password</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
