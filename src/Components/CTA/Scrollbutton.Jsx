import React, { useEffect, useState } from 'react'
import './Cta.css'
import {AiOutlineArrowUp} from 'react-icons/ai'

function Scrollbutton() {

    const [showButton, setShowButton]= useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return()=>window.removeEventListener('scroll', handleScroll)
    }, []);
    const handleScroll =()=>{
        if(window.pageYOffset >200){
            setShowButton(true)

        }else{
            setShowButton(false)
        }
    }
    const clickToScroll =()=>{
        window.scrollTo({top:0, behavior:'smooth'})
    }


  return (
    <div className='scroll_button'>
        <AiOutlineArrowUp/>

    </div>
  )
}

export default Scrollbutton