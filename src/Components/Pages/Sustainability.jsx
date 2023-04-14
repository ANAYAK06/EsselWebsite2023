import React from "react";
import "./Pages.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdHealthAndSafety } from "react-icons/md";
import { MdNaturePeople } from "react-icons/md";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { TbCertificate } from "react-icons/tb";
import iso from "../../Assets/iso.jpg";
import iso1 from "../../Assets/iso_1.jpg";
import iso2 from "../../Assets/iso_2.jpg";

function Sustainability() {
  return (
    <>
      <section className="sustainability" id="sustain">
        <div className="policies">
          <div className="policy">
            <div className="icon">
              <MdHealthAndSafety />
            </div>{" "}
            <h3>
              {" "}
              <u>HEALTH & SAFETY POLICY</u>
            </h3>{" "}
            <br />
            <p>
              Essel Projects Pvt. Ltd. Acknowledges and accepts its statutory
              responsibilities for securing the health, safety and welfare of
              all its employees, associates and others involved in the
              activities of the company. It is the endeavour of ESSEL PROJECTS
              PVT LTD to maintain the highest standard Health, Safety &
              Environment for all our operations. Safety is considered of prime
              importance and gets riding priority over all other activities. We
              will keep up to date and comply with the Health & Safety at Work
              Act and all other relevant legislations that impact upon our
              operations. <br />
              <br />
              <b>
                {" "}
                We believe in ... <br />
              </b>
              <AiOutlineCheckCircle /> Zero accident <br />
              <AiOutlineCheckCircle /> 100% commitment <br />
              <AiOutlineCheckCircle /> Maximum Productivity <br />
              <br />
              <b>
                Our safety policies ... <br />
              </b>
              <AiOutlineCheckCircle /> Setting safety performance goal <br />
              <AiOutlineCheckCircle /> Establishing safety performance
              objectives for all level of managements <br />
              <AiOutlineCheckCircle /> Assignment of responsibility <br />
              <AiOutlineCheckCircle /> Training and communication <br />
              <AiOutlineCheckCircle /> Enforcing safety rule and regulation{" "}
              <br />
              <AiOutlineCheckCircle /> Hazards identification and control <br />
              <AiOutlineCheckCircle /> Maintain safe working conditions <br />
              <AiOutlineCheckCircle /> Use of personal protective equipments{" "}
              <br />
              <AiOutlineCheckCircle /> Including safety as part of management
              performances review <br />
              <AiOutlineCheckCircle /> Documentation and measuring effectiveness{" "}
              <br />
              <AiOutlineCheckCircle /> Rewarding safety performance <br />
              <AiOutlineCheckCircle /> Safety accountability <br />
              <AiOutlineCheckCircle /> Establish user friendly system <br />
              <AiOutlineCheckCircle /> Not to be limited on paper work <br />
            </p>
          </div>
          <div className="policy">
            <div className="icon">
              <MdNaturePeople />
            </div>
            <h3>
              {" "}
              <u>ENVIRONMENTAL POLICY</u>
            </h3>{" "}
            <br />
            <p>
              Our environment policy recognizes and exhibits concern towards the
              environment as an integral and fundamental part of our business
              strategy, as part of our organization value. <br />
              <br />
              <b>
                Our commitments ... <br />
              </b>
              <AiOutlineCheckCircle />A program for continues improvement and
              sustainability by encouraging sound environmental management
              system to be adopted within our Integrated Management System (IMS)
              ensuring sufficient resources available for their implementation
              in an attempt to reduce green house emission. <br />
              <br />
              <AiOutlineCheckCircle />
              We ensuring meeting and exceeding the minimum compliance of all
              relevant environmental legislation, regulation and standard.{" "}
              <br />
              <br />
              <AiOutlineCheckCircle />
              Preventing pollution and reducing any impact of the company's
              operation on the environment and local communities by assessing
              them in advance and implementing mitigating strategies. <br />
              <br />
              <AiOutlineCheckCircle /> Developing objectives targeting to
              measure the extent of all potential significant environmental
              aspects and monitoring improvements achieved. <br />
              <br />
              <AiOutlineCheckCircle />
              Developing meaningful indicators for the company's improvement by
              reporting information on energy, waste and fuel consumption.{" "}
              <br />
              <br />
              <AiOutlineCheckCircle />
              Operating and maintaining vehicles that minimize toxic emission
              through selection and management of our fleet strategy. <br />
              <br />
              <AiOutlineCheckCircle /> Providing relevant training programs of
              informing and instructing all management and employee to increase
              awareness ensuring their ability to perform duties whilst
              improving the company's performance. <br />
              <br />
              <AiOutlineCheckCircle /> Continuously reviewing all procedure and
              updating employees, supplier and sub contractor accordingly.{" "}
              <br />
            </p>
          </div>
        </div>
        <div className="safety">
          <div className="safe safety_think">
            <h3>
              {" "}
              <u>OUR THINKING ABOUT SAFETY</u>
            </h3>
            <p>
              <BsFillCheckCircleFill /> Safety means a complete understanding of
              your work and knowledge of every step that must be taken and the
              realization that mistake could be costly to yourself and to the
              company. <br />
              <BsFillCheckCircleFill /> Safety means good judgement. Never rely
              on luck; always be prepared to cope with unexpected situation and
              being alert when following your routine. <br />
              <BsFillCheckCircleFill /> Safety means consideration for the
              family that depends on you, for the company that employs you and
              for your own welfare. <br />
              <BsFillCheckCircleFill /> Safety means remembering the safety
              rules set up by your company and applying them continuously when
              you are on the job. <br />
              <BsFillCheckCircleFill /> ONE SINGLE RISK MIGHT MEAN AN ACCIDENT
              FROM WHICH YOU NEVER RECOVER
            </p>
            <div className="vm">
              <article className="safety_card">
                <h5>Mission to Protect</h5>
                <AiOutlineCheckCircle /> Personal <br />
                <AiOutlineCheckCircle />
                Environment <br />
                <AiOutlineCheckCircle />
                Public <br />
                <AiOutlineCheckCircle />
                Operation & Instrument <br />
              </article>
              <article className="safety_card">
                <h5>Vision to Maintain</h5>
                <AiOutlineCheckCircle />
                Zero accident. <br />
                <AiOutlineCheckCircle /> 100% commitment <br />
                <AiOutlineCheckCircle />
                Maximum Productivity <br />
              </article>
            </div>
          </div>
          <div className="safe">
            <h3>
              {" "}
              <u>SAFETY MANAGEMENT PROCEDURES</u>
            </h3>
            <p>
              <BsFillCheckCircleFill /> Setting safety performance goal <br />
              <BsFillCheckCircleFill /> Assigning of responsibility <br />
              <BsFillCheckCircleFill /> Training and communication. <br />
              <BsFillCheckCircleFill /> Enforcement of safety rules &
              regulations. <br />
              <BsFillCheckCircleFill /> Continually reinforce that working
              safely is a mandatory condition of employment <br />
              <BsFillCheckCircleFill /> Hazards identification, control &
              maintain safe working conditions. <br />
              <BsFillCheckCircleFill /> Use of personal protective equipment{" "}
              <br />
              <BsFillCheckCircleFill /> Establishing safety performance
              objectives for all level of managements. <br />
              <BsFillCheckCircleFill /> Establish user friendly system. <br />
              <BsFillCheckCircleFill /> Continue to deliver comprehensive safety
              leadership programs <br />
              <BsFillCheckCircleFill /> The process is not to be limited on
              paper work <br />
              <BsFillCheckCircleFill /> There is must be health & safety
              accountability for community and workplace <br />
            </p>
          </div>
          
        </div>
        <div className="quality">
            <div className="qpolicy policy">
              <div className="icon">
                <TbCertificate />
              </div>

              <h3>
                <u>QUALITY POLICY</u>
              </h3>
              <br />
              <p>
                At Essel Projects Pvt Ltd. Every member of the business shares
                its responsibility towards quality and quality improvement{" "}
                <br /> <br />
                <b>Therefore:</b> <br />
                <AiOutlineCheckCircle /> Company Managers and Engineers, through
                their own practices and standards will endeavour to lead by
                example. They will be committed and will be allocating the
                necessary resources towards the quality policies and programs
                initiated. <br /> <br />
                <AiOutlineCheckCircle />
                Everyone has got scope in contributing towards continuous
                quality improvement. This will generate effective conditions for
                staff to participate creatively in the improvement activities.{" "}
                <br /> <br />
                To accomplish these objectives ,Essel Projects Pvt Ltd. Has
                established a documented implementation cell maintain an
                effective quality management system within its Integrated
                Management system (IMS) aimed at 'getting it right at first time
                rather than inspecting poor quality out'. <br /> <br />
                Our aim is to delight customers and develop relationship with
                all our suppliers and client international and external working
                in partnership to meet the supply chain and execution
                requirements providing significant success within quality
                policy.
              </p>
            </div>
            <div className="iso">
              <div className="iso_image">
                <img src={iso} alt="" />
              </div>
              <div className="iso_image">
                <img src={iso1} alt="" />

              </div>
              <div className="iso_image">
                <img src={iso2} alt="" />
              </div>
            </div>
          </div>
      </section>
    </>
  );
}

export default Sustainability;
