import React, { useEffect, useState } from 'react'
import {bgImages} from './bg'
import './Main.css'


function Main() {

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => {
        const nextImage = prevImage + 1;
        return nextImage >= bgImages.length ? 0 : nextImage;
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);


  return (
    <>
    <div className='main_bg'>
        <div className="image_area">
          {bgImages.map((bg, index) => (
            <div
              key={index}
              className={`bgimg ${index === currentImage ? 'active' : ''}`}
            >
              <img src={bg.img} alt="" />
              <div className='project_name'>
                <p>{bg.project}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    
    </>
  )
}

export default Main