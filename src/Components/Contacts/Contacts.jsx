import React from 'react'
import { Link } from 'react-router-dom'
import './Contacts.css'
import {AiOutlineCloudDownload} from 'react-icons/ai'

import ContactForm from './ContactForm'

function Contacts() {

    const scrollToTop =()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
 

  return (
    <>
        <section className='contact' id='contact' >
            <h2>CONTACT</h2>
            <h5>GET IN TOUCH WITH US</h5>
            <div className="contact_area">
                <div className="address">
                    <div className="corp_add">
                        <h3>CORPORATE OFFICE</h3>
                        <h5>Essel Projects Pvt Ltd</h5>
                        <small>
                        No. - 5, First Floor, Maruti Heritage,<br />
                        Near MMI, Pachpedi Naka, Raipur,<br />
                        Chhattisgarh - 492001. <br />
                        Contact No: 0771-4075401 <br />
                        Fax: 0771-4075401 <br />
                        Email: esselprojects@gmail.com
                        </small>

                    </div>
                    <div className="reg_add">
                    <h3>REGISTERED OFFICE</h3>
                        <h5>Essel Projects Pvt Ltd</h5>
                        <small>
                        No.- 4, First Floor, Maruti Heritage,<br />
                        Near MMI, Pachpedi Naka, Raipur,<br />
                        Chhattisgarh - 492001. <br />
                        Contact No: 0771-4075401 <br />
                        Fax: 0771-4075401 <br />
                        Email: info@esselprojects.com
                        </small>


                    </div>
                </div>
                <div className="social">
                    <article className='contact_icon'>
                        
                        <h5>Downloads</h5>
                        <small>Click Here to Download Our latest EHV, E&I, Fabrication Projects Profile</small> 
                        <div className="dnd_icon" onClick={scrollToTop}>
                            <Link to='/downloads'   > <AiOutlineCloudDownload  /> </Link>

                        
                        </div>
                    </article>
                    
                </div>
                <div className="input_contacts">
                    <ContactForm />
                </div>
                
            </div>


        </section>
    </>
  )
}

export default Contacts