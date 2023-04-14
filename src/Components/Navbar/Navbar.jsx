import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import logo from '../../Assets/essel.jpg'
import {AiOutlineHome} from 'react-icons/ai'






const menuItems = [
    {
      heading: "About us",
      
      to : "/about"
    },
    {
      heading: "Area of Operation",
      
      to : '/#area'
    },
    {
      heading: "Projects",
      
      to : '/#project'
    },
    {
      heading: "Sustainability",
      to: "/sustainability"
      
    },
    {
      heading: "Clients",
      to:"/#clients"
    },
    {
      heading: "Contacts",
      to :"/#contact",
    },
    {
      heading: "Careers",
      to:"/career",
    },
  ];
  

function Header() {

  
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false)

  useEffect(()=>{
    const handleScroll =()=>{
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled){
        setScrolled(isScrolled)
      }
    };
    document.addEventListener('scroll', handleScroll);
    return ()=> {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(()=>{
    const handleResize =()=>{
      if(window.innerWidth >768  ){
        setShowMenu(false)
      }
    };
    window.addEventListener('resize', handleResize);
    return()=>{
      window.addEventListener('resize', handleResize)
    }
  },[])

  const toggleMenu = ()=>{
    setShowMenu(!showMenu)
  }





  return (

    <>
   
    
    <nav className={scrolled? 'scrolled':''}>
    
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="name">
            <h1>ESSEL PROJECTS PVT LTD</h1>
            <p>Commited Towards Quality, Safety and Customer Satisfaction</p>
        </div>
        <div className='fa-icon' onClick={toggleMenu}>
          <FaBars />
        </div>
        
        
        <ul className= {showMenu ? 'nav-links activemenu':'nav-links'}>
          <li >
            <Link to ={'/'} onClick={toggleMenu} className='home' ><AiOutlineHome/></Link>
          </li>
           {
            menuItems.map((menuItem, index)=>(
                <li  key={index} className='menulist'  >
                <Link  to={menuItem.to} onClick={toggleMenu} >{menuItem.heading}   </Link>
            </li>
            ))
           }
           
           
        </ul>
        
       


    </nav>

    </>
  )
}

export default Header