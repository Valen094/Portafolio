import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'


export const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <ul className='linksnavbar'>
          <li><NavLink to = '/'>Home</NavLink></li>
          <li><NavLink to= '/projects'>Projects</NavLink></li>
        </ul>

        {/* <a href="" >Home</a>
        <a href="">Projects</a>
        <a href="">Work Experiences</a>
        <a href="">Contact Me</a> */}

      </div>

    </>
  )
}
