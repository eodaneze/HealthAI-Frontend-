import React from 'react'
import { createBrowserRouter, Route, Link, NavLink, createRoutesFromElements, RouterProvider, useLocation } from 'react-router-dom'
import left from '../assets/Vector 5.png'
import right from '../assets/Vector 4.png'
import bot from '../assets/bot.png'
import Google from '../assets/Rectangle 6.png'
import Lock from '../assets/lock.png'
import Lope from '../assets/lope.png'
import Person from '../assets/person.png'




const RegisterScreen = () => {
   

  return (
    <main className='signUp'>
      <div className="reg-container">
      <h1>HealthPoint <img src={bot} width={22} height={21} alt="AI BOT" /></h1>
      <p className='head'>Sign up</p>
      <div className="google">
        <img src={Google} alt="" />
         Sign up with Google
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
        <div className="input-box"> <img src={Person} alt="email icon" /> <input id='username'  type="text" placeholder='Enter username'/></div>
      </div>
      <div className="input">
        <label htmlFor="email">
         Email Address
        </label>
        <div className="input-box"> <img src={Lope} alt="email icon" />  <input id='email'  type="email" placeholder='Enter email'/></div>
      </div>
      <div className="input">
        <label htmlFor="password">
         Password <br />
         <p className="must">Must contain at least 8 characters, a number, an uppercase letter and a lowercase letter</p>
        </label>
        <div className="input-box"> <img src={Lock} alt="password icon" /> <input id='password' type="password" placeholder='Enter password'/></div>
      </div>
      <div className="input">
        <label htmlFor="verify">
         Verify Password <br />
         <p className='must'>Password must be the same</p>
        </label>
        <div className="input-box"> <img src={Lock} alt="password icon" /> <input id='verify'  type="password" placeholder='Enter password'/></div>
      </div>
      <button className='btn2'>Sign up</button>
      <div className="registered">
        <p>Already registered? <Link to={'/login'}>Login</Link></p>
      </div>
      </div>
     
    </main>
  )     
}

export default RegisterScreen