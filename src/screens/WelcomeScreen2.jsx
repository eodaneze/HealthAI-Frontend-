import React from 'react'
import { createBrowserRouter, Route, Link, NavLink, createRoutesFromElements, RouterProvider, useLocation } from 'react-router-dom'
import Regimg2 from '../assets/check sym-cuate 1.png'



const WelcomeScreen2 = () => {
    const location = useLocation()

  return (
    <>
    <section className='body'>
      <img className='reg' src={Regimg2} alt="" />
      <div className="content">
        <h4>Check your symptoms</h4>
        <p>Take a few steps to complete your health assessment</p>
      </div>
      <div className="dots">
        <div className="circle"></div>
        <div className={`${location.pathname === "/screen2" ? "circle active" : "circle"}`}></div>
        <div className="circle"></div>
      </div>

      <Link to={"/screen3"}><button className="next btn">Next</button></Link>
      <Link to={"/signUp"}><button className="skip btn">Skip</button></Link>

    </section>
    </>
  )
}

export default WelcomeScreen2