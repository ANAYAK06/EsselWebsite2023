import React from 'react'
import './Clients.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {clientImg} from './clientImages'



function Clients() { 

  const settings = {
    dots: true,
    infinite:true,
    speed:500,
    slidesToShow:4,
    slidesToScroll:4,
    autoplay: true,
    autoplaySpeed: 2000
  }



  return (

   
    <>

    <section className='client-section' id='clients'>
      <div className="client_area">
        <h2>OUR CLIENTS</h2>
        <h4>OUR CLIENTS WITH SATISFACTION </h4>
      </div>
    <Slider {...settings}>
      {
        clientImg.map(image=>(
          <div key={image.id} className="client_logo">
            <img src={image.imageurl} alt="" />

          </div>
        ))
      }

    </Slider>
    </section>
    </>
  )
}

export default Clients