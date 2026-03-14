import { useState } from 'react'
import LogIn from './components/LogIn'
import Profile from './components/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>Elden ring is the best game ever</h1>
      <LogIn />
      <Profile />
    </UserContextProvider>
  )
}

export default App
