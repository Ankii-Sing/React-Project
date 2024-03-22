import { CDN_URL } from "../utils/constants"

// restureant card
const ResturantCard = (data) =>{
    // destructuring
    const {resData} = data
    // optional chaining

    const { name ,costForTwo , cuisines, avgRating, cloudinaryImageId} = resData?.info

    return (
        <div className="res-card" >
            <img className="res-logo"
             alt="res-logo"
             src={ CDN_URL + cloudinaryImageId }/>
            <h4>{name}</h4>
            <h4>{costForTwo}</h4>
            <h4>{cuisines.join(',')}</h4>
            <h4>{avgRating}Stars</h4>
            <h4>{resData.info.sla.deliveryTime} mins</h4>
        </div>
    )
}

export default ResturantCard;