import React from 'react'
import './about.css'
import theme_pattern from '../../assest/astrik.png'
import Profile_img from '../../assest/arun.jpg'

function About() {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={Profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Motivated and dedicated Frontend developer with strong foundation in programming principles. skilled in python,html ,css ,javascript and react passionate about creating efficient and reliable applications. strong problem solving and team work abilities.</p>
                    <p>iam a bsc computer science graduate.after gratuate i complete full stack development course login360 velachery</p>
                </div>
                <div className="about-skills">
                    <div className='about-skill'><p>HTML& css</p><hr style={{width:"70%"}}/></div>
                    <div className='about-skill'><p>REACTJS</p><hr style={{width:"60%"}}/></div>
                    <div className='about-skill'><p>JAVASCRIPT</p><hr style={{width:"50%"}}/></div>
                    <div className='about-skill'><p>PYTHON</p><hr style={{width:"60%"}}/></div>
                </div>
            </div>
            
        </div>
        {/* <div className='about-achievements'>
                <div className="about-achivement">
                    <h1>BSC COMPUTER SCIENCE</h1>
                    <p>2020-2023</p>
                </div>
                <div className="about-achivement">
                    <h1>FULL STACK PYTHON</h1>
                    <p></p>
                </div>
                <div className="about-achivement">
                    <h1>10+</h1>
                    <p>happy client</p>
                </div>

        </div> */}
      
    </div>
  )
}

export default About
