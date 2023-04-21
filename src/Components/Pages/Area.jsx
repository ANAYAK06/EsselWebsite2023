import React from 'react'
import './Pages.css'
import Fab from '../../Assets/fab.jpg'
import {BsVectorPen} from 'react-icons/bs'
import {TbFileCertificate} from 'react-icons/tb'
import {AiOutlineSafetyCertificate} from 'react-icons/ai'
import {MdSentimentSatisfiedAlt} from 'react-icons/md'


function Area() {



   
    
  return (
    <>
    <section id='area'>
    <div className="area_of_operation" >
    <div className="area">
        
        <h2>KEY AREA OF OPERATION</h2>
        
        <div className="operation">
            
            <div className="area_card"
            
            
             >
            <h3>Electrical Erection, Testing & Commissioning</h3>
            <ul>
                <li> <BsVectorPen/> Installation,Testing and Commissioning of E. H.V Substation (AIS & GIS)</li>
                <li> <BsVectorPen/>Erection, Testing,Commissioning of Plant Electricals</li>
                <li> <BsVectorPen/>Complete Plant illumination and Electrical installation for Cement,Steel and Power Plant</li>
                <li> <BsVectorPen/>Installation of Heavy  Equipment</li>
                <li> <BsVectorPen/>Providing High Skilled Manpower Services</li>
            </ul>
            </div>
           
            <div className="area_card"
            >
            <h3>Control and Instrumentation</h3>
            <ul>
                <li> <BsVectorPen/>Erection, Testing and Commissioning of Instrumentation systems for Power, Steel, Cement and other Process Industries.</li>
                
            </ul>
            </div>
            <div className="area_card">
            <h3>Structural Works (Under Work Unit, Bhilai)</h3>
            <ul>
                <li><BsVectorPen/> Heavy Structural Fabrication & Installation of Structure for verious Industries </li>
                <li> <BsVectorPen/>Pipe Gallery, Conveyor structure, Cable Trestle, Building Substation</li>
                <li><BsVectorPen/> Color Coated Sheeting</li>
                
            </ul>
            </div>
            <div className="area_card">
            <h3>Civil Projects</h3>
            <ul>
                <li><BsVectorPen/> Complete Civil works for Substations including Foundation, Building Road, Fencing etc. </li>
            </ul>
            </div>
         <div className="area_card">
         <h3>
Civil Contract Using Pre-Cast Technology</h3>
         </div>

            
        </div>
    </div>
    <div className="fabunit" >
        <h2>FABRICATION AND WORKS UNIT</h2>
        <p>Our Fabrication & Works Unit at Bhilai Steel city under our mechanical division is an integrated fabrication and supporting activity centre providing customized product supporting for our installation projects. The unit consist of 6000 Sq.Ft. of covered area and 85000 Sq.Ft. of open yard with all modern fabrication facilities and machines</p>
        <div className="fab_image">
            <img src={Fab} alt="" />
        </div>
        <div className="certi_card">
            <article className='c_card'>
                <TbFileCertificate  className='c-icon'/>
                <h5>Certified </h5>
                <small>ISO 9002-2008</small>

            </article>
            <article className='c_card'>
                <AiOutlineSafetyCertificate  className='c-icon'/>
                <h5>Safety </h5>
                <small>Zero Accidents</small>

            </article>
            <article className='c_card'>
                <MdSentimentSatisfiedAlt  className='c-icon'/>
                <h5>Clients </h5>
                <small>Most Trusted Contractor</small>

            </article>

        </div>
        
    </div>
    </div>
    </section>
    </>
  )
}

export default Area