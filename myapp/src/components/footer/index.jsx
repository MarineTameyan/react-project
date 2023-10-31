import React from "react";
import Location from "../../assets/images/locationlogo.png";
import Mail from "../../assets/images/maillogo.png";
import Phone from "../../assets/images/phonelogo.png";
import Twitter from "../../assets/images/twitter.png";
import Facebook from "../../assets/images/facebook.png";
import Linkedin from "../../assets/images/linkedin.png";
import Instagram from "../../assets/images/instagram.png";
import "./footer.css"

export const Footer = () =>{
return <footer>
    <div className="footer">
    <div className="footer-first">
        <h2>GET IN TOUCH</h2>
        <p>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
        <div className="footer-contact-info">
        <div className="location">
            <img src={Location} alt="" />
            <p>123 Street, New York, USA</p>
        </div>
        <div className="mail">
            <img src={Mail} alt="" />
            <p>mail@domain.com</p>
        </div>
        <div className="phone">
            <img src={Phone} alt="" />
            <p>+012 345 67890</p>
        </div>
    </div>
    </div>
    
    <div className="footer-second">
        <h2>NEWSLETTER</h2>
        <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
        <div className="footer-input">
            <label>
                <input type="text" placeholder="Your Email Address"/>
                <button className="footer-button">Sign up</button>
            </label>
        </div>
        <h2>FOLLOW US</h2>
        <div className="footer-logo">
            <img src={Twitter} alt="" />
            <img src={Facebook} alt="" />
            <img src={Linkedin} alt="" />
            <img src={Instagram} alt="" />
        </div>
    </div>
    </div>
    </footer>
    }