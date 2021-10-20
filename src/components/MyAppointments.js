import MyAppointmentCard from "./MyAppointmentCard"

function MyAppointment({appointmentToMap}){

    return(
        <div>
            {
                appointmentToMap.map(eachAppointment => {console.log(eachAppointment)
                
                    return(
                        <MyAppointmentCard
                                        key={eachAppointment.id}
                                        appointmentToRender={eachAppointment}
                        />
                    )
                })

            }

        </div>
    )
}
export default MyAppointment