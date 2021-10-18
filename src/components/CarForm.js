import { useState } from 'react'

function CarForm({currentUser, setCurrentUser}){
    const [year, setYear] = useState('')
    const [make, setMake] = useState('')
    const [model, setModel] = useState('')
    const [insurance, setInsurance] = useState('')


    const handleAddCar=(event)=>{
        event.preventDefault()
        fetch('/cars', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                year,
                make,
                model,
                insurance,
                user_id: currentUser.id
            })
        })
        .then(r => r.json())
        .then(cars => {
            console.log(cars)
            setCurrentUser(cars)
        })
    }
    return(
        <div>
            <form onSubmit={handleAddCar}>
        <label>
            Year:
            <input
                type="text" 
                name="year" 
                value={year}
                placeholder="Enter the year..."
                onChange={(event) => setYear(event.target.value)}
            />
        </label>
        <label>
            Make:
            <input
            type="text" 
            name="make" 
            value={make}
            placeholder="Enter the make..."
            onChange={(event) => setMake(event.target.value)}
            />
        </label>
        <label>
            Model:
            <input
            type="text" 
            name="model" 
            value={model}
            placeholder="Enter the model..."
            onChange={(event) => setModel(event.target.value)}
            />
        </label>
        <label>
            Insurance:
            <input
            type="text" 
            name="insurance" 
            value={insurance}
            placeholder="Enter yes or no..."
            onChange={(event) => setInsurance(event.target.value)}
            />
        </label>
        <input type="submit" value="Submit" />
    </form>
    
    </div>)
}
export default CarForm