import { useState } from 'react'

function AppointmentForm({mapToCar, mapToShop, setCurrentUser}){

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
            // setCurrentUser(appointment)
        })
    }


    return(
        <div>
         <form className="appointmentForm" onSubmit={handleMakeAppointment}>
                <select className="carDrop" 
                type="text" 
                id="car" 
                value={car_id} 
                onChange={(e) => setCar_id(e.target.value)}>
                    <option value="">
                    Select your Car:
                    </option>
                    {mapToCar.map((car)=> {
                        return(
                            <option value={car.id} key={car.make}> {car.year}{car.make}{car.model}</option>
                        )
                    })}

                </select>
                <select className="shopDrop" 
                type="text" 
                id="shop" 
                value={shop_id} 
                onChange={(e) => setShop_id(e.target.value)}>
                    <option value="">
                    Select a Shop:
                    </option>
                    {mapToShop.map((shop)=> {
                        return(
                            <option value={shop.id} key={shop.name}> {shop.name}</option>
                        )
                    })}

                </select>
                {/* <label>
                    Choose Shop:
                <input
                type="text" 
                name="shop" 
                placeholder="Choose perferred shop..."
                />
                </label> */}
                <label>
                    Date:
                <input
                    type="date" 
                    name="name" 
                    placeholder="date"
                    value={date}
                    onChange={(e)=> setDate(e.target.value)} />
                </label>
                
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
export default AppointmentForm