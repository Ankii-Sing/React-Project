import { CDN_URL } from "../utils/constants"

// restureant card
const ResturantCard = (data) =>{
    // destructuring
    const {resData} = data
    // optional chaining

    const { name ,costForTwo , cuisines, avgRating,cloudinaryImageId} = resData?.info

    return (
        <div className="res-card" >
            <img className="res-logo"
             alt="res-logo"
             src={
                CDN_URL
              + cloudinaryImageId 
              }/>
            <h3>{name}</h3>
            <h3>{costForTwo}</h3>
            <h3>{cuisines.join(',')}</h3>
            <h3>{avgRating}Stars</h3>
            <h3>{resData.info.sla.deliveryTime}mins</h3>
        </div>
    )
}

export default ResturantCard;