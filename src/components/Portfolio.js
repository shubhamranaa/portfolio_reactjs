import React from 'react'
import './Portfolio.css'
import IMG1 from '../assets/chatapp.jpg';
import IMG2 from '../assets/calculaltor.jpg';
import IMG3 from '../assets/mealsapp.jpg';
import IMG4 from '../assets/port1.jpg';
import IMG5 from '../assets/port1.jpg';




const Portfolio = () => {
  return (
    <section id="Portfolio">
        <h5>My Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio_container">
          <article className='portfolio_item'>
            <div className="portfolio_item-image">
              <img src={IMG1} alt="Netflix" />
            </div>
            <h3>Chat App</h3>
            <div className="portfolio_item-cta">
            <a className="btn" target="_blank" href="https://github.com/shubhamranaa/chatapp_reactjs">Github</a>
            <a className="btn btn-primary" target="_blank" href="https://chatapp-bfa93.web.app/login">Live Demo</a>
            </div>
          </article>

          <article className='portfolio_item'>
            <div className="portfolio_item-image">
              <img src={IMG2} alt="Netflix" />
            </div>
            <h3>Calculator App</h3>
            <div className="portfolio_item-cta">
            <a className="btn" target="_blank" href="https://github.com/shubhamranaa/calculator-in-reactjs">Github</a>
            <a className="btn btn-primary" target="_blank" href="https://shubhamranaa.github.io/calculator-in-reactjs/">Live Demo</a>
            </div>
          </article>

          <article className='portfolio_item'>
            <div className="portfolio_item-image">
              <img src={IMG3} alt="Netflix" />
            </div>
            <h3>Meals App</h3>
            <div className="portfolio_item-cta">
            <a className="btn" target="_blank" href="https://github.com/shubhamranaa/Meals-app">Github</a>
            <a className="btn btn-primary" target="_blank" href="https://shubhamranaa.github.io/Meals-app/">Live Demo</a>
            </div>
          </article>

          {/* <article className='portfolio_item'>
            <div className="portfolio_item-image">
              <img src={IMG1} alt="Netflix" />
            </div>
            <h3>Portfolio item title</h3>
            <div className="portfolio_item-cta">
            <a className="btn" target="_blank" href="https://github.com">Github</a>
            <a className="btn btn-primary" target="_blank" href="">Live Demo</a>
            </div>
          </article>
          
          <article className='portfolio_item'>
            <div className="portfolio_item-image">
              <img src={IMG1} alt="Netflix" />
            </div>
            <h3>Portfolio item title</h3>
            <div className="portfolio_item-cta">
            <a className="btn" target="_blank" href="https://github.com">Github</a>
            <a className="btn btn-primary" target="_blank" href="">Live Demo</a>
            </div>
          </article>

          <article className='portfolio_item'>
            <div className="portfolio_item-image">
              <img src={IMG1} alt="Netflix" />
            </div>
            <h3>Portfolio item title</h3>
            <div className="portfolio_item-cta">
            <a className="btn" target="_blank" href="https://github.com">Github</a>
            <a className="btn btn-primary" target="_blank" href="">Live Demo</a>
            </div>
          </article> */}
      
        </div>
    </section>
  )
}

export default Portfolio
