import React from 'react'
import './contact.css'
import Location from '../../images/location.png'
import Email from '../../images/email.png' 
import Github from '../../images/github.png'
import Linkedin from '../../images/linkedin.png'
import Resume from '../../images/resume.png'
import ContactPic from '../../images/contact.png'

const Contact = () => {
  return (
      <div className="contact-wrapper">
        <div className="contact-right">
          <h1 className="contact-title">Contact</h1>
          <hr />
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
              <a href="https://www.linkedin.com/in/latoya-head/" target='_blank' rel='noreferrer' >
                <img src={Linkedin} alt="linkedin" className="icon" />
                Linkedin
              </a>
            </div>
            <div className="contact-info-item">
              <a href="https://docs.google.com/document/d/1X6AqutLnflCO5ifSbt1x95Jcne8iTwPU/edit?usp=sharing&ouid=114194916012643120959&rtpof=true&sd=true" target='_blank' rel='noreferrer' >
                <img src={Resume} alt="resume" className="icon" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Contact