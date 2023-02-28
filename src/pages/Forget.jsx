import React from "react";
import envelope from "../images/envelope.png";

function Forget() {
  return (
    <div className="forgot" id="forgot">
      <div className="forgot-menu">
        <h2 className="login-heading">Forgot password</h2>
        <div className="login-form">
          <form className="login-form">
            <div className="email-form">
              <div className="image-form">
                <img src={envelope} alt="Email-logo" className="envelope" />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  className="login-form-text-1"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div>
              <button className="login-form-btn">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Forget;
