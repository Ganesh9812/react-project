import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {}}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        <RestaurantCard />
      </div>
    </div>
  );
};

export default Body;
