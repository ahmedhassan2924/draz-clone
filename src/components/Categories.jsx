import React from "react";
import "./categoriesStyles.css";
import { BsWatch } from "react-icons/bs";
import { PiBasket, PiBaby, PiHeart } from "react-icons/pi";
import {
  FaUserTie,
  FaPersonBooth,
  FaMotorcycle,
  FaCouch,
  FaTv,
  FaCamera,
  FaBasketballBall,
  FaKeyboard
} from "react-icons/fa";

function Categories() {
  return (
    <div className="Categories">
      <a className="categoryTitle">
        <div className="iconContainer">
          <PiBasket size={15}/>
        </div>
        Groceries & Pets
      </a>
      <p className="categoryTitle">
        <div className="iconContainer">
          <PiHeart />
        </div>
        Health & Beauty
      </p>
      <p className="categoryTitle">
        <div className="iconContainer">
          <FaUserTie />
        </div>
        Men's Fashion
      </p>
      <p className="categoryTitle">
        <div className="iconContainer">
          <FaPersonBooth />
        </div>
        Women's Fashion
      </p>
      <p className="categoryTitle">
        <div className="iconContainer">
          <PiBaby />
        </div>
        Mother & Baby
      </p>
      <p className="categoryTitle">
        <div className="iconContainer">
          <FaCouch />
        </div>
        Home & Lifestyle
      </p>
      <p className="categoryTitle">
        <div className="iconContainer">
          <FaCamera />
        </div>
        Electronic Devices
      </p>
      <p className="categoryTitle">
        <div className="iconContainer"><FaKeyboard/> </div>Electronic Accessories
      </p>
      <p className="categoryTitle">
        <div className="iconContainer">
          <FaTv />
        </div >
        TV & Home Appliances
      </p>
      <p className="categoryTitle">
        <div className="iconContainer">
          <FaBasketballBall />
        </div>
        Sports & Outdoor
      </p>
      <p className="categoryTitle">
        <div className="iconContainer">
          <BsWatch />
        </div>
        Watches, Bags & Jewellery
      </p>
      <p className="categoryTitle">
        <div className="iconContainer">
          <FaMotorcycle />
        </div>
        Automotive & Motorbike
      </p>
    </div>
  );
}

export default Categories;
