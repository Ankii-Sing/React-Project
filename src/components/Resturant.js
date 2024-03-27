import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";
import ResturantCategory from "./ResturantCategory";


const Resturant = () => {

    const [resInfo , setresInfo] = useState(null);

    const [showItems ,setshowItems] = useState(0)

    useEffect( ()=>{
        fetchMenu();
    } ,[])
    
    const {resId} = useParams();
    

    const fetchMenu = async ()=> {
        const data = await fetch( MENU_API+ resId)
        const json = await data.json();
        
        // console.log(json);

        setresInfo(json.data);

        }  

    if(resInfo == null)
        return <Shimmer/>
    
    const {name , cuisines , costForTwoMessage ,avgRating
    } = resInfo.cards[2].card.card.info;

    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
    ?.cards[1]?.card?.card?.itemCards ;

    // console.log( resInfo.cards[2].card.card.info)

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
        c => c?.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory' 
    )
    const recommendedCategory = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
        c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    //     console.log(categories);
    // console.log(recommendedCategory);
    // const Alldata = categories.concat(recommendedCategory);

    // console.log(Alldata);

    

    return (
        <div className="text-center">
             <h1 className="my-3 font-bold text-2xl ">{name}</h1>
             <p className="mb-3"> {cuisines.join(',')}  </p>

             <div className="font-light text-md flex justify-between w-6/12 mx-auto">
                <p className="my-2 from-neutral-800 text-md">
                { " Rs."} {costForTwoMessage} 
                </p>
                <h3 className="my-2 from-neutral-800 text-md" > Rating : {avgRating}</h3>
             </div>
             
             <h3> Menu</h3>
             {/* <ul>
                {
                    itemCards?.map( item => <li key={item?.card?.info?.id}>{ item?.card?.info?.name
                    } - {" Rs."} {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100 }</li>)

                }
             </ul> */}

             <p> 
                {categories.map((category,index)=>(
                    <ResturantCategory key={category.card.card.title }
                     data = {category?.card?.card }
                     showItems = {index === showItems ? true : false}
                     setshowItems = {() => setshowItems(index)}

                     />)
                )}
             </p>

        </div>
    )
}

export default Resturant;