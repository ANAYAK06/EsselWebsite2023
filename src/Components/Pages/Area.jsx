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
                <li> <BsVectorPen/>Installation, Testing and Commissioning of E. H.V Substation (AIS & GIS)up to 765KV</li>
                <li> <BsVectorPen/>Installation of HVDC SS Projects </li>
                <li> <BsVectorPen/>Supply Installation, Testing, Commissioning of Complete Plant Electricals and Illumination for Cement, Steel, Power, and Process industries</li>
                <li> <BsVectorPen/>Unloading Shifting and Installation of Heavy Equipment</li>
                <li> <BsVectorPen/>Providing High Skilled Manpower Services</li>
            </ul>
            </div>
           
            <div className="area_card"
            >
            <h3>Control and Instrumentation</h3>
            <ul>
                <li> <BsVectorPen/>Supply Installation, Testing and Commissioning of Instrumentation systems for Cement, Steel, Power and Process Industries</li>
                
            </ul>
            </div>
            <div className="area_card">
            <h3>Structural & Mechanical Works (Under Works Unit, Bhilai)</h3>
            <ul>
                <li><BsVectorPen/> Fabrication of Heavy Structural, Ducts etc for various Industries </li>
                <li> <BsVectorPen/>Pipe Gallery, Conveyor structure, Cable Trestle, Buildings Structural for various industries</li>
                <li><BsVectorPen/>Fabrication and Erection of Structural, Piping etc for various industries</li>
                <li><BsVectorPen/>Sheeting works for building , conveyors etc</li>
                
            </ul>
            </div>
            <div className="area_card">
            <h3>Civil Projects</h3>
            <ul>
                <li><BsVectorPen/>Complete Civil works for HV Substations (AIS/GIS ) including Foundation, Buildings, Road, Fencing etc </li>
            </ul>
            </div>
         <div className="area_card">
         <h3>Operation & Maintenance</h3>
         <ul>
         <li><BsVectorPen/>Providing technically skilled manpower for operation and maintenance of Steel, Power and Cement Plants. </li>
         </ul>
         </div>

            
        </div>
    </div>
    <div className="fabunit" >
        <h2>FABRICATION AND WORKS UNIT</h2>
        <p>Our works unit at Bhilai Heavy industrial area, with overall area of approx. 1,55,000 sq. ft. with all modern fabrication facility suitable for heavy structural, Ducts etc with 40000 sq. ft. covered shed etc; including for blasting and painting with present capacity to dispatch 500 to 700 MT per month of medium to heavy structural and looking to enhance the capacity in near future. <br />
We had delivered quality fabricated structural to valued customers like M/s JSW, approx.(6500MT) through M/s Salasar , M/s Atmastco, M/s Towel Engineering  , to M/s Adani Ports,(1750MT) through M/s Towel and M/s CINDA Engineering,  to M/s SAIL, Bhilai Steel Plant(4800MT)through M/s ABB Ltd, to M/s Tata Steel Kalinga Nagar project (456MT) , for NTPC Talcher through M/s Tata Projects (800MT)
</p>
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