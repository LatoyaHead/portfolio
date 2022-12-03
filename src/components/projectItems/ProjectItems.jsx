import React from 'react'
import './projectItems.css'

const ProjectItems = ({img,link}) => {
  return (
    <div className='project-items'>
      <div className="product-browser">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <a href={link} target='_blank' rel='noreferrer'>
        <img src={require(`../../images/${img}`)} className="p-img" alt='projects' />
      </a>
    </div>
  )
}

export default ProjectItems