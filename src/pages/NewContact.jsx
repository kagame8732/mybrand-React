import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setNameError("Please enter your name");
      return;
    }

    if (!email) {
      setEmailError("Please enter your email");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    if (!message) {
      setMessageError("Please enter a message");
      return;
    }

    axios
      .post("https://apis-lvc4.onrender.com/api/contacts", {
        name: name,
        email: email,
        message: message,
      })
      .then((response) => {
        console.log(response);
        setSubmitMessage("Thank you for contacting us");
        setName("");
        setEmail("");
        setMessage("");
        setNameError("");
        setEmailError("");
        setMessageError("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="contact-form">
      <div className="contact-message" id="contact-message">
        <form
          className="contact-form"
          id="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="input-group">
            <input
              type="text"
              placeholder="You Name"
              className="contact-form-text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <p className="error">{nameError}</p>
          </div>
          <div className="input-group">
            <input
              type="email"
              className="contact-form-text"
              id="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="error">{emailError}</p>
          </div>
          <div className="input-group">
            <textarea
              id="description"
              className="contact-form-text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <p className="error">{messageError}</p>
          </div>
          <button type="submit" className="contact-form-btn">
            Submit
          </button>
          <p className="submitMessage">{submitMessage}</p>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
