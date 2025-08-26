import React from 'react'
import "./Contact.css"

export default function Contact() {
  return (
    <div>
      <div className="contact">
        <div className="contact-sec">
            <h1>Get in Touch </h1>
            <p>I'd love to hear from you</p>
             
            <div className="contact-info">
            <div className="contact-details">
                <h3>Full Name:</h3>
                <input type="text" placeholder='Your Name' className='input'/>
                <h3>Email:</h3>
                <input type="email" placeholder='Your Email' className='input' />
                <h3>Message:</h3>
              <textarea name="" id="" placeholder='Your message' className='textarea'></textarea>
                <button>Submit</button>
                </div>
                <div className="contact-img">
                    <img src="https://ajay-pawar-portfolio.vercel.app/build/img/contact.png" alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
