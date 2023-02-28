import React from "react";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact-menu">
        <h1 className="contact-heading">Contact</h1>
        <div className="contact-form">
          <div className="contact-message" id="contact-message"></div>
          <form className="contact-form" id="contact-form">
            <div className="input-group">
              <input
                type="text"
                id="name"
                className="contact-form-text"
                placeholder="You Name"
                required
              />
              <span id="nameError"></span>
            </div>
            <div className="input-group">
              <input
                type="email"
                id="email"
                className="contact-form-text"
                placeholder="Your Email"
                required
              />
              <span id="emailError"> </span>
            </div>
            <div className="input-group">
              <textarea
                id="description"
                className="contact-form-text"
                placeholder="Your Message"
                required
              ></textarea>
              <span id="messageError"></span>
            </div>
            <div className="input-group">
              <span id="submitMessage"></span>
              <input
                type="submit"
                className="contact-form-btn"
                value="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
