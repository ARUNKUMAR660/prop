import React from 'react'
import './contact.css'
import theme_pattern from "../../assest/astrik.png"
import mail_icon from "../../assest/mail_icon.svg"
import location_icon from "../../assest/location_icon.svg"
import call_icon from "../../assest/call_icon.svg"

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c70ca5b0-c7c2-44c6-8139-26aca2f7182e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      

     alert(res.message);
    }
  };
  return (



    <div id='contact' className='contact'>
        <div className='contact-title'>
            <h1>Contact</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className='contact-section'>
            <div className="contact-left">
                <h1>Lets talk</h1>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, suscipit?</p> */}
                <div className='contact-details'>
                    <div className='contact-detail'>
                      <img src={mail_icon} alt="" /><p>kumarparun660@gmail.com</p>

                    </div>
                    <div className='contact-detail'>
                     <img src={call_icon} alt="" /><p>8925002534</p>
                    
                    </div>
                    <div className='contact-detail'>
                      <img src={location_icon} alt="" /><p> Guduvancheri,chennai</p>
                    
                    </div>
              </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="">your name</label>
                <input type="text" placeholder='enter your name' name='name' autoComplete='off' />
                <label htmlFor="">your email</label>
                <input type="email"placeholder='enter your email' name='email' autoComplete='off'/>
                <label htmlFor="">write your message</label>
                <textarea name="message" rows="8" placeholder='enter your message'></textarea>
                <button type='submit' className="contact-submit">submit</button>
            </form>
        </div>


      
    </div>
  )
}

export default Contact
