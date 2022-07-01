import React from 'react'
import logo from '../assets/Allianz.svg'
import '../index.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="logo-container">
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/data'>Import data</Link>
          <Link to='/success'>Import successful</Link>
        </nav>
        <img src={logo} alt="logo" className='logo'/>
    </div>
  )
}
