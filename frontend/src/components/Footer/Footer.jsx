import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} />
            <p></p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} />
                <img src={assets.twitter_icon} />
                <img src={assets.linkedin_icon} />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>
                Get In Touch
            </h2>
            <ul>
                <li>01521-530582</li>
                <li>hasibulnirob.official@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copyright'>© Copyright 2024 || Hasibul Hasan Nirob || All Right Reserved.</p>
    </div>
  )
}

export default Footer
