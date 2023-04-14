import React from "react";
import "./Pages.css";
import ovr from '../../Assets/Ov.jpg'
import kp from '../../Assets/kp.png'

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
            ESSEL PROJECTS PVT LTD is one of the fastest growing ETC Contracting
            Companies with a significant presence in industrial sectors of
            Power, Steel, Cement and infrastructure Projects throughout our
            Nation. <br />
            Essel Projects Pvt Ltd (EPPL) had been established as an ETC
            contracting company in early 2007 with an objective of developing a
            strong commitment to the project field of Electrical and
            Electro-Mechanical orientation and to become a part of our nation
            building activities. Till 2007, two sister concerns, proprietorship
            companies of same management namely ESSEL ENGINEERING & ESPEES
            ENGINEERING, had been carrying out Erection, Testing & Commissioning
            of EHV Substation up to 400KV, Plant Electricals for Power and Steel
            industries including installation of EHV transformers, HT, LT Cable
            laying, as well as Fabrication, Erection of Heavy and Medium Steel
            Structures for similar industries and other related jobs in almost
            all over India. <br />
            After the emergence of ESSEL PROJECTS PVT LTD as an ETC company, we
            brought these two component companies (ESPEES ENGINEERING & ESSEL
            ENGINEERING) under one roof and consolidated our business strength.
            We have successfully completed several important Electrical &
            Electro Mechanical Projects for our customers and clients like ABB,
            L&T, HCL, UTCL AREVA, SIEMENS, FLSMIDTH, ABHIJEET, VISA STEEL etc.
            by adopting latest creative techniques. We have accomplished this by
            integrating the engineering knowledge with pioneering skills and by
            optimum utilization of men and material by giving utmost importance
            to SAFETY and QUALITY. For our systematic approach towards every
            assignment with commitment, the company has been certified under ISO
            9001-2000 in 2008 and further renewed by 9001 -2008 in 2011. The
            growth of our company is based on an efficient organization and
            management under guidance of our Managing Director Mr. K. Pradeep.
            We have been obtaining many valuable projects of EHV Substations,
            Plant Electrical from our valued customers and clients and are in
            the verge of completing many of those projects. <br />
            We are proud to state that, we are being counted among the leading
            service providers to be reckoned with in the Electrical & Electro
            Mechanical sphere and enjoy a strong showcase of the valuable
            appreciations from our customers. <br />
            Due to our commitment towards SAFETY & QUALITY we have been awarded
            with the certificate of PREFERRED CONTRACTOR by ABB in the year of
            2009 and further we have been maintaining same commitment
            continuously <br />
            We don't have any marketing policy other than "our satisfied
            customer will do the marketing for us"
          </p>
        </div>
        <div className="c_avatar">
          <div className="c_img">
            <img src={kp} alt="" />
          </div>
          <div>
          Chairman & Managing Director: Pradeep K
          </div>
          
        </div>
      </div>
      <div className="vison_mission">
        <div className="vision">
          <h3>OUR VISION</h3>
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
