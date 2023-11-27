import React from 'react'
import { createBrowserRouter, Route, Link, NavLink, createRoutesFromElements, RouterProvider, useLocation } from 'react-router-dom'
import left from '../assets/Vector 5.png'
import right from '../assets/Vector 4.png'
import bot from '../assets/bot.png'
import Google from '../assets/Rectangle 6.png'
import Lock2 from '../assets/lock2.png'
import Lope from '../assets/lope.png'
import User from '../assets/user2.png'




const LoginScreen = () => {
   

  return (
    <main className='signUp'>
      <div className="reg-container">
      <h1>HealthPoint <img src={bot} width={22} height={21} alt="AI BOT" /></h1>
      <p className='welcome-back'>Welcome Back</p>
      <div className="google">
        <img src={Google} alt="" />
         Continue with Google
      </div>
      <aside>
        <img src={left} alt="" />
        OR
        <img src={right} alt="" />
      </aside>
      <div className="input">
        <label htmlFor="username">
         Username
        </label>
        <div className="input-box"> <img src={User} alt="email icon" /> <input id='username'  type="text" placeholder='Enter username'/> 
        <label class="checkbox-container2">
        <input type="checkbox" />
        <span class="checkmark2"></span>
        </label>
        </div>
      </div>
      <div className="input">
        <label htmlFor="password">
         Password <br />
         <p className="must">Must contain at least 8 characters, a number, an uppercase letter and a lowercase letter</p>
        </label>
        <div className="input-box"> <img src={Lock2} alt="password icon" /> <input id='password' type="password" placeholder='Enter password'/> 
        <label class="checkbox-container2">
        <input type="checkbox" />
        <span class="checkmark2"></span>
        </label>
        </div>
      </div>
      <div className="stay">
        <label class="checkbox-container">Stay logged in
        <input type="checkbox" />
        <span class="checkmark"></span>
        </label>
        {/* <div className="log">
          <input type="checkbox" name="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Stay logged in</label>
        </div> */}
        <p>Forgot Password?</p>
      </div>
      <p className='terms'>
      By signing up, you confirm that you’ve read and accepted our <span className="green">Terms of Service</span>  and <span className="green">Privacy Policy</span>. We will also subscribe you to our level up newsletter. You can also unsubscribe at anytime
      </p>
      <button className='btn2'>Log in</button>
      <div className="registered">
        <p>Don't have an account? <Link to={'/signUp'}>Sign up</Link></p>
      </div>
  
      </div>
      
     
    </main>
  )     
}

export default LoginScreen