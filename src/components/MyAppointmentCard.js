function MyAppointmentCard({appointmentToRender}){
    return(
        <div>
            __________________________________
            <h2>{appointmentToRender.car.make}</h2>
            <h2>{appointmentToRender.car.model}</h2>
            <h2>{appointmentToRender.car.year}</h2>
            <h2>{appointmentToRender.shop.name}</h2>
            <h2>{appointmentToRender.shop.address}</h2>
            {/* <h2>{appointmentToRender.car_id.user.name}</h2> */}
            <h2>{appointmentToRender.date}</h2>
        
        </div>
    )
}
export default MyAppointmentCard