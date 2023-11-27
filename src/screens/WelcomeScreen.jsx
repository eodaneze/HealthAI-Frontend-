import React from 'react'
import { createBrowserRouter, Route, Link, NavLink, createRoutesFromElements, RouterProvider, useLocation } from 'react-router-dom'
import Regimg from '../assets/Chat bot-amico 1.png'



const WelcomeScreen = () => {
  const location = useLocation()

  return (
    <>
    <section className='body'>
      <img className='reg' src={Regimg} alt="" />
      <div className="content">
        <h4>Are you worried?</h4>
        <p>Get trusted advice about your health</p>
      </div>
      <div className="dots">
        <div className={`${location.pathname === "/" ? "circle active" : "circle"}`}></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>

      <Link to={"/screen2"}><button className="next btn">Next</button></Link>
      <Link to={"/signUp"}><button className="skip btn">Skip</button></Link>

    </section>
    </>
  )
}

export default WelcomeScreen