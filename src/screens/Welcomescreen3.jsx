import React from 'react'
import { createBrowserRouter, Route, Link, NavLink, createRoutesFromElements, RouterProvider, useLocation } from 'react-router-dom'
import Regimg3 from '../assets/review-bro 1.png'



const WelcomeScreen3 = () => {

    const location = useLocation()


  return (
    <>
    <section className='body'>
      <img className='reg' src={Regimg3} alt="" />
      <div className="content">
        <h4>Are you worried?</h4>
        <p>Get trusted advice about your health</p>
      </div>
      <div className="dots">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className={`${location.pathname === "/screen3" ? "circle active" : "circle"}`}></div>
      </div>

      <Link to={"/signUp"}><button className="next btn">Next</button></Link>

    </section>
    </>
  )
}

export default WelcomeScreen3