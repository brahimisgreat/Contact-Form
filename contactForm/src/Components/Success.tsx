import React from "react";
import "./success.css";
import icon from '../assets/images/icon-success-check.svg'
export const Success = () => {
  return (
    <div className="success">
      <div className="">       
         <img src={icon} alt="check" />
        <h4>Message Sent!</h4>
      </div>
      <div><p>Thanks for completing the form. We'll be in touch soon!</p></div>
      <div></div>
    </div>
  );
};
