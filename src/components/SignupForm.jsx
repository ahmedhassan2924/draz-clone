import React from "react";
import "./SignupForm.css";
import Header from "./Header";
import { FaFacebook, FaGoogle } from "react-icons/fa";

function SignupForm() {
  return (
    <>
      <Header />
      <div className="Body">
        <div className="innerBox">
          <div className="Left">
            <div className="singleField">
              <label className="labelSize">Phone Number*</label>
              <input
                className="Fields"
                placeholder="Please enter your phone number"
              ></input>
            </div>
            <div className="singleField">
              <label className="labelSize">
                Verfication Code from whatsApp*
              </label>
              <input className="Fields" placeholder="Verification Code"></input>
            </div>
            <div className="singleField">
              <label className="labelSize">Password*</label>
              <input
                className="Fields"
                placeholder="Minimum 6 character"
              ></input>
            </div>
          </div>

          <div className="Right">
            <div className="singleField">
              <label className="labelSize">Full name*</label>
              <input
                className="Fields"
                placeholder="Enter yout first name and last name"
              ></input>
              <div className="checkBox">
                <input type="checkbox"></input>
                <p className="Sms">
                  I'd like to receive exclusive offers and promotions via SMS
                </p>
              </div>
            </div>
            <div>
              <button className="signButton">SIGN UP</button>
            </div>
            <div>
              <p className="Agree">
                By clicking “SIGN UP”, I agree to Daraz's
                <a href="https://www.google.co.uk/" className="Condition">
                  {" "}
                  Terms of Use and Privacy Policy
                </a>
              </p>
              <div className="mButton">
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

export default SignupForm;
