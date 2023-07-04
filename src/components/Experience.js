import React from 'react'
import "./Experience.css"
import { BsFillPatchCheckFill } from "react-icons/bs";


const Experience = () => {
  return (
    <section id='Experience'>
        <h5>Skills I have</h5>
        <h2>My Experience</h2>

        <div className="container experience_container">
          <div className="experience_frontend">
            <h3>Frontend Skills</h3>
            <div className="experience_content">
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icons'/>
                <div><h4>HTML</h4>
                <small className='text-light'>Experienced</small>
                </div>                 
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icons'/>
                <div><h4>CSS</h4>
                <small className='text-light'>Experienced</small>
                </div>                 
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icons'/>
                <div><h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
                </div>                 
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icons'/>
                <div><h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
                </div>                 
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icons'/>
                <div><h4>React</h4>
                <small className='text-light'>Experienced</small>
                </div>                 
              </article>
              {/* <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icons'/>
                <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article> */}
            </div>
          </div>
          {/* End of Frontend */}
          <div className="experience_backend">
          <h3>Other Skills</h3>
            <div className="experience_content">
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icons'/>
                <div><h4>Python</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icons'/>
                <div><h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icons'/>
                <div><h4>Firebase</h4>
                <small className='text-light'>Inetrmediate</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icons'/>
                <div><h4>Communication</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icons'/>
                <div><h4>Presentation</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              {/* <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icons'/>
                <div><h4>HTML</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article> */}
            </div>
          </div>
        </div>
    </section>
  )
}


export default Experience
