import React from 'react'
import "./Hero.css"
import profile_img from "../../assest/arun.jpg"

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>iam arun kumar</span>,frontend developer</h1>
        <p> i,m fresher and build a responsive web application  </p>
        <div className='hero-action'>
          <div className='hero-connect'>conect with me</div>
          <div className='hero-resume'>my resume</div>
        </div>
      
    </div>
  )
}

export default Hero
