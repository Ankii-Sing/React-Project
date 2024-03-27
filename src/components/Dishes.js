const Dishes = ({dish}) => {
    console.log(dish)
    return (
        <div>
            {/* dish.card.info imageId  */}
            {/* <p>Display the Dishes</p> */}
            {
                dish.map( (d) => (
                    
                    <div  key = {d.card.info.id} className=" flex justify-between text-left p-4 m-4">
                        
                            <div className=" text-gray-900 text-md font-semibold  ">
                                <p>{d.card.info.name}</p>
                                <p>Rs.{d.card.info.defaultPrice/100}</p>
                            
                            </div>
                            
                            <p className=" border-gray-200 border-b-2 text-sm font-mono text-gray-600">{d.card.info.description}</p>
                    </div>
                ))
            }
        </div>
    )
}
export default Dishes;