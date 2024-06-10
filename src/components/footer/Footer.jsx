import React from 'react'
import "./footer.css"
import footer_logo from "../../assest/footer_logo.svg"
import user_icon from "../../assest/user_icon.svg"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, saepe.</p>
            </div>
            <div className="footer-top-right">
                <div className='footer-email-input'>
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='enter your email'/>
                </div>
                <div className='footer-subscribe'>subscribe</div>
            </div>
        </div>
        <hr />
        <div className='footer-bottom'>
            <p className='footer-botom-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <div className='footer-bottom-right'>
                <p>terms of service</p>
                <p>privacy policy</p>
                <p>connectwith me</p>

            </div>

        </div>
      
    </div>
  )
}

export default Footer
