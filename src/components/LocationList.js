function LocationList({locationToRender}){

    return(
    <div className="locationDiv">

        __________________________________
     <h2>{locationToRender.state}</h2>
     <h3>{locationToRender.city}</h3>

     {
         locationToRender.shops.map(eachShops => {
             console.log(eachShops)
             return(
                 <h2>{eachShops.name}</h2>
             )
         })
     }
    
    </div>)

}
export default LocationList