import React, { useState } from 'react'
import {FiCheckCircle} from 'react-icons/fi'
import {IoIosCloseCircleOutline} from 'react-icons/io'

function Contactsuccess() {

 const [isContacted, setIsContacted]= useState(false)

  const  submitContact = (e)=>{
        e.preventDefault();
        setIsContacted(true);
    }
  const closeContact =()=>{
    setIsContacted(false);
  }


  return (
    <>
    <div className="success-popup">
        <div className="close-popup" onClick={closeContact} >
        <IoIosCloseCircleOutline/>
        </div>
    <h2>Success!</h2>
    <div className="checkicon">
    <FiCheckCircle/>

    </div>
    
      <p>Thank You for Contacting Us.</p>
    </div>
    </>
  )
}

export default Contactsuccess