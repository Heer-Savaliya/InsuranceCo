import React from "react";
import l3 from "../main/l3.png";
import l4 from "../main/l4.png";

const company = () => {
  return (
    <div>
      <div className="container">
        <div className="box">
          <img src={l3} alt="" srcset="" />
        </div>
        <div className="box">
          <img src={l4} alt="" srcset="" />
        </div>
        <div className="box">
          <img src={l3} alt="" srcset="" />
        </div>
        <div className="box">
          <img src={l4} alt="" srcset="" />
        </div>
        {/* <div className="box"><img src={l5} alt="" srcset="" /></div> */}
      </div>


      <div className="head">
        <h1>Why Choose ExplainLife?</h1>
      </div>
      <div className="container1">
        <div className="box1">
          <h3>Simplified Approach</h3>
          <p>Accessible and easy-to-understand life insurance planning, cutting through jargon to empower you in making informed choices for your family's future.</p>
          <p>Accessible and easy-to-understand life insurance planning, cutting through jargon to empower you in making informed choices for your family's future.</p>
        </div>
        <div className="box1">
          <h3>Personalized Recommendations</h3>
          <p>Tailored life insurance plans designed to meet your unique needs, providing comprehensive and proper coverage for your family.</p>
          <p>Tailored life insurance plans designed to meet your unique needs, providing comprehensive and proper coverage for your family.</p>
        </div>
        <div className="box1">
          <h3>No Pressure, No Spam</h3>
          <p>Get expert advice without sharing personal details until you're ready to apply. We prioritize your peace of mind, so we only ask for information when it's completely necessary</p>
          <p>Get expert advice without sharing personal details until you're ready to apply. We prioritize your peace of mind, so we only ask for information when it's completely necessary</p>
        </div>
      </div>
    </div>
  );
};

export default company;
