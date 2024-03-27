import { useState } from "react";
import ItemCard from "./Itemscard";

const ResturantCategory = ({data,showItems,setshowItems}) => {

    
    const handleClick = () => {
        setshowItems();
    };

    return (

        <div>
            {/* Amcordian heading */}
            <div className=" w-6/12 mx-auto shadow-lg  ">
                
                <div className="flex justify-between my-4 p-4 cursor-pointer " onClick={handleClick} >
                    <span className="font-bold text-xl">{data.title} ({data.categories.length})</span>
                    <span>🔻</span>
                </div>

                <div>
                    {/* Amcordian Body */}
                    {showItems  && <ItemCard item = {data?.categories}/>}
                </div>
            
            </div>    
        </div>
    )
        
    
}
export default ResturantCategory;