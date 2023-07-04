import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/shubham--rana-/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/shubhamranaa" target='_blank'><BsGithub/></a>
        <a href="https://instagram.com/__shubhamrana__" target='_blank'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocial

