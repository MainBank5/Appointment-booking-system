import { Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./pages/Home"
import './App.css'
import Footer from "./components/Footer/Footer"
import Doctors from "./pages/Doctors"

function App() {


  return (
    <>
    <Header/>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/doctors" element={<Doctors/>}/>
    </Routes>

    <Footer/>
    </>
  )
}

export default App
