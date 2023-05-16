import React  from 'react'
import {FiCheckCircle} from 'react-icons/fi'
import {IoIosCloseCircleOutline} from 'react-icons/io'

function Contactsuccess({onClose}) {

 


  return (
    <>
    <div className="success-popup">
        <div className="close-popup" onClick={onClose} >
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