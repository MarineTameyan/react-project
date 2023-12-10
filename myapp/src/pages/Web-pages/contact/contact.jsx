import React from "react";
import Location from "../../../assets/images/locationlogo.png"
import Mail from "../../../assets/images/maillogo.png"
import Phone from "../../../assets/images/phonelogo.png"
import "./contact.scss";
import { useState } from "react";
import { setMessage } from "../../../platform/api/notifications-api";

function Contact (){

    const [color, setColor] = useState('grey')

    const [messageFormData, setMessageFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChanges = (e) => {
        setMessageFormData({...messageFormData, [e.target.name]: e.target.value})
    }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        const createMessage = async () => {
            if (messageFormData.name && messageFormData.email && messageFormData.subject
                && messageFormData.message && emailRegex.test(messageFormData.email)){
                    const result = await setMessage(messageFormData)
                    setColor('green')
                    if(result){
               }
                }else{
                  setColor('red')
                  alert("You must fill all fields!")
                  alert('Email is not valid');
                }
              }

    return <div className="contact">
        <h1>CONTACT US</h1>
        <div className="contact-details">
          <div className="forms">
            <label>
                <input type="text" placeholder="Your Name" onChange={handleChanges} 
                value={messageFormData.name} name={'name'} style={{border: '1px solid', color}}/>
            </label>
            <label>
                <input type="text" placeholder="Your Email" onChange={handleChanges} 
                value={messageFormData.email} name={'email'} style={{border: '1px solid', color}}/>
            </label>
            <label>
                <input type="text" placeholder="Subject" onChange={handleChanges} 
                value={messageFormData.subject} name={'subject'} style={{border: '1px solid', color}}/>
            </label>
            <label>
                <textarea placeholder="Message" onChange={handleChanges} 
                value={messageFormData.message} name={'message'} style={{border: '1px solid', color}}></textarea>
            </label>
            <div className="button">
                <button className="button-send" onClick={createMessage}>Send Message</button>
            </div>
          </div>
          <div>
            <div className="map">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24386.40539233668!2d44.51989269999999!3d40.1801216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sam!4v1694866964763!5m2!1sen!2sam"  
                style={{width:'100%'}} height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div className="contact-info">
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
        </div>

    </div>
}

export default Contact