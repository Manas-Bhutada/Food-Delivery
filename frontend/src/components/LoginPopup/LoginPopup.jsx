import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup=({setShowLogin})=>{
const[currState,setCurrState]=useState("Login")
// setting the singup state for the login popup

  return (
    <div className='login-popup'>
      <form  className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input type="text" placeholder='Your name' required />}
            
             <input type="email" placeholder='Your Email' required/>
             <input type="password" placeholder='Password' required />
        </div>
        {/* idhar m current state check kar rhaha hu  */}
        <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing,i agree to the terms of use and privacy policy</p>
        </div>
        {currState==="Login"?
        <p>Create a new Account?<span onClick={()=>setCurrState("Sign Up")}>CLick here</span></p>
        :<p>Already Have an Accoount?<span onClick={()=>setCurrState("Login")}>Login Here</span></p>
}
      </form>
    </div>
  )
}

export default LoginPopup
