import { useParams } from "react-router-dom";
import axios from 'axios';
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/UserContext";

const BookAppointment = () => {
  const { doctorId } = useParams();
  const [doctor, setDoctor] = useState(null);
  const { token } = useContext(AppContext);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/doctor/profile/${doctorId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log(response);
        setDoctor(response.data);
      } catch (error) {
        console.log("error fetching doctor: ", error);
      }
    };
    fetchDoctor();
  }, [doctorId, token]);

  return (
    <div className="container">

      <div className="flex justify-between">

        <div className="flex flex-col justify-between">

          <div>{/*image, name ratings, specilization */}</div>
          
          <div>{/*About the doc:bio, qualification, experince, slider that navigates to a list of a doctors review and input to add more review */}</div>

        </div>
       
      </div>
    
     <h1 className="text-center text-3xl text-red-500">Doctor Profile</h1>
      <p>This is the doctor profile page</p>
      {doctor && (
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl">{doctor.name}</h2>
          <p>Specialization: {doctor.specialization}</p>
          <p>Bio: {doctor.bio} years</p> 
          <p>Rating: {doctor.totalRating}</p>
        </div>
      )}
     
      
    </div>
  );
};

export default BookAppointment;
