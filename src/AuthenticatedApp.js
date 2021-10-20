import { Switch, Redirect, Route, NavLink, useHistory } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Location from "./components/Locations";
import Appointment from "./components/Appointment";
import Service from "./components/Service";
import MyAppointment from "./components/MyAppointments";
import Car from "./components/Car";
import { useEffect, useState } from "react";

function AuthenticatedApp({ currentUser, setCurrentUser }){

const history = useHistory()
const [location, setLocation] = useState([])
const [service, setService] = useState([])
const [car, setCar] = useState([])
const [shop, setShop] = useState([])
const [appointment, setAppointment] = useState([])

const handleLogout = () => {console.log("In handleLogout")

fetch('/logout',{
    method: 'DELETE'
})
.then(r => r.json())
.then(message => {console.log(message)
    setCurrentUser(null)
})

}

useEffect(() => {
    fetch('/locations')
    .then(r => r.json())
    .then(fetchedLocations => {console.log("In UseEffects for Locations", fetchedLocations)
        setLocation(fetchedLocations)
    })
    fetch('/services')
    .then(r => r.json())
    .then(fetchedServices => {console.log(fetchedServices)
        setService(fetchedServices)
    })
    fetch('/cars')
    .then(r => r.json())
    .then(fetchedCars => {console.log(fetchedCars)
        setCar(fetchedCars)
    })
    fetch('/shops')
    .then(r => r.json())
    .then(fetchedShop => {console.log(fetchedShop)
        setShop(fetchedShop)
    })
    fetch('/appointments')
    .then(r => r.json())
    .then(fetchedAppointment => {console.log(fetchedAppointment)
        setAppointment(fetchedAppointment)
    })
}, [])

// const handleAddCar=()=>{
//     fetch('/cars', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
          
//         })
//     })
//     .then(r => r.json())
//     .then(cars => {
//         console.log(cars)
//     })
// }

// const HandleServices = ()=>{
//     fetch('/services')
//     .then(r => r.json())
//     .then(fetchedServices => {console.log(fetchedServices)
//         setService(fetchedServices)
//     })
// }

    return(
        <div>
                <nav className="nav">
                <span className="navSpan">
                    <NavLink  className="navLink" to="/Home" exact>
                        Home
                    </NavLink>
                    <NavLink className="navLink" to="/Locations">
                        Locations
                    </NavLink>
                    <NavLink className="navLink" to="/Services">
                        Services
                    </NavLink>
                    <NavLink className="navLink" to="/Appointment">
                        Make Appointment
                    </NavLink>
                    <NavLink className="navLink" to="/MyAppointment">
                        My Appointments
                    </NavLink>
                    <NavLink className="navLink" to="/MyCars">
                        Add Your Car
                    </NavLink>
                    <NavLink className="navLink" to="/login" onClick={handleLogout}>
                        {/* <button onClick={handleLogout}> Logout </button> */}
                        Logout
                    </NavLink>
                </span>
                <span className="span">Logged in as {currentUser.name}</span>
            </nav>
            <Switch>
            <Route path="/login">
                <Login
                    setCurrentUser={setCurrentUser}
                />
            </Route>

                <Route path="/Home">
                <Home
                    currentUser={currentUser}
                 />
            </Route>
            <Route path="/Locations">
                <Location 
                    locationToMap={location}
                />
            </Route>
            <Route path="/Appointment">
                <Appointment
                        mapToCar={car}
                        mapToShop={shop}
                        setCurrentUser={setCurrentUser}
                        setAppointment={setAppointment}
                        renderAppointment={appointment}
                />
            </Route>
            <Route path="/Services">
                <Service
                    serviceToMap={service}
                />
            </Route>
            <Route path="/MyAppointment">
                <MyAppointment appointmentToMap={appointment}/>
            </Route>
            <Route path="/myCars">
                <Car
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                    mapToCar={car}
                    setCar={setCar}
                />
            </Route>
            
            <Redirect to="/Home"/>
            </Switch>
        </div>
    )
}
export default AuthenticatedApp;