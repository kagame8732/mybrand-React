import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import envelope from "../images/envelope.png";
import passwordImage from "../images/password.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [submitError, setSubmitError] = useState("");

  const validateMail = () => {
    if (email.length === 0) {
      setEmailError("Email Required");
      return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{3,4}$/)) {
      setEmailError("Invalid Email");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = () => {
    if (password.length === 0) {
      setPasswordError("Password required");
      return false;
    }
    if (password.length <= 6) {
      setPasswordError("Must be 6 characters or more");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const validateForm = (e) => {
    e.preventDefault();
    const isEmailValid = validateMail();
    const isPasswordValid = validatePassword();
    if (isEmailValid && isPasswordValid) {
      userLogin();
    } else {
      setSubmitError("Please fix above errors");
      setTimeout(() => {
        setSubmitError("");
      }, 2000);
    }
  };

  const userLogin = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const data = {
      email: email,
      password: password,
    };

    try {
      const result = await axios.post(
        `https://apis-lvc4.onrender.com/api/login`,
        data
      );
      localStorage.setItem("usertoken", JSON.stringify(result.data.token));
      next();
    } catch (error) {
      setSubmitError(error.response.data.message);
    }
  };
  const next = () => {
    window.location.href = "./dashboard";
  };
  return (
    <div className="login" id="login">
      <div className="login-menu">
        <h2 className="login-heading">Login here</h2>
        <div className="login-form"></div>
        <form className="login-form" id="login-form" onSubmit={validateForm}>
          <div className="email-form">
            <div className="image-form">
              <img src={envelope} alt="Email-logo" className="envelope" />
            </div>
            <div>
              <input
                type="email"
                id="loginEmail"
                name="loginEmail"
                placeholder="Email"
                className="login-form-text-1"
                onkeyup="validateMail()"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div id="emailError">{emailError}</div>
          <div className="password-form">
            <div className="image-form-1">
              <img
                src={passwordImage}
                alt="password-logo"
                className="password-key-image"
                required
              />
            </div>
            <div>
              <input
                type="password"
                id="loginPassword"
                name="loginPassword"
                className="login-form-text-2"
                placeholder="Password"
                onkeyup="validatePassword()"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div id="passwordError">{passwordError}</div>
            </div>
          </div>
          <div>
            <button type="submit" className="login-form-btn">
              Submit
            </button>
            <div id="submitError">{submitError}</div>
          </div>
        </form>
        <div className="redirect-links">
          <Link to="/signup" className="create">
            create account
          </Link>
          <Link to="/forget" className="forgot">
            forgot password&#63;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
