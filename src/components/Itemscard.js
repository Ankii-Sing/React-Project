import { useState } from "react"
import Dishes from "./Dishes"

const ItemCard = ({item}) =>{
    
    const [showfood , setshowfood] = useState(false)
    const showDishes = () => {
        setshowfood(!showfood)
    }
    return (
        // title extract => show name => and one more Dish component.
        <div>
            {/* <div>{title}</div> */}
            {item.map( (i) => (
                    <div  key={i.title}  className="p-4 m-4 ">
                        <p  onClick={showDishes} className="font-semibold text-lg border-gray-400 border-b-2 text-left">{i.title} {" "} ({item.length})</p>
                        {showfood && <Dishes dish={i.itemCards}/>}
                    </div>
                )
             )}
        </div>
    )
}
export default ItemCard