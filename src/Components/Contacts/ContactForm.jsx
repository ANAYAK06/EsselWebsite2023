
import React, { useRef } from 'react'
import emailjs from 'emailjs-com'


function ContactForm() {

    const form = useRef()

  
    const sendEmail = (e)=> {
        e.preventDefault();

        emailjs.sendForm('service_zu19oc5', 'template_v55d4xe', form.current, 'cmueqT_AMUUJSewnC')
        e.target.reset()
    }
   



  return (
    <>
    <form action="" ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder='Your Name /Company Name'  name='name' />
                        <input type="text" placeholder='Email Address' name='email'  />
                        <input type="number" placeholder='Contact Number' name='number'  />
                        <input type="text" placeholder='Subject'  name='subject' />
                        <textarea name="message" id="" cols="30" rows="10" placeholder='Your Message'  ></textarea>
                        <button type='submit' className='btn_blue'>Send Message</button>
                    </form>

    </>
  )
}

export default ContactForm