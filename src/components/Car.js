import CarForm from "./CarForm"
import CarCard from "./CarCard"
import { useState } from 'react'

function Car({currentUser, setCurrentUser, mapToCar}){

    return(
    <div>
   
        <CarForm
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
        />

        {
            mapToCar.map(eachCar => {
                console.log(eachCar)
                return(
                    <CarCard
                        key={eachCar.id}
                        carToRender={eachCar}
                    />
                )
            })
        }
    
    </div>)
}
export default Car