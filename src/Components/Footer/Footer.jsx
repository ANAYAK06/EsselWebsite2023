import React from 'react'
import './Footer.css'
import {linkNames} from './data'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import logo from '../../Assets/essel.jpg'
import { Link } from 'react-router-dom' 





function Footer() {
  return (
   <footer>
    <img className='footer_logo' src={logo} alt="" />
    <h3>EPPL</h3>
     <ul>
      {
        linkNames.map(link=>(
          <li >
            <Link to={link.to}>{link.heading}</Link>
          </li>
        ))
      }
     </ul>
     
     <div className='social_icons'>
      <AiOutlineLinkedin/>
      <AiOutlineInstagram />

     </div>
     <div>
      <small> &#169;  2023 Essel Projects Pvt Ltd </small>
     </div>
     
   </footer>
  )
}

export default Footer