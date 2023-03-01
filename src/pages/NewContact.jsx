import React, { useState } from "react";
import axios from "axios";

function NewContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleContact(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contacts", {
        name,
        email,
        message,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="contact-form">
      <div className="contact-message" id="contact-message"></div>
      <form className="contact-form" id="contact-form" onSubmit={handleContact}>
        <div className="input-group">
          <input
            type="text"
            id="name"
            className="contact-form-text"
            placeholder="You Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
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
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <span id="emailError"> </span>
        </div>
        <div className="input-group">
          <textarea
            id="description"
            className="contact-form-text"
            placeholder="Your Message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            required
          ></textarea>
          <span id="messageError"></span>
        </div>
        <div className="input-group">
          <span id="submitMessage"></span>
          <input type="submit" className="contact-form-btn" value="submit" />
        </div>
      </form>
    </div>
  );
}

export default NewContact;
