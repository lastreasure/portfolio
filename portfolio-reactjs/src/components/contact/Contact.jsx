/* eslint-disable react/jsx-no-target-blank */
import React, { useRef } from 'react';
import './contact.css';
import {HiOutlineMail} from 'react-icons/hi';
import Callmoji from '../../assets/tishmoji-call.png';
import emailjs from 'emailjs-com'

const {REACT_APP_EMAIL_SERVICE_ID, REACT_APP_EMAIL_TEMPLATE_ID, REACT_APP_EMAIL_PUBLIC_KEY} = process.env;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(REACT_APP_EMAIL_SERVICE_ID, REACT_APP_EMAIL_TEMPLATE_ID, form.current, REACT_APP_EMAIL_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>letitiatreasure@gmail.com</h5>
            <a href="mailto:letitiatreasure@gmail.com" target="_blank">Send a Message</a>
          </article>
          <div className="contact__option">
            <img src={Callmoji} alt="call" />
          </div>
        </div>
        {/* form */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder='Your Email Address'required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact