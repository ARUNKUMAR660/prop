import React from 'react'
import './mywork.css'
import theme_pattern from '../../assest/astrik.png'
import mywork_data from "../../assest/mywork_data"
import arrow_icon from "../../assest/arrow_icon.svg"


const Mywork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>my latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        <div className='link'>
           <img src={mywork_data.one} alt="" />
           <a href="https://arunkumar660.github.io/spices/">link</a>
        </div> 
        <div className='link'>
           <img src={mywork_data.two} alt="" />
           <a href="https://arunkumar660.github.io/spices/">link</a>
           
        </div>
        <div>
            <img src={mywork_data.three} alt="" />
            <a href="https://arunkumar660.github.io/bootstrap2/">link</a>
        </div>
        {/* <img src={mywork_data.four} alt="" />

        <img src={mywork_data.five} alt="" />
        <img src={mywork_data.six} alt="" /> */}
          
         
      </div>
      <div className='mywork-showmore'>
        <p>show more</p>
        <img src={arrow_icon} alt="" />

      </div>
      
    </div>
  )
}

export default Mywork

