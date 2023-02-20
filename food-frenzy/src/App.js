import React,{useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import './App.css'
import ResetPassword from './Components/Login/ResetPassword/ResetPassword'
// import Popup from './Components/Popup/Popup'
import Popup from './Components/HOC Components/Popup/Popup'
import Home from './Components/HomePage/Home'

const App = () => {

  let RegisterComponent = Popup(Register)
  let LoginComponent = Popup(Login)
  let ResetPasswordComponent=Popup(ResetPassword)

  return <>
    <Router>
    <Home />
      <Routes>
        <Route path='/login' element={<LoginComponent />} />
        <Route path='/reset' element={<ResetPasswordComponent />} />
        <Route path='/register' element={<RegisterComponent />} />
      </Routes>
    </Router>
  </>
}

export default App
