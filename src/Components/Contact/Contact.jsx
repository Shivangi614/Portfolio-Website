
import React, { useState } from 'react'
import './Contact.css'
import { FaLinkedin, FaGithub, FaPhone, FaLocationPin, FaEnvelope } from 'react-icons/fa6'

const Contact = () => {

    const [formData, setformData] = useState({ name: "", email: "", message: "" });

    const handlechange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = async (event) => {

        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "eda7fad8-e92a-4bac-96fb-c209ab3ea248");

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
            // ✅ Reset form fields to empty after submission
            setformData({ name: "", email: "", message: "" });
        }

    };
    return (


        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Get in <span className='highlight'>Touch</span></h1>

            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>I am not hard to find , let's create something truly <span className="highlight">Spectacular!</span></h1>
                    <p>Have a project in mind? Feel free to reach out!</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <p><FaEnvelope /> Email : <a href="mailto:jainshivangi614@gmail.com">jainshivangi614@gmail.com</a></p>

                        </div>
                        <div className="contact-detail">
                            <p><FaPhone /> Phone :<a href='tel:+91-8699474212'>+91-8699474212</a> </p>
                        </div>
                        <div className="contact-detail">
                            <p><FaLocationPin /> Location : Chandigarh, India</p>
                        </div>
                        <div className="contact-social">
                            <a href="https://www.linkedin.com/in/shivangi-jain-98002a2a2/" className="social-link"><FaLinkedin /></a>
                            <a href="https://github.com/Shivangi614" className="social-link"><FaGithub /></a>

                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    {/* <label htmlFor="">Your Name</label> */}
                    <input type="text" placeholder='Enter Your Name ' name='name' value={formData.name} onChange={handlechange} required />
                    {/* <label htmlFor="">Your Email</label> */}
                    <input type="email" placeholder='Enter Your Email' name='email' value={formData.email} onChange={handlechange} required />
                    {/* <label htmlFor="">Write your message</label> */}
                    <textarea name="message" rows="8" placeholder='Enter Your Message' value={formData.message} onChange={handlechange} required></textarea>
                    <button type='submit' className='contact-submit'>Submit Now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact