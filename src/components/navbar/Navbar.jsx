import React, { useRef, useState } from 'react'
import "./Navbar.css"
import logo from "../../assest/logo.png"
import underline from "../../assest/nav_underline.svg"
import { Link } from 'react-router-dom'
import menu_open from "../../assest/menu_open1.png"
// import menu_close from "../../assest/menu_close.png"
import menu_close from "../../assest/cross.jpeg"



const Navbar = () => {
  const[menu,setmenu]=useState("home");
  const menuRef = useRef();
  const openMenu= () =>{
    menuRef.current.style.right="0"
  }
  const closeMenu= () =>{
    menuRef.current.style.right="-350px"
  }
  return (

      <div className='navbar'>
        <img src={logo} alt="" />
        <img src={menu_open} onClick={openMenu} alt="" className='open' />
        <ul ref={menuRef} className='nav-menu'>
          <img src={menu_close} onClick={closeMenu} alt="" className='close' />
          <li><Link to={"/"}><p className='a' onClick={()=>setmenu("home")}>home</p></Link>{menu==="home"?<img src={underline}alt=''/>:<></>}</li>
          <li><Link to={"/About"}><p className='a' onClick={()=>setmenu("about")}>about me</p></Link>{menu==="about"?<img src={underline}alt=''/>:<></>}</li>
          <li><Link to={"/Services"}><p className='a' onClick={()=>setmenu("service")}>Skills</p></Link>{menu==="service"?<img src={underline}alt=''/>:<></>} </li>
          <li><Link to={"/Mywork"}><p className='a'  onClick={()=>setmenu("portfolio")}>protfolio</p></Link>{menu==="portfolio"?<img src={underline}alt=''/>:<></>}</li>
          <li><Link to={"/Contact"}><p className='a' onClick={()=>setmenu("contact")}>contact</p></Link>{menu==="contact"?<img src={underline}alt=''/>:<></>}</li>
        </ul>
       
           
        <div className='nav-connect'>connect with me</div>
      
      </div>
   
  )
}

export default Navbar
