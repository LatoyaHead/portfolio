import React from 'react'
import './intro.css'
import Profile from '../../images/profilepic.png'


const Intro = () => {
  return (
    <div className='intro'>
      <div className='container-l'>
        <div className='l-wrapper'>
          <h1 className='l-intro'>Hello, I'm Latoya <br/>Front-End Developer</h1>
          <div className="title">
            <div className="title-wrapper">
              <div className="title-item">About Me</div>
              <div className="title-item">Projects</div>
              <div className="title-item">Contact</div>
              <div className="title-item">Let's Work!</div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-l">
        <div className="about-card bg"></div>
          <div className="about-card">
            <img src={Profile} alt="laptop" className='about-img' />
          </div>
      </div>
      </div>
  )
}

export default Intro