import React, { useState } from 'react'
import Projectcard from '../Projectcard'
import './Ongoing.css'
import { ongoehvProjects } from './ongoehv'
import { ongoeiProjects } from './ongoei'
import { ongoFabProjects } from './ongofab'
import ovr from '../../../Assets/Ov.jpg'

function Ongoing() {
  

  const [activeTab, setActiveTab]= useState('EHV')

  const handleTabClick =(tab)=>{
    setActiveTab(tab)
  }
  const renderProject=()=>{
    switch (activeTab){
      case 'EHV':
        return <Projectcard projects={ongoehvProjects} />
      case 'E&I':
        return <Projectcard projects={ongoeiProjects} />
      case 'FAB':
        return <Projectcard projects={ongoFabProjects} />

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
          ONGOING PROJECTS
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

export default Ongoing