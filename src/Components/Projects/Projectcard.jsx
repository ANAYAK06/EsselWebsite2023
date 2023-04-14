import React,{useCallback, useEffect, useMemo, useState} from 'react'
import './Card.css'
import Slider from 'react-slick'
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'
import Model from './Model'



function Projectcard({projects}) {


    const NextArrow = ({onClick})=> {
        return(
          <div className="arrow next" onClick={onClick}>
            <FaArrowRight />
    
          </div>
        )
      }
      const PrevArrow = ({onClick})=> {
        return(
          <div className="arrow prev" onClick={onClick} >
            <FaArrowLeft />
    
          </div>
        )
      }
      const [imageIndex, setImageIndex]= useState(0)


     
      const[showModel, setShowModel] = useState(false)
      const [showData, setShowData] = useState(null)

      const handleModel =((project)=>{
        
        setShowData(project);
        setShowModel(true)
      })
      
     const handleCloseModel = ()=>{
      setShowModel(false)
     }
    

 
      const mobileSettings = useMemo(()=>({
        dots:true,
        infinite:true,
        lazyLoad:true,
        speed:300,
        slidesToShow:1,
        centerMode:true,
        centerPadding:0,
        nextArrow:<NextArrow />,
        prevArrow:<PrevArrow />,
        beforeChange:(current, next)=>setImageIndex(next)

      }),[]);
      const [settings, setSettings] = useState({
        dots:true,
        infinite:true,
        lazyLoad:true,
        speed:300,
        slidesToShow:3,
        centerMode:true,
        centerPadding:0,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow />,
        beforeChange:(current, next)=>setImageIndex(next)

      })
      const [selectedImageIdx, setSelectedImageIdx] = useState(Array(projects.length).fill(0))

      const handleImageClick = (projectIdx, idx)=>{
        setSelectedImageIdx(prevState =>{
          const newState = [...prevState];
          newState[projectIdx] = idx
          return newState
        })

      }

      
        const handleResize =useCallback(()=>{
          if(window.innerWidth <=768){
            setSettings(mobileSettings)
          } else{
            setSettings({
              dots:true,
        infinite:true,
        lazyLoad:true,
        speed:300,
        slidesToShow:3,
        centerMode:true,
        centerPadding:0,
        nextArrow:<NextArrow />,
        prevArrow:<PrevArrow />,
        beforeChange:(current, next)=>setImageIndex(next)
            })
          }
        }, [mobileSettings, setSettings, setImageIndex]);
    useEffect(()=>{
      handleResize();
      window.addEventListener('resize', handleResize);
      return()=>window.removeEventListener('resize', handleResize);
    },[handleResize]);
      

     




  return (
    <>
    <Slider  {...settings}>
        
            
        {
                projects.map((project,projectIdx)=>(
                    <article className={projectIdx === imageIndex? "slide activeSlide":"slide"} key={project.id}>
            
                    <div className="icon_image">
                        
                            
                                <img className='icon_image' src={setSelectedImageIdx[projectIdx] !== null ? project.photoIcon[selectedImageIdx[projectIdx]]: null} alt="icon" />
                            
                        <div className="projectname">
                          <p>PROJECT: {project.project}</p>
                        </div>
                    </div>
                    <div className="project_details">
                        <h5>CLIENT: {project.client}</h5>
                        <h5>CUSTOMER: {project.customer}</h5>
                        <h5>LOCATION: {project.location}</h5>
                        
                        <div className='btn  photoview' onClick={()=>handleModel({name:project.client, photos:project.photoIcon})}>
                          View all Photos
                        </div>
                       
                        
                    </div>
                    <div className='small_icon' >
                        {
                            project.photoIcon.map((photo, idx)=>(
                                <img key={idx} src={photo}  onClick={()=> handleImageClick(projectIdx, idx)} className={
                                  selectedImageIdx[projectIdx]===idx ? 'selected':''
                                }   alt="s-icon" />
                            ))
                                
                            
                        }
                        
                        
                    </div>
                    
                    
            
                </article>
                ))
            }
     
            
    
        </Slider>
        {
                          showModel && showData && <Model data={showData}  onClose={handleCloseModel} />
                        }



    </>
  )
}

export default Projectcard