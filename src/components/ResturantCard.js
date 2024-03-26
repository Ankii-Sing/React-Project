import { CDN_URL } from "../utils/constants"

// restureant card
const ResturantCard = (data) =>{
    // destructuring
    const {resData} = data
    // optional chaining

    const { name ,costForTwo , cuisines, avgRating, cloudinaryImageId} = resData?.info

    return (
        <div className="p-4 m-4 w-[250px] rounded-xl bg-slate-100 hover:bg-slate-200 " >
            <img className="rounded-md "
             alt="res-logo"
             src={ CDN_URL + cloudinaryImageId }/>
            <h4 className="font-bold py-4 text-lg">{name}</h4>
            <h4>{costForTwo}</h4>
            <h4>{cuisines.join(',')}</h4>
            <h4>{avgRating}Stars</h4>
            <h4>{resData.info.sla.deliveryTime} mins</h4>
        </div>
    )
}

export default ResturantCard;