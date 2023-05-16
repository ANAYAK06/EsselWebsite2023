import React, { useState , useRef} from "react";
import "./Careers.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { careerData } from "./careersdata";
import Careerimg from "../../Assets/career.jpg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import emailjs from 'emailjs-com'
import Successpopup from "./Successpopup";

function Careers() {
  const form = useRef()

  
    const sendEmail = (e)=> {
        e.preventDefault();

        emailjs.sendForm('service_zu19oc5', 'template_ovseum9', form.current, 'cmueqT_AMUUJSewnC')
        e.target.reset()
    }
   




  const [selectedItemId, setSelectedItemId] = useState(null);

  const onClickItem = (itemId) => {
    setSelectedItemId(itemId);
  };

  const [educationDetails, setEducationDetails] = useState([]);

  const addEducationalDetails = () => {
    setEducationDetails([...educationDetails, { institution: "", degree: "" }]);
  };
  const removeEducationDetails = (index) => {
    const updateEducationDetials = [...educationDetails];
    updateEducationDetials.splice(index, 1);
    setEducationDetails(updateEducationDetials);
  };

  const handleEducationDetailsChange = (index, key, value) => {
    const updateEducationDetails = [...educationDetails];
    updateEducationDetails[index][key] = value;
    setEducationDetails(updateEducationDetails);

  }
  const [experienceDetails, setExperienceDetails] = useState([]);

  const addExperienceDetails = () => {
    setExperienceDetails([...experienceDetails, { organization: "", position: "" }]);
  };
  const removeExperienceDetails = (index) => {
    const updateExperienceDetails = [...experienceDetails];
    updateExperienceDetails.splice(index, 1);
    setExperienceDetails(updateExperienceDetails);
  };

  const handleExperienceDetailsChange = (index, key, value) => {
    const updateExperienceDetails = [...experienceDetails];
    updateExperienceDetails[index][key] = value;
    setExperienceDetails(updateExperienceDetails);

  }
  const [skill, setSkills] = useState([])

  const addSkills = ()=>{
    const newSkill = (
      <div key={skill.length}  className="skillsets">
      <div className="close_icon" onClick={()=>removeSkills(skill.length)}>
        <AiOutlineCloseCircle />
      </div>
      <textarea name="skill" id="" cols="103" rows="10" placeholder="Separate your Skills with coma"></textarea>
    </div>

    )
    setSkills([...skill, newSkill])

  }
  const removeSkills =(index)=>{
    const newSkill = [...skill];
    newSkill.splice(index,1)
    setSkills(newSkill)
  }

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit =  (e)=>{
    e.preventDefault();
    sendEmail(e)
    setIsSubmitted(true);

    
    
  }
  const handleClosepopup = ()=>{
    setIsSubmitted(false)
  }

 

  
  

  return (
    <section id="career" className="careers">
      <div className="career_banner">
        <img src={Careerimg} alt="" />
      </div>
      <div className="career_text">
        <h3 className="h3text">​​​​​​​Find the job categories that fit you</h3>
        <p>
          Every job is different. What are your skills and interests? <br />{" "}
          Where do you want to grow and develop? <br /> Check below and browse
          our job categories
        </p>
      </div>
      <div className="categories">
        <h3>
          <u>Categories</u>
        </h3>
        <div className="category">
          {careerData.map((cd) => (
            <article
              key={cd.id}
              onClick={() => onClickItem(cd.id)}
              className={
                selectedItemId === cd.id
                  ? "clicked_category c_selection"
                  : "c_selection"
              }
            >
              <p>{cd.title}</p>
              <div className="right-arrow">
                <AiOutlineArrowRight />
              </div>
            </article>
          ))}
        </div>
      </div>
      <form action="" ref={form} onSubmit={handleSubmit}>
      {selectedItemId && (
        <div className="input_area">
          <div className="input_name">
            <input type="text" placeholder="First Name" required  name="firstname"/>
            <input type="text" placeholder="Last Name"  name="lastname" required />
            <input type="email" placeholder="Your Email" name="email"  required />
            <input type="text" placeholder="State" name="state" />
            <input type="text" placeholder="District " name="district"  required />
            <input type="number" placeholder="Pin Code"  name="pincode" required />
            <input type="number" placeholder="Contact Number" name="phone" required />
          </div>
          <div className="education">
            {educationDetails.map((education, index) => (
              <div className="details" key={index}>
                <div
                  className="close_icon"
                  onClick={() => removeEducationDetails(index)}
                >
                  <AiOutlineCloseCircle />
                </div>
                <div className="form_details">
                  
                <input
                  type="text" name="college"
                  placeholder="Enter School/College/University Name"
                  value={education.institution}
                  onChange={(e) =>
                    handleEducationDetailsChange(
                      index,
                      "institution",
                      e.target.value
                    )
                  }
                />
                <input
                  type=" text"
                  name="degree"
                  placeholder=" Enter Degree Type"
                  value={education.degree}
                  onChange={(e) =>
                    handleEducationDetailsChange(
                      index,
                      "degree",
                      e.target.value
                    )
                  }
                />
                <input type="text" placeholder="Enter Field of Study"  name="course"/>
                <input type="date" placeholder="Start Date" name="from_date" />
                <input type="date" placeholder="End Date" name="to_date" />
                </div>
              </div>
            ))}

            <div className="btn_blue addinput" onClick={addEducationalDetails}>
              Add Education
            </div>
          </div>
          <div className="experience">
          {experienceDetails.map((experience, index) => (
              <div className="details" key={index}>
                <div
                  className="close_icon"
                  onClick={() => removeExperienceDetails(index)}
                >
                  <AiOutlineCloseCircle />
                </div>
                <div className="form_details">
                  
                <input
                  type="text" name="org"
                  placeholder="Organization name"
                  value={experience.organization}
                  onChange={(e) =>
                    handleExperienceDetailsChange(
                      index,
                      "organization",
                      e.target.value
                    )
                  }
                />
                <input
                  type=" text"
                  name="position"
                  placeholder=" Position "
                  value={experience.position}
                  onChange={(e) =>
                    handleExperienceDetailsChange(
                      index,
                      "position",
                      e.target.value
                    )
                  }
                />
                <input type="text" placeholder="Department" />
                <input type="date" placeholder="Start Date" />
                <input type="date" placeholder="End Date" />
                </div>
              </div>
            ))}
            <div className="btn_blue" onClick={addExperienceDetails}>Add Experience</div>
          </div>
          <div className="skills">
            
            {
              skill.map((skill)=>skill)
            }
            
            
          <div className="btn_blue" onClick={addSkills}>Add Your Skills</div>

          </div>
          
          
          <button type="submit" className="btn_blue">Submit</button>
        </div>
        
      )}
      
      </form>
     
      {isSubmitted && <Successpopup onClose={handleClosepopup}/> }
    </section>
  );
}

export default Careers;
