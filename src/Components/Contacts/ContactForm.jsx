
import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import Contactsuccess from './Contactsuccess'



function ContactForm() {

    const form = useRef()
    const [contacted, setContacted] = useState(false)

  
    const sendEmail = (e)=> {
        e.preventDefault();

        emailjs.sendForm('service_zu19oc5', 'template_v55d4xe', form.current, 'cmueqT_AMUUJSewnC')
        .then(()=>{
          setContacted(true)
        })
        .catch((error)=>{
          console.error('Error sending Email',error)
        });
        e.target.reset()
    }

    const closeContactpopup =()=>{
      setContacted(false)
    }
   



  return (
    <>
    <form action="" ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder='Your Name /Company Name'  name='name' required />
                        <input type="text" placeholder='Email Address' name='email'  required />
                        <input type="number" placeholder='Contact Number' name='number'  required />
                        <input type="text" placeholder='Subject'  name='subject' required />
                        <textarea name="message" id="" cols="30" rows="10" placeholder='Your Message' required  ></textarea>
                        <button type='submit' className='btn_blue'>Send Message</button>
                    </form>
                    {contacted && <Contactsuccess onClose={closeContactpopup}/>}
                    

    </>
  )
}

export default ContactForm