import React from "react";
import "./cardStyles.css";

function ProductCard({title,url,id}) {
  return (
    <div className="cardStyle">
      <div>
        <img
          className="Image"
          src={url}
        />
      </div>
      <div className="Discription">
        <p>
          {/* TWS I12 & i7s Airpods_ with Super Sound & High Quality Touch Sensors
          True Stereo Headphones with Built in Mic 10m Transmission Bluetooth
          Wireless Earbuds , Charging Case Sport Headset for all Bluetooth Smart
          devices. */}
          {title}
        </p>
      </div>
      <div className="AllRates">
        <p className="Rates">Rs.{id}</p>
        <p className="originalRates">Rs3,000-75%</p>
      </div>
    </div>
  );
}

export default ProductCard;
