import React from "react";
import ReactDOM from "react-dom/client";

const RestaurantCard = () => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/a4ffed13eb197c6df43dfe1c756560e5"
      />
      <h3>Meghana Foods</h3>
      <h4>Biryani, North Indian, Asia</h4>
      <h4>38 mins</h4>
    </div>
  );
};

export default RestaurantCard;
