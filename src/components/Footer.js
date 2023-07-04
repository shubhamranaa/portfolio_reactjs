import React from 'react'
import './Footer.css'
import Experience from './Experience'

function footer() {
  return (
    <footer>
      <a href="" className='footer_logo'>Shubham Rana</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>

      <div className="footer_copyright">
        <small>&copy; Shubham Rana. All rights reserved.</small>
      </div>


    </footer>
  )
}

export default footer
