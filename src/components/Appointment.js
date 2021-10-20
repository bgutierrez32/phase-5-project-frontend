import SearchBar from "./SearchBar"
import AppointmentForm from "./AppointmentForm"
import MyAppointment from "./MyAppointments"

function Appointment({mapToCar, mapToShop, setAppointment, renderAppointment}){

    return(
        <div>
            <SearchBar/>
            <AppointmentForm
                mapToCar={mapToCar}
                mapToShop={mapToShop}
                setAppointment={setAppointment}
                renderAppointment={renderAppointment}
            />
            {/* <MyAppointment/> */}
           
        </div>
    )
}
export default Appointment