import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  console.log("State Of Current User", currentUser)
  const [authChecked, setAuthChecked] = useState(false)

useEffect(()=>{console.log("In useEffect")
fetch('/me')
.then(r => {
  if(r.ok){
    r.json().then((user) => {console.log(user)
      setCurrentUser(user)
      setAuthChecked(true)
    })
  }else {console.log("No user")
      setAuthChecked(true)
}
})
// .then(r => r.json())
// .then(user => {console.log(user)
// setCurrentUser(user)
// setAuthChecked(true)

// })
console.log("Fetch Done")
}, [])


if(!authChecked) { return <div><h1>Hi</h1></div>}
  return (
    <div>
    <h1>The World of CarServices</h1>
    <Router>
      {currentUser ? (
          <AuthenticatedApp
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
          />
        ) : (
          <UnauthenticatedApp
            setCurrentUser={setCurrentUser}
          />
        )
      }
    </Router>
    </div>
  );
}

export default App;
