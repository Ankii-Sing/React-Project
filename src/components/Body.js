import ResturantCard from "./ResturantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

// creating body
const Body = () => {

    // here we are using hook
    const [listofResturants , setlistofResturants] = useState([]);
    const [filteredResturants , setfilteredResturants] = useState([]);

    const [SearchText , setSearchText] = useState("");
    
    console.log("print");

    // use useeffect
    useEffect( () => {
        fetchdata();
    }, []);

    const fetchdata = async() =>{ 
        const data =  await fetch
        ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.57350&lng=77.32080&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        const json = await data.json();
        // const temp = await json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setlistofResturants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredResturants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // adding shimmer
    if( listofResturants == 0)
        return (< Shimmer />)

    return (
        <div className="body">      
            <div className="filter">
                <div className="Search">
                    <input type="text" className="Search-box"
                     value = {SearchText}
                     onChange={ 
                        (e) => {setSearchText(e.target.value);}} >
                        </input>
                    <button className="Search-btn"  
                      
                      onClick={ () => {
                        console.log(SearchText)

                        const NewFilter = listofResturants.filter( 
                            (res) => res.info.name.toLowerCase().includes(SearchText.toLowerCase())
                            )

                        setfilteredResturants(NewFilter);    
                    }}
                    >Search</button>
                </div>


                <button className="filter-btn"
                    onClick = { () => {
                    const filteredList =  listofResturants?.filter(
                    (res) => res.info.avgRating > 4);
                    setlistofResturants(filteredList);
                
                    }}> top Rated Restaurant
                </button>
            </div>

            <div className="res-container">
                {
                   filteredResturants?.map((restraunt) => 
                   (<Link key = { restraunt.info.id} 
                   to={"/resturant/"+restraunt.info.id}> 
                    <ResturantCard  resData = {restraunt}/>
                   </Link>
                   ))
                }                
            </div>
        </div>
    )
}

export default Body;