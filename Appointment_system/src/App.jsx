import { Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./pages/Home"
import './App.css'
import DoctorList from "./pages/Doctors"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Doctorsignup from "./pages/DoctorSignup"
import Doctorlogin from "./pages/DoctorLogin"
import {UserProvider} from './context/UserContext'
import PrivateRoutes from "./utils/PrivateRoutes"
import DoctorProfile from "./pages/BookingPage"





function App() {

 


  return (
    
    <UserProvider>
    <Header/>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/doctors" element={<DoctorList/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      
      <Route path="/doctor/signup" element={<Doctorsignup/>}/>
      <Route path="/doctor/login" element={<Doctorlogin/>}/>


      <Route path="/doctors/:doctorId" element={<DoctorProfile/>}/>
      
      <Route element={<PrivateRoutes/>}>
        
      </Route>

      
    </Routes>
    </UserProvider>
    
  )
}

export default App
