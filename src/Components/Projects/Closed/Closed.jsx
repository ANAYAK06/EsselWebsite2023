import React, { useState } from 'react'
import Projectcard from '../Projectcard'
import './Closed.css'
import { closedehvProjects } from './closedehv'
import { closedeniProjects } from './closedeni'
import { closedfabProjects } from './closedfab'
import ovr from '../../../Assets/Ov.jpg'

function Closed() {

  const [activeTab, setActiveTab]= useState('EHV')

  const handleTabClick =(tab)=>{
    setActiveTab(tab)
  }
  const renderProject=()=>{
    switch (activeTab){
      case 'EHV':
        return <Projectcard projects={closedehvProjects} />
      case 'E&I':
        return <Projectcard projects={closedeniProjects} />
      case 'FAB':
        return <Projectcard projects={closedfabProjects} />

      default:
        return null
    }
  }



  return (
    <>
    <section className='ongoing_project' >
      <div className="ongo_banner">
        <img src={ovr} alt="" />
        <div className='banner_text'>
          CLOSED PROJECTS
        </div>

      </div>
      <div className="project_tab">
        <div className={`tab ${activeTab === 'EHV' ? 'active':''}`} onClick={()=>handleTabClick('EHV')} >EHV SUBSTATION PROJECTS</div>
        <div  className={`tab ${activeTab === 'E&I' ? 'active':''}`} onClick={()=>handleTabClick('E&I')}>E&I  PROJECTS</div>
        <div className={`tab ${activeTab === 'FAB' ? 'active':''}`} onClick={()=>handleTabClick('FAB')}>FABRICATION PROJECTS</div>
        <div className={`tab ${activeTab === 'CIVIL' ? 'active':''}`} onClick={()=>handleTabClick('CIVIL')}>CIVIL PROJECTS</div>
      </div>
    
    <div className='slider_div'>
           {renderProject()}
    </div>
    
   
   
   </section>

    </>
  )
}

export default Closed