import ResturantCard from "./ResturantCard";
import foodObj from "../utils/mockData";
import { useState } from "react";

// creating body
const Body = () => {

    // here we are using hook
    const [listofResturants , setlistofResturants] = useState(foodObj);

    return (
        <div className="body">
            
            <div className="filter">
                <button className="filter-btn"
                onClick = { () => {
                 const filterdlist =  listofResturants.filter((res) => res.info.avgRating > 4);
                 setlistofResturants(filterdlist);
                 console.log("btnclicked");
                }}> top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {
                   listofResturants.map((restraunt) => <ResturantCard  key = {restraunt.info.id}
                    resData = {restraunt}/>)
                }
                
            </div>
        </div>
    )
}

export default Body;