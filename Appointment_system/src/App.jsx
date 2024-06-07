import { Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./pages/Home"
import './App.css'

import Doctors from "./pages/Doctors"
import Signup from "./pages/Signup"
import Login from "./pages/Login"

function App() {


  return (
    <>
    <Header/>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/doctors" element={<Doctors/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App
