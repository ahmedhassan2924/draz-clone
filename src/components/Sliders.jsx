import React from "react";
import "./sliderStyles.css";
import SwipeableViews from "react-swipeable-views";



function Sliders() {
  return (
    <div className="sliders">
      <SwipeableViews enableMouseEvents>
        <div className="imageClass" >
          <img className="image"  src="https://icms-image.slatic.net/images/ims-web/4dab71a6-bcf5-4318-9b8b-8063ab56398c.jpg"/>
        </div>
        <div className="imageClass">
          <img className="image" src="https://icms-image.slatic.net/images/ims-web/00252b6f-8b4d-4086-94d2-b17902ab0ef5.jpg"/>
        </div>
        <div className="imageClass">
          <img className="image" src="https://icms-image.slatic.net/images/ims-web/4a10d831-bd60-494e-87b8-6cf1bca7a057.png_1200x1200.jpg"/>
        </div>
      </SwipeableViews>
    </div>
  );
}

export default Sliders;
