import React from 'react'
import './Card.css' 
import {AiOutlineCloseCircle} from 'react-icons/ai'

function Model({data, onClose}) {

    const handleClose = (()=>{
        onClose()
    })
  return (

    
    <>
    <article className='modelpopup'>
        <div className="close_btn" onClick={handleClose}>
            <AiOutlineCloseCircle/>

        </div>

        <h3>PROJECT{}</h3>
        
        <div className="photos">
            {data.photos.map((photo,idx)=>(

                <img key={idx} src={photo} alt="" />

            ))
                
            }

        </div>
    </article>

    </>
  )
}

export default Model