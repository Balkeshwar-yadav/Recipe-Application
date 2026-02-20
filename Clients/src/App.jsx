import React from 'react'
import {BrowserRouter as Router, Routes, Route }  from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'
import AddRecipe from './Components/AddRecipe.jsx'
import Saved from './Components/Saved.jsx'
import Home from './Components/Home.jsx'
import Profile from './Components/Profile.jsx'

import Details from './Components/Details.jsx'
const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={  <Home/>} />
          <Route path='/login' element={  <Login/>} />
          <Route path='/register' element={   <Register/>} />
          <Route path='/profile' element={   <Profile/>} />
          <Route path='/saved' element={   <Saved/>} />
          <Route path='/add' element={  <AddRecipe/>} />
          <Route path='/:id' element={  <Details/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
