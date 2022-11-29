import React from 'react'
import './intro.css'
import Profile from '../../images/profilepic.png'
import Location from '../../images/location.png'
import Email from '../../images/email.png' 
import Github from '../../images/github.png'
import Linkedin from '../../images/linkedin.png'

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
              <div className="title-item">Resume</div>
              <div className="title-item">Contact</div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-l">
        <div className="about-card bg"></div>
          <div className="about-card">
            <img src={Profile} alt="profile" className='about-img' />
          </div>
      </div>
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-right">
          <h1 className="contact-title">Contact</h1>
          <hr className='center-ball'/>
          <div className="contact-info">
            <div className="contact-info-item">
                <img src={Email} alt="email" className="icon" />
                latoya30310@gmail.com
            </div>
            <div className="contact-info-item">
                <img src={Location} alt="location" className="icon" />
                Atlanta, Georgia
            </div>
            <div className="contact-info-item">
                <a href="https://github.com/latoyahead" target='_blank' rel='noreferrer'>
                  <img src={Github} alt="github" className="icon" />
                  Github
                </a>
            </div>
            <div className="contact-info-item">
                <a href="https://github.com/latoyahead" target='_blank' rel='noreferrer' >
                  <img src={Linkedin} alt="linkedin" className="icon" href='https://github.com/latoyahead'/>
                  Linkedin
                </a>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Intro