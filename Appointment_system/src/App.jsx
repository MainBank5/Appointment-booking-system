import { Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./pages/Home"
import './App.css'
import Doctors from "./pages/Doctors"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Doctorsignup from "./pages/DoctorSignup"
import Doctorlogin from "./pages/DoctorLogin"
import {UserProvider} from './context/UserContext'
import PrivateRoutes from "./utils/PrivateRoutes"



function App() {

 


  return (
    
    <UserProvider>
    <Header/>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/doctors" element={<Doctors/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
       
      <Route path="/doctor/signup" element={<Doctorsignup/>}/>
      <Route path="/doctor/login" element={<Doctorlogin/>}/>

      <Route element={<PrivateRoutes/>}>
        
      </Route>

    </Routes>
    </UserProvider>
    
  )
}

export default App
