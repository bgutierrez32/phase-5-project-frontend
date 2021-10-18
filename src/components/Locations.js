import LocationList from "./LocationList"

function Location({locationToMap}){

    return(<div>
        <h1>All Of the Locations in the UnitedStates</h1>
    {
        locationToMap.map(eachLocation => {
            console.log("Location list", eachLocation)

            return(
                <LocationList 
                        key={eachLocation.id}
                        locationToRender={eachLocation}
                
                />
            )
        })
    }
    
    </div>)
}
export default Location