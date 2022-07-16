import React from 'react'
import {Link} from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {

  return (
    <nav className="navbar">
      <Link to="/" className="appHeading" >
        <img src="/images/Vector.png" alt="logo"></img>
        <span className='appName'>CodersHouse</span>
      </Link>
    </nav>
  )
}

export default Navigation