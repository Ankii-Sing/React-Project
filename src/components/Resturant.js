import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";


const Resturant = () => {

    const [resInfo , setresInfo] = useState(null);

    useEffect( ()=>{
        fetchMenu();
    } ,[])
    
    const {resId} = useParams();
    

    const fetchMenu = async ()=> {
        const data = await fetch( MENU_API+ resId)
        const json = await data.json();
        
        console.log(json);

        setresInfo(json.data);

        }  

    if(resInfo == null)
        return <Shimmer/>
    
    const {name , cuisines , costForTwoMessage } = resInfo.cards[0].card.card.info;

    const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
    ?.cards[1]?.card?.card?.itemCards ;

    console.log(itemCards)

    return (
        <div className="Menu">
             <h1>{name}</h1>
             <p> {cuisines.join(',')} - 
             { " Rs."} {costForTwoMessage} </p>

             <h3> Menu</h3>
             <ul>
                {
                    itemCards?.map( item => <li key={item?.card?.info?.id}>{ item?.card?.info?.name
                    } - {" Rs."} {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100 }</li>)

                }
             </ul>

        </div>
    )
}

export default Resturant;