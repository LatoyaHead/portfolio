import React from 'react'
import Laptop from '../../../images/laptop.avif'
import '../about/about.css'

const About = () => {
  return (
    <div className='about'>
      <div className="about-l">
        <div className="about-card bg"></div>
          <div className="about-card">
            <img src={Laptop} alt="laptop" className='about-img' />
          </div>
      </div>
      <div className="about-r">
        <h1 className="about-title" style={{fontSize:'60px'}}>About Me</h1>
        <p className="description-info">
          Hello, my name is Latoya and I'm a recent graduate from Per Scholas(2022) Software Engineering program. I'm a Front-End Developer that builds websites using HTML, Javascript, and React. 
        </p>
      </div>
    </div>
  )
}

export default About