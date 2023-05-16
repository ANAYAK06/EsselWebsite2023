import React from 'react'
import {FiCheckCircle} from 'react-icons/fi'
import {IoIosCloseCircleOutline} from 'react-icons/io'
import './Careers.css'

function Successpopup({onClose}) {
  return (
    <>
    <div className="success-popup">
        <div className="closebtn" onClick={onClose}>
        <IoIosCloseCircleOutline/>
        </div>
    <h2>Success!</h2>
    <div className="checkicon">
    <FiCheckCircle/>

    </div>
    
      <p>Your Request has been submitted successfully.</p>
    </div>
    </>
  )
}

export default Successpopup