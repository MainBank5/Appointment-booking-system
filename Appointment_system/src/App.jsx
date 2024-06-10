import { Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./pages/Home"
import './App.css'
import Doctors from "./pages/Doctors"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Doctorsignup from "./pages/DoctorSignup"
import Doctorlogin from "./pages/DoctorLogin"
import { createContext , useState} from "react"
export const AppContext = createContext()



function App() {

  const [profile, setProfile] = useState('')
  const [token, setToken] = useState('')


  return (
    <>
    <AppContext.Provider value={{profile, setProfile, setToken, token}}> 
    <Header/>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/doctors" element={<Doctors/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>

      <Route path="/doctor/signup" element={<Doctorsignup/>}/>
      <Route path="/doctor/login" element={<Doctorlogin/>}/>
    </Routes>
    </AppContext.Provider>
    </>
  )
}

export default App
