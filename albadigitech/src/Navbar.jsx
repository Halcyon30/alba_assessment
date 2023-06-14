import React, { useEffect, useState } from 'react'
import './Navbarcss.css'
import { useNavigate } from 'react-router-dom';


function Navbar() {
  const [sticky, setSticky] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= -1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  })

  return (
    <nav className={`${sticky ? "sticky" : ""}`}>  
        
        <div className="nav-inner">
        <button><img src='alba-logo.svg' alt=''></img></button>
            <div className="links">
                <a href='#'>Services</a>
                <a href='#'>About</a>
                <a href='#'>Portfolio</a>
                <a href='#'>Blog</a>
                <a href='#'>Career</a>
            </div>
            <button className='nav-box-contact-us'>
            <a className='nav-contact-us'>Contact Us</a>
            </button>

            <a href='/login' className='nav-box-login'>
            <a className='nav-login'>Login</a>
            </a>
        </div>
    </nav>
  )
}

export default Navbar