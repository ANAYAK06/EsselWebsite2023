import React, { useEffect, useState, useRef } from 'react'
import emailjs from 'emailjs-com'
import './Contacts.css'
import eni from '../../Assets/eni.pdf'
import ehv from '../../Assets/ehv.pdf'
import fab from '../../Assets/fab.pdf'

function Downloads() {

  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [selectedProfile, setSelectedProfile] = useState('');
  const [phonenumber, setPhoneNumber] = useState('')
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleOrganizationChange = (event) => {
    setOrganization(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleProfileChange = (event) => {
    setSelectedProfile(event.target.value);
  };
  const handlePhoneChange = (event)=> {
    setPhoneNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);
    sendEmail(event)
  };

  useEffect(() => {
    if (name && organization && email && selectedProfile && phonenumber && isFormSubmitted) {
      switch (selectedProfile) {
        case 'EHV Profile':
          window.open(ehv);
          break;
        case 'E&I Profile':
          window.open(eni);
          break;
        case 'Fabrication Profile':
          window.open(fab);
          break;
        default:
          break;
      }
    }
  }, [name, organization, email, phonenumber, selectedProfile, isFormSubmitted]);

  const form = useRef()

  
  const sendEmail = (e)=> {
      e.preventDefault();

      emailjs.sendForm('service_zu19oc5', 'template_v55d4xe', form.current, 'cmueqT_AMUUJSewnC')
      e.target.reset()
  }








  return (
    <>
    <div className="download_area">
    <h3>Download Our EHV , E&I , Fabrication Profiles </h3>
    <div className='dnd_form'>
      <form action="" ref={form} onSubmit={handleSubmit}>
        <input type="text" placeholder='Your Name' name='name' value={name} onChange={handleNameChange} required />
        <input type="text" placeholder='Business/Organization' value={organization} onChange={handleOrganizationChange} name='subject' required />
        <input type="email" placeholder='Your E-mail' value={email} onChange={handleEmailChange} name='email' required/> <br />
        <input type="number" placeholder='Your Phone Number' value={phonenumber} onChange={handlePhoneChange}  name='number' required />
        <select name="message" id="" value={selectedProfile} onChange={handleProfileChange}  >
        <option value="">Select Profile</option>
          <option value="EHV Profile">EHV Profile</option>
          <option value="E&I Profile">E&I Profile</option>
          <option value="Fabrication Profile">Fabrication Profile</option>
        </select> <br />
        <button type='submit' className=' btn_blue'>Download</button>
      </form>
    </div>
    </div>
    </>
  )
}

export default Downloads