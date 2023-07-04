import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../assets/me.png'
import HeaderSocial from './HeaderSocial'

function Header() {
  return (
    <header>
        <div className="container header_container">
            <h5>Hello, I am</h5>
            <h1>Shubham Rana</h1>
            <h5 className='text-light'>Frontend Developer</h5>
            <CTA />
            <HeaderSocial />
            <div className="me">
                <img src={ME} alt="" />
            </div>
        </div>
    </header>
  )
}

export default Header
