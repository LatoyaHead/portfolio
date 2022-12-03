import React from 'react'
import './intro.css'
import Profile from '../../images/profile-pic.png'



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
      <div className="right">
        <div className='right-bg'></div>
        <img src={Profile} alt="profile" className='picture' />
      </div>
      </div>
  )
}

export default Intro