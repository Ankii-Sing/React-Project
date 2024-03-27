import Dishes from "./Dishes"

const ItemCard = ({item}) =>{
    console.log(item)
    return (
        // title extract => show name => and one more Dish component.
        <div>
            {/* <div>{title}</div> */}
            {item.map( (i) => (
                    <div className="p-4 m-4 ">
                        <p className="font-semibold text-lg border-gray-400 border-b-2 text-left">{i.title} {" "} ({item.length})</p>
                        <Dishes dish={i.itemCards}/>
                    </div>
                )
             )}
        </div>
    )
}
export default ItemCard