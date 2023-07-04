import React from 'react'
import './About.css'
import ME from '../assets/m2.jpg'
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";


const About = () => {
  return (
    <section id="About">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about_container">
            <div className="about_me">
                <div className="about_me_image">
                    <img src={ME} alt="my-img" />
                </div>
            </div>

            <div className="about_content">
                <div className="about_cards">
                    <article className='about_card'>
                        <FaAward className='about_icon'/>
                        <h5>Experience</h5>
                        <small>1+ Years Working</small>
                    </article>
                    <article className='about_card'>
                        <VscFolderLibrary className='about_icon'/>
                        <h5>Projects</h5>
                        <small>15+ Completed</small>
                    </article> 
                </div>
                    <p>Highly skilled and motivated Frontend Developer with one year of professional experience in developing responsive and user-friendly web applications. Seeking to leverage my expertise in HTML, CSS, JavaScript, and frameworks like React to contribute to the success of a dynamic organization. </p>
            </div>
        </div>

    </section>
  )
}

export default About
