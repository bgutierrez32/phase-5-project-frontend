import React, { useState } from 'react'
import { Redirect, useHistory, Link } from 'react-router-dom'

function Login({setCurrentUser}){

    const history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (event) => {
        event.preventDefault()
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        })
        .then(r => {
            if (r.ok){
                r.json().then(user => {
            // if(){

            // }
                    setCurrentUser(user)
                    history.push("/Home")
                })
            }else {
                setCurrentUser({ username: "Couldnt Login!" })
                history.push("/login")
                r.json().then(errors => {
                    console.error(errors)
                })
            }
        })
        // .then(r => r.json())
        // .then(user => {console.log(user)
        // setCurrentUser(user)
        // history.push('/Home')
        // })

    }


    return(<div>
        <form className="form" onSubmit={handleLogin}>
            <h1>Login</h1>
            <p>
                <label
                    htmlFor="username"
                >
                    Username:
                </label>
                <input
                 type="text"
                 name="username"
                 value={username}
                 onChange={(event) => setUsername(event.target.value)}
                />
            </p>
            <p>
                <label
                    htmlFor="password"
                >
                    Password:
                </label>
                <input
                    type="password"
                    name=""
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </p>
            <p><button type="submit">Login</button></p>
            <p>-- ⏬ Sign up here ⏬--</p>
            <p><Link to="/signup"> <button>Sign up</button></Link></p>
        </form>
    </div>)
}
export default Login