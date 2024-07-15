import { useParams } from "react-router-dom";
import axios from 'axios';
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/UserContext";
import doctorimg from '../assets/images/feature-img.png';
import { toast } from "react-toastify";


const BookAppointment = () => {
  const { doctorId } = useParams();
  const [doctor, setDoctor] = useState(null);
  const { token, user, appointmentDetails , setAppointmentDetails} = useContext(AppContext);
  const [appointment, setAppointment] = useState({ appointmentDate: '' });


  useEffect(() => {
    let isMounted = true;
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/doctor/profile/${doctorId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (isMounted) {
          console.log(response)
          setDoctor(response.data);
        }
        
      } catch (error) {
        console.log("error fetching doctor: ", error);
      }
    };
    fetchDoctor();
    return () => {
      isMounted = false; // Cleanup function to update mount status
    };
  }, [doctorId, token]);

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        appointmentDate: new Date(appointment.appointmentDate),
        user:user._id
      };
      console.log('Form Data:', formData);
      const response = await axios.post(`http://localhost:8080/api/user/appointment/${doctorId}`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
          }
      });

      console.log(response);
      console.log(response.data.newAppointment);
      setAppointmentDetails(response.data.newAppointment);
      console.log(appointmentDetails);
      toast.success('Appointment booked successfully!');
    } catch(error) {
      console.log("error booking appointment: ", error);
    }
  }

 

  return (
    <div className="flex flex-col justify-center">

      <div className="container py-10">
        {doctor ? (
        <div className="flex flex-col md:flex-row justify-around ">

          {/*doctors' details */}
        <div className="flex flex-col">

          <div  className="flex pb-4">
            <img src={doctorimg} alt="doctorimg" className="w-44 h-44 rounded-lg" />

            <div className="flex flex-col px-6 pt-4">
              <p className="bg-teal-500/70 opacity-80 rounded-md p-2 cursor-pointer">{doctor.specialization}</p>
              <h3 className="text-xl">{doctor.name}</h3>
              <h3 className="">{doctor.rating}</h3>
            </div> 

           
          </div>

           <div className="flex justify-between pl-4  border-b-2">
               <h3 >About</h3>
               <h3>Feedback</h3>
            </div>
        </div>
         
         {/*appointment schedule */}
        <div className="shadow-2xl w-72 rounded-xl">
          <div className="flex flex-col items-center py-4">
            <h2 className="text-2xl">Ticket Price: <span>{doctor.ticketPrice}</span></h2>
            <h2 className="text-xl py-4 underline">Available Slots:</h2>
            {doctor.timeSlots}
            <div>
              <form className="flex flex-col py-8" onSubmit={handleBooking} >
                <label htmlFor="date" className="text-xl underline">Pick a date:</label>
                <input type="date" id="date" required onChange={(e) =>  setAppointment({ ...appointment, appointmentDate: e.target.value })} />
                <button className="btn" type="submit">Book Appointment</button>
              </form>
            </div>
          </div>
        </div>

        </div>
       ) : (
        <p className="text-center text-red-500">Loading doctor profile...</p>
       )}
      </div>
     
    </div>
  );
};

export default BookAppointment;





