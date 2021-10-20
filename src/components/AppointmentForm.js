import { useState } from 'react'

function AppointmentForm({mapToCar, mapToShop, setCurrentUser, setAppointment, renderAppointment}){

    const [date, setDate] = useState('')
    const [car_id, setCar_id] = useState('')
    const [shop_id, setShop_id] = useState('')


    const handleMakeAppointment=(event)=>{
        event.preventDefault()
        fetch('/appointments', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                date,
                car_id,
                shop_id,
            })
        })
        .then(r => r.json())
        .then(appointment => {
            console.log(appointment)
            setAppointment([...renderAppointment, appointment])
            // setCurrentUser(appointment)
        })
    }


    return(
        <div className="appointmentFormDiv">
         <form className="appointmentForm" onSubmit={handleMakeAppointment}>
             <label> Select You Car:</label>
                <select className="carDrop" 
                type="text" 
                id="car" 
                value={car_id} 
                onChange={(e) => setCar_id(e.target.value)}>
                    <option value="">
                    Choose your Car:
                    </option>
                    {mapToCar.map((car)=> {
                        return(
                            <option value={car.id} key={car.make}> {car.year}{car.make}{car.model}</option>
                        )
                    })}

                </select>
                <label>Select a Shop:</label>
                <select className="shopDrop" 
                type="text" 
                id="shop" 
                value={shop_id} 
                onChange={(e) => setShop_id(e.target.value)}>
                    <option value="">
                    Choose a Shop:
                    </option>
                    {mapToShop.map((shop)=> {
                        return(
                            <option value={shop.id} key={shop.name}> {shop.name}</option>
                        )
                    })}

                </select>
                <label>
                    Date:
                <input
                    className="dateInput"
                    type="datetime-local" 
                    name="name" 
                    placeholder="datetime-local"
                    value={date}
                    onChange={(e)=> setDate(e.target.value)} />
                </label>
                
                <input type="submit" value="Submit" className="submitAppointment"/>
            </form>
        </div>
    )
}
export default AppointmentForm