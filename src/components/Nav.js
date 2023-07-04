import React from 'react'
import './Nav.css'
import { AiTwotoneHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { MdWork } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import { useState } from 'react';


const Nav = () => {

  const [active, setActive] = useState("#")  
  return (
    <nav>
        <a href="#" onClick={()=>setActive('#')} className={active==="#"?"active":""}><AiTwotoneHome/></a>
        <a href="#About" onClick={()=>setActive('#About')} className={active==="#About"?"active":""}><AiOutlineUser/></a>
        <a href="#Experience" onClick={()=>setActive('#Experience')} className={active==="#Experience"?"active":""}><BiBookBookmark/></a>
        <a href="#Portfolio" onClick={()=>setActive('#Portfolio')} className={active==="#Portfolio"?"active":""}><MdWork/></a>
        <a href="#Contact" onClick={()=>setActive('#Contact')} className={active==="#Contact"?"active":""}><BiSolidContact/></a>
    </nav>
  )
}

export default Nav
