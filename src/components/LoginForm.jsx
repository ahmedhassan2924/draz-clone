import React from "react";
import "./loginForm.css";
import Header from "./Header";
import { FaFacebook, FaGoogle } from "react-icons/fa";

function LoginForm() {
  return (
    <>
      <Header />
      <div className="Body">
        <div>
          
          {/* Top Heading Div */}
          <div className="h1Heading">
            <div className="centerHeading">
              <h3>Welcome to Daraz! Please login.</h3>
            </div>
            <div>
              <p>New member? Register here</p>
            </div>
          </div>

          {/* Login Form Div */}
          <div className="innerLogin">
            <div className="leftBox">
              <div className="leftFields">
                <label className="labelSize">Phone Number or Email*</label>
                <input
                  className="Fields"
                  placeholder="Please enter your phone number or email"
                ></input>
              </div>
              <div className="leftFields">
                <label className="labelSize">Password*</label>
                <input
                  className="Fields"
                  placeholder="please enter your password"
                ></input>
              </div>
              <div className="Reset">
                <a className="rP">Reset your password</a>
              </div>
            </div>
            <div className="rightBox">
              <div className="signupButton">
                <button className="signButton">SIGN UP</button>
              </div>
              <div className="Optional">
                <p style={{ fontSize: 10 }}>Or,login with</p>
              </div>
              <div className="faceBook">
                <button className="IButton">
                  <FaFacebook size={22} color="white" />
                  Facebook
                </button>
                <button className="IButton GButton">
                  <FaGoogle size={22} color="white" />
                  Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
