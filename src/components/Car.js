import CarForm from "./CarForm"
import CarCard from "./CarCard"
import { useState } from 'react'

function Car({currentUser, setCurrentUser, mapToCar, setCar}){

    return(
    <div>
   
        <CarForm
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            setCar={setCar}
            mapToCar={mapToCar}
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