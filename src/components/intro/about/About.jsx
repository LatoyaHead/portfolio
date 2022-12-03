import React from 'react'
import Circles from '../../../images/purplecircle.avif'
import '../about/about.css'

const About = () => {
  return (
    <div className='about'>
      <div className="about-l">
        <div className="about-card bg"></div>
          <div className="about-card">
            <img src={Circles} alt="purple-circles" className='about-img' />
          </div>
      </div>
      <div className="about-r">
        <h1 className="about-title" style={{fontSize:'70px', color: 'white'}}>About Me</h1>
        <p className="description-info">
          Hello World! My name is Latoya Head, Front-End Developer in Atlanta, Georgia. 
          I'm a recent graduate from Per Scholas(2022) Software Engineering program. 
          As a Front-End Developer I aim to make accessible and user friendly websites and
          applications using HTML, Javascript, and React. If you're looking for a developer to add to you team, I'd 
          love to hear from you!
        </p>
      </div>
    </div>
  )
}

export default About