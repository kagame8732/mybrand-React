import React from "react";
import { Link } from "react-router-dom";
import envelope from "../images/envelope.png";
import password from "../images/password.png";

function Login() {
  return (
    <div className="login" id="login">
      <div className="login-menu">
        <h2 className="login-heading">Login here</h2>
        <div className="login-form">
          <form className="login-form" id="login-form">
            <div className="email-form">
              <div className="image-form">
                <img src={envelope} alt="Email-logo" className="envelope" />
              </div>
              <div>
                <input
                  type="email"
                  id="loginEmail"
                  className="login-form-text-1"
                  placeholder="Email"
                  onkeyup="validateMail()"
                />
                <span id="loginError"></span>
              </div>
            </div>
            <div className="password-form">
              <div className="image-form-1">
                <img
                  src={password}
                  alt="password-logo"
                  className="password-key-image"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  id="loginPassword"
                  className="login-form-text-2"
                  placeholder="Password"
                  onkeyup="validatePassword()"
                  required
                />
                <span>
                  <i
                    className="fa fa-eye span-toggle"
                    aria-hidden="true"
                    id="login-eye"
                    onclick="toggle('loginPassword','login-eye')"
                  ></i>
                </span>
                <span id="passwordError"></span>
              </div>
            </div>
            <div>
              <button
                className="login-form-btn"
                onclick="return validateForm();"
              >
                Login<span className="btn-char">&#8594;</span>
              </button>
              <span id="submitError"></span>
            </div>
          </form>
          <div id="error"></div>
          <div className="redirect-links">
            <Link to="/signup" className="create">
              create account
            </Link>
            <Link to="/forget" className="forgot">
              forgot password
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
