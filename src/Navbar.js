import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './logo.svg'
import './css/navbar.css'

let Navbar = props => {
  return(
    <div className="navbar">
      <img src={logo} alt="logo"/>
      <NavLink to='#services-page'>text</NavLink>
    </div>
  )
}

export default Navbar
