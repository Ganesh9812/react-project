import React from "react";
import ReactDOM from "react-dom/client";

const RestaurantCard = ({ resData }) => {
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/a4ffed13eb197c6df43dfe1c756560e5"
      />
      <h3 className="font-bold py-4 text-lg">{resData.info.name}</h3>
      <h4>{resData.info.cuisines}</h4>
      <h4>{resData.info.sla.deliveryTime} mins</h4>
      <h4>{resData.info.costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
