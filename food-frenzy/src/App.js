import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import './App.css'

const App = () => {
  return <>
  <Router>
    <Routes>
      <Route path='/Login' element={<Login />}/>
      <Route path='/' element={<Register />}/>
    </Routes>
  </Router>
  </>
}

export default App
