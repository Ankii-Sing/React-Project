import ItemCard from "./Itemscard";

const ResturantCategory = ({data}) => {
    console.log(data)
    console.log(data.title)
    return (
        <div>
            {/* Amcordian heading */}
            <div className=" w-6/12 mx-auto shadow-lg  ">
                
                <div className="flex justify-between my-4 p-4 ">
                    <span className="font-bold text-xl">{data.title} ({data.categories.length})</span>
                    <span>🔻</span>
                </div>

                <div>
                    {/* Amcordian Body */}
                    <ItemCard item = {data?.categories}/>
                </div>
            
            </div>    
        </div>
    )
        
    
}
export default ResturantCategory;