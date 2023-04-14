import React from 'react'
import { Link } from 'react-router-dom'
import {bgImages} from './bg'
import './Main.css'
import Slider from 'react-slick'


function Main() {

  const settings = {
    dots: true,
    infinite:true,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:false,
    nextArrow:false

   

  }
  return (
    <>
    <div className='main_bg'>
      
      <div className="text_area">
      <div className='hero_overview'>
        
        <span>
          Commited Towards 
          Quality Safety 
          &
          Customer Satisfaction
           
          </span> 
       
        
          
          
          
        </div>
        <div className="btn_area">
        <div className='btn_blue'>
            <Link to={'/about'}>About Us</Link>
          </div>
          <div className='btn_white'>
            <Link to={'#contact'}>Let's Talk</Link>
          </div>
        </div>


      </div>
      
      <div className="image_area">
      
      <Slider {...settings}>
        {
          bgImages.map((bg)=>(
            <div className='bgimg'>
              <img src={bg.img} alt="" />
              <div className='project_name'>
                <p>PROJECT:{bg.project}</p>
              </div>
            </div>
          ))
        
        }
      </Slider>

      

        
      </div>
      
    </div>
    </>
  )
}

export default Main