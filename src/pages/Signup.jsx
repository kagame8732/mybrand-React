import React from "react";
import person from "../images/person.png";
import person1 from "../images/person1.png";
import envelope from "../images/envelope.png";
import password from "../images/password.png";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="signup" id="signup">
      <div className="signup-menu">
        <h2 className="signup-heading">Sign up here</h2>
        <div className="signup-form">
          <form className="signup-form" id="signup-form">
            <div className="user-form">
              <div className="user-image-form">
                <img src={person1} alt="user-logo" className="user-image" />
              </div>
              <div>
                <input
                  type="text"
                  id="firstName"
                  className="signup-form-text-1"
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="user-form">
              <div className="user-image-form">
                <img src={person} alt="user-logo" className="user-image" />
              </div>
              <div>
                <input
                  type="text"
                  id="lastName"
                  className="signup-form-text-1"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="email-form">
              <div className="image-form">
                <img src={envelope} alt="Email-logo" className="envelope" />
              </div>
              <div>
                <input
                  type="email"
                  id="signup-email"
                  className="signup-form-text-1"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="password-form">
              <div className="image-form-1">
                <img
                  src={password}
                  alt="password-logo"
                  className="password-key-image"
                />
              </div>
              <div>
                <input
                  type="password"
                  id="signup-password"
                  className="signup-form-text-2"
                  placeholder="Password"
                  required
                />
                <span>
                  <i
                    className="fa fa-eye span-toggle"
                    aria-hidden="true"
                    id="signup-eye"
                    onclick="toggle('signup-password','signup-eye')"
                  ></i>
                </span>
              </div>
            </div>
            <div>
              <span id="submitMessages"></span>
              <button className="signup-form-btn">
                Sign up<span className="btn-char">&#8594;</span>
              </button>
            </div>
          </form>
          <div className="redirect-link">
            <Link to="/login" className="create-login">
              login here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
