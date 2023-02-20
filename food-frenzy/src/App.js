import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import './App.css'
import ResetPassword from './Components/Login/ResetPassword/ResetPassword'
// import Popup from './Components/Popup/Popup'
import Popup from './Components/HOC Components/Popup'

const App = () => {

  let RegisterComponent = Popup(Register)
  let LoginComponent = Popup(Login)
  let ResetPasswordComponent=Popup(ResetPassword)
  return <>
    <Router>
      <Routes>
        <Route path='/Login' element={<LoginComponent />} />
        <Route path='/reset' element={<ResetPasswordComponent />} />
        <Route path='/' element={<RegisterComponent />} />
      </Routes>
    </Router>
  </>
}

export default App
