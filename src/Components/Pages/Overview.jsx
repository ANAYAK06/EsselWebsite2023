import React from "react";
import "./Pages.css";
import ovr from '../../Assets/Ov.jpg'
import safety from '../../Assets/safety5.jpg'

function Overview() {
  return (
    <>
    <div className="container_banner">
      <img src={ovr} alt="" />
      <div className="img_text">
        ABOUT US
      </div>
    </div>
      <div className="overview">
        
        <div className="overview_text">
          <p>
          Essel Projects Pvt Ltd (EPPL) is a rapidly growing  ETC contracting company with a significant presence in the industrial sectors of Power, Steel, Cement, and Infrastructure Projects throughout India. Established in early 2007, EPPL has evolved as an organization offering comprehensive solutions in Electrical, Mechanical and Civil engineering domains. <br /> <br />
 
 For carrying out erection/testing/commissioning of EHV Substations up to 765 KV and Heavy Transformers up to 500 MVA  and complete installation of HT/LT Plant Electricals, Illumination including EHV Cabling Essel Projects has been the first choice of leading corporate in the filed of Power/Cement/Steel plants.   <br /> <br />
  
 The company has successfully completed several significant  Projects for esteemed customers such as ABB, L&T, HCL, UTCL AREVA, SIEMENS, FLSMIDTH, MECON,SAIL(Bhilai, Bokaro, Rourkela Plants) etc., by Performing best  to the satisfaction of the customer. The company has accomplished this by integrating engineering knowledge with pioneering skills and by optimum utilization of men and material while giving utmost importance to SAFETY and QUALITY. <br /> <br />
  
  A reasonably large in house fabrication shop, shot/copper slag blasting and painting facilities, with commendable infrastructure for Heavy Structures, Technological Structures and Ducts , our works at Bhilai  spread over 1,55. 000 square feet and 40000 sq ft covered area,  supplements our strengths in meeting the timely delivery requirements of our clients .  Currently capable of delivering 750 tons/month of structural fabricated items, we are on the path of augmentation of the scaling up the  infrastructure. <br /> <br /> 
  For its systematic approach towards every assignment with commitment, the company has been certified under ISO 9001-2000 in 2008 and renewed by 9001 -2015 in 2020. The company's growth is based on an efficient organization and management under the guidance of its Managing Director, Mr. Pradeep Kunnummal. At present the company is executing many important projects of  EHV Substations, Plant Electrical of reputed corporate and the same reflects the confidence of our clients in our capability to successfully complete the project within the stipulated time frame. Appreciation letters from our clients who are leaders in respective fields, commending on our capability and quality of services rendered by us, we consider a glowing tribute and recognition to us <br />
  <br />
  EPPL's marketing policy is based on the philosophy that a satisfied customer will do the marketing for the company
 

 
          </p>
        </div>
        <div className="c_avatar">
          <div className="c_img">
            <img src={safety} alt="" />
          </div>
          <div>
          <h4> ABB Awarded us ,  The Best Safety Conscious Contractor</h4>
          </div>
          
        </div>
      </div>
      <div className="vison_mission">
        <div className="vision">
          <h3>OUR VISION</h3>
          <hr />
          <p>
            We visualize ourselves as a major EPC contractor in the field of
            engineering Services for projects Construction with related
            Engineering and Procurement Services in the year to come. Our aim is
            to expand our horizon by using our rich experience, commitment to
            quality and safety standards. Maintenance of timely delivery
            schedule of goods and services through our competitive strength and
            familiarity with local working conditions, customer- contractor
            relationship and strategic partnership with corporate social
            responsibility
          </p>
        </div>
        <div className="mission">
          <h3>OUR MISSION </h3>
          <hr />
          <p>
            At ESSEL PROJECTS PVT LTD. We are committed to perform for our
            customers providing them with the highest level of quality services
            at fair market competitive prices. To ensure the longevity of our
            company through repeated business and referred clients achieved by
            customer satisfaction in all aspects, including time lines,
            attention to details and service minded attitudes. Our mission is to
            excel by taking up challenges in hand with due diligence along with
            the highest level of professionalism, integrity, honesty, by using
            an innovative approach towards uncompromising transparency, fairness
            and team spirit with our customers, suppliers, subcontractors and
            professional associates.
          </p>
        </div>
      </div>
    </>
  );
}

export default Overview;
