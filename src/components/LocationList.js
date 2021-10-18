function LocationList({locationToRender}){

    return(
    <div className="locationDiv">

     <h2>{locationToRender.state}</h2>
     <h3>{locationToRender.city}</h3>     
     
    </div>)

}
export default LocationList