import React from 'react'
import {Link} from 'react-router-dom'
import './Projects.css'
import Ongo from '../../Assets/ongo.jpg'
import Area from '../Pages/Area'
import {BsArrowRightSquare} from 'react-icons/bs'


function Projects() {

  const scrollToTop =()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}

  



  return (
    <>
    <Area />
    <section className="project" id='project'>
      <h2>PROJECTS</h2>
      <h4>EPPL HAVING PROJECTS  ALLOVER INDIA </h4>
      <div className="project_area">
        <div className="Project_card">
          <h2>ONGOING </h2>
          <small>PROJECTS</small>
          <article>
            <div className="project_icon">
              <img src={Ongo} alt="" />
            </div>
            <div className='p-text'>
              <span className='num' >22 <span>RUNNING <br />  PROJECTS</span>
              </span>
              <div className='btn'>
                <Link className='link' to ='/running' onClick={scrollToTop}  >View More <BsArrowRightSquare/></Link>
              </div>
            </div>
          </article>

        </div>
        <div className="Project_card">
        <h2>CLOSED </h2>
          <small>PROJECTS</small>
          <article>
            <div className="project_icon">
              <img src={Ongo} alt="" />
            </div>
            <div className='p-text'>
              <span className='num' >60 <span>CLOSED <br />  PROJECTS</span>
              </span>
              <div className='btn'>
                <Link className='link' to='/closed' onClick={scrollToTop} >View More <BsArrowRightSquare/></Link>
                
              </div>
            </div>
          </article>
        </div>
        

      </div>
    </section>
    </>
  )
}

export default Projects