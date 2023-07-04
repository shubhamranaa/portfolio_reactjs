import React from 'react'
import "./Contact.css"
import { MdOutlineMail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_chs5a4e', 'template_i0yoq3y', form.current, '3C0VjG1s1XNzG_K7m')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    };

  return (
    <section id="Contact">
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact_container">
          <div className="contact_options">
            <article className='contact_option'>
              <MdOutlineMail className='contact_option_icon'/>
              <h4>Email</h4>
              <h5>shubhamrana9910@gmail.com</h5>
              <a href="mailto:shubhamrana9910@gmail.com" target='_blank'>Send an Email</a>
            </article>

            <article className='contact_option'>
              <AiOutlineLinkedin className='contact_option_icon'/>
              <h4>LinkedIn</h4>
              <h5>Shubham Rana</h5>
              <a href="https://www.linkedin.com/in/shubham--rana-/" target='_blank'>Let's Connect</a>
            </article>

            <article className='contact_option'>
              <BsInstagram className='contact_option_icon'/>
              <h4>Instagram</h4>
              <h5>__shubhamrana__</h5>
              <a href="https://www.instagram.com/__shubhamrana__" target='_blank'>Let's Connect</a>
            </article>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" id="" placeholder='Your Full Name' required/>
            <input type="text" name='email' placeholder='Your Email' required />
            <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        
        </div>
    </section>
  )
}

export default Contact
