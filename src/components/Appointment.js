import SearchBar from "./SearchBar"
import AppointmentForm from "./AppointmentForm"

function Appointment({mapToCar, mapToShop}){

    return(
        <div>
            <SearchBar/>
            <AppointmentForm
                mapToCar={mapToCar}
                mapToShop={mapToShop}
            
            />
           
        </div>
    )
}
export default Appointment