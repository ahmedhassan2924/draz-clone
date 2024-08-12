import React from "react";
import "./headerStyle.css";
import { FaRegUser, FaGlobe } from "react-icons/fa";
import { BsCart, BsGlobe } from "react-icons/bs";
import { useNavigate } from "react-router-dom";



function Header() {
  let navigate = useNavigate();
  return (
    // Main Header Wrapper
    <div className="mainHeader">
      {/* Header Top */}
      <div className="Header">
        <div>Become a Seller</div>
        <div> Daraz Affiliate Program</div>
        <div> Help & Support</div>
        <div> Daraz Logistics Partner</div>
      </div>

      {/* Header Bottom */}
      <div className="bottomRow">
        <div className="logo">
          <h1>Daraz</h1>
        </div>
        <div className="input">
          <input className="inputField" placeholder="Search in Daraz"></input>
        </div>
        {/* Login Button */}
        <div>
          <button className="headerButton" onClick={()=> navigate("/login")}>
            <div style={{ marginRight: 4 }}>
              <FaRegUser size={16} />
            </div>
            Login
          </button>
        </div>
        <div>
          <button className="headerButton" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </div>
        <div>
          <button className="headerButton">
            <div style={{ marginRight: 4 }}>
              <BsGlobe size={16} />
            </div>
            EN
          </button>
        </div>
        <div>
          <button className="headerButton">
            <div style={{ marginRight: 4 }}>
              <BsCart size={30} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
