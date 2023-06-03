import React, { useEffect, useState } from 'react'
import './Clients.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {clientImg} from './clientImages'



function Clients() { 

  const [settings, setSettings]= useState({

    dots: true,
    infinite:true,
    speed:500,
    slidesToShow:4,
    slidesToScroll:4,
    autoplay: true,
    autoplaySpeed: 2000

  });

  useEffect(()=>{
    const handleResize =()=>{
      const isMobile = window.matchMedia('(max-width:768px)').matches;
      if (isMobile){
        setSettings({
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1, // Change the number of slides to show
          slidesToScroll: 1, // Change the number of slides to scroll
          autoplay: true,
          autoplaySpeed: 2000
        });

      }else {
        setSettings({
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 4,
          autoplay: true,
          autoplaySpeed: 2000
        });
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize)

    return()=>{
      window.removeEventListener('resize', handleResize)
    };
  }, [])






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