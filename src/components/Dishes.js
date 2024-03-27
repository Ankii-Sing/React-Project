import { CDN_URL } from "../utils/constants";

const Dishes = ({dish}) => {
    
    return (
        <div>
            
            {
                dish.map( (d) => (
                    
                    <div key = {d.card.info.id} className="flex justify-between ">
                        <div className=" text-left p-4 m-4">
                        
                            <div className=" text-gray-900 text-md font-semibold  ">
                                <p>{d.card.info.name}</p>
                                <p>₹ {d.card.info.defaultPrice/100  || d.card.info.price/100 } </p>
                            
                            </div>
                            
                            <p className=" border-gray-200 border-b-2 text-sm font-mono text-gray-600">{d.card.info.description}</p>
                        </div>
                        
                        <div >
                            {/* <button className="border-green-800 text-green-800 rounded-lg ">Add +</button> */}
                            <img src={CDN_URL + d.card.info.imageId} className=" p-4 w-[150px] object-scale-down "/>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default Dishes;