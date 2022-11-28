import React from 'react'
import './projects.css'
import '../projectItems/ProjectItems'
import ProjectItems from '../projectItems/ProjectItems'
import {projects} from'../../data'


const Projects = () => {
  return (
    <div className='project'>
      <div className='project-text'>
        <h1 className="project-title">Projects</h1>
        <p className="project-desc">
          Here are projects I have created using HTML, CSS, Javascript, React, Nodejs
        </p>
      </div>
      <div className="project-list">
        {projects.map((item =>
          <ProjectItems key={item.id} img={item.img} link={item.link} />
          ))}     
      </div>
    </div>
  )
}

export default Projects