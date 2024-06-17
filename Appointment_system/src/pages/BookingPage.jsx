import { useParams } from "react-router-dom"
import axios from 'axios';
import { useEffect, useState } from "react";

const BookAppointment = () => {
  const {doctorId} = useParams();
  const [doctor, setDoctor] = useState(null)

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/doctor/profile/${doctorId}`);
       console.log(response)
       setDoctor(response.data)
      } catch (error) {
        console.log("error fetching doctor: ", error)
      }
        
    }
    fetchDoctor()
    }, [doctorId])
 
 
  return (
    <div className="container h-screen bg-black">
      <h1 className="text-center text-3xl text-red-500"> Doctor Profile</h1>
      <p>This is the doctor profile page</p>
      {doctor && (
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl">{doctor.name}</h2>
          <p>Specialization: {doctor.specialization}</p>
          <p>Bio: {doctor.bio} years</p>
          <p>Rating: {doctor.totalRating}</p>
          </div> )}
    </div>
  )
}

export default BookAppointment