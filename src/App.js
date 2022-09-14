import React from "react"
import "./App.css"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import { BrowserRouter , Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
