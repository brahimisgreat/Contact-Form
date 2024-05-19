import React from "react";
import "./Form.css";

export const Form = () => {
  return (
    <div className="form">
      <h1>Contact Us</h1>
      <div>
        <div className="fields">
          <label htmlFor="name">First Name</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>
        <div>
          <label htmlFor="name">Last Name</label>
          <input type="text" id="LastName" name="LastName" required />
        </div>
        <div>
          <label htmlFor="name">Email Address</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="name">Query Type</label>
          <div>
            <label htmlFor="general">General</label>
            <input type="radio" id="general" name="genral" required />
          </div>
          <div>
            <label htmlFor="support">Support</label>
            <input type="radio" id="support" name="support" required />
          </div>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required />
        </div>
      </div>
    </div>
  );
};
