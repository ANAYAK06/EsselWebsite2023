import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

import './Contacts.css'
import {AiOutlineCloudDownload} from 'react-icons/ai'
import eni from '../../Assets/eni.pdf'
import ehv from '../../Assets/ehv.pdf'
import fab from '../../Assets/fab.pdf'

function Contacts() {
    const form = useRef()

  
    const sendEmail = (e)=> {
        e.preventDefault();

        emailjs.sendForm('service_zu19oc5', 'template_v55d4xe', form.current, 'cmueqT_AMUUJSewnC')
        e.target.reset()
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
                        
                        <h5>Download</h5>
                        <small>E&I Profile</small> 
                        <div className="dnd_icon">
                        <a href={eni} download><AiOutlineCloudDownload  /></a>
                        </div>
                    </article>
                    <article className='contact_icon'  >
                    
                    <h5>Download</h5>
                        <small>Fabrication Profile</small> 
                        <div className="dnd_icon">
                        <a href={fab} ><AiOutlineCloudDownload /></a>
                        </div>
                    </article>
                    <article className='contact_icon'>
                    
                    <h5>Download</h5>
                        <small>EHV Substation Profile</small> 
                        <div className="dnd_icon"   >
                        <a href={ehv} ><AiOutlineCloudDownload /></a>
                        </div>
                    </article>
                </div>
                <div className="input_contacts">
                    <form action="" ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder='Your Name /Company Name'  name='name' />
                        <input type="text" placeholder='Email Address' name='email'  />
                        <input type="text" placeholder='Subject'  name='subject' />
                        <textarea name="message" id="" cols="30" rows="10" placeholder='Your Message'  ></textarea>
                        <button type='submit' className='btn_blue'>Send Message</button>
                    </form>
                </div>
                
            </div>


        </section>
    </>
  )
}

export default Contacts