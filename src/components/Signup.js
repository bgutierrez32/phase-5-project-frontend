import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

function Signup({setCurrentUser}){

    const history = useHistory()
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const handleSignup = (event) => {
        event.preventDefault()
        fetch('http://localhost:3000/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name,
            username,
            password,
            password_confirmation: passwordConfirmation
          })
        })
          .then(res => {
            if (res.ok) {
              res.json().then(user => {
                setCurrentUser(user)
                history.push('/Home')
              })
            } else {
              res.json().then(errors => {
                console.error(errors)
              })
            }
          })
      }

    return(<div>
 <form className="form" onSubmit={handleSignup}>
        <h1>Sign Up</h1>
        <p>
          <label
            htmlFor="name"
          >
            Name:
          </label>
          <input 
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </p>
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
        <p>
          <label 
            htmlFor="password_confirmation"
          >
            Password Confirmation:
          </label>
          <input
            type="password_confirmation"
            name="password_confirmation"
            value={passwordConfirmation}
            onChange={(event) => setPasswordConfirmation(event.target.value)}
          />
        </p>
        <p><button type="submit">Sign Up</button></p>
        <p>-- ⏬ Login here ⏬ --</p>
        <p><Link to="/login"><button>Log In</button></Link></p>
      </form>
    </div>)
}
export default Signup