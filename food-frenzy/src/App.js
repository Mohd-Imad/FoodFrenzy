import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import './App.css'
import ResetPassword from './Components/Login/ResetPassword/ResetPassword'
import Popup from './Components/Popup/Popup'

const App = () => {
  return <>
  <Router>
    <Routes>
      <Route path='/Login' element={<Login />}/>
      <Route path='/reset' element={<ResetPassword />}/>
      {/* <Route path='/' element={<Register />}/> */}
      <Route path='/' element={<Popup />}/>
    </Routes>
  </Router>
  </>
}

export default App
