import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://cors-anywhere.herokuapp.com?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8590569&lng=77.5414244&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    //data is now in readable stream and convert to json
    const json = await data.json();
    console.log(json);
  };

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
