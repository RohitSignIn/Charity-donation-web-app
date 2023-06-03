import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
        <Link className='navLink' to={"/"}><h1>Charity</h1></Link>
        <div>
            <Link className='navLinkHome' to={"/"}>Home</Link>
            <Link className='navLink' to={"/total-fund"}>Fund</Link>
            <Link className='navLink' to={"/about"}>About</Link>
            <Link className='navLink' to={"/contact"}>Contact</Link>
        </div>
    </nav>
  )
}

export default Nav