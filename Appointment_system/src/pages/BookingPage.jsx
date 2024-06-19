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
    <div className=" px-4 max-w-7xl py-8">
      {doctor ? (
        <>
          <h1 className="container text-center text-3xl text-red-500 mb-8">{doctor.name}</h1>
          <div className="flex flex-col lg:flex-row bg-white shadow-md rounded-lg p-6">
            <div className="lg:w-2/3">
              <div className="flex flex-col lg:flex-row items-center lg:items-start mb-6">
                <img
                  src="https://via.placeholder.com/150"
                  alt={doctor.name}
                  className="rounded-full w-40 h-40 object-cover mb-4 lg:mb-0 lg:mr-4"
                />
                <div className="flex flex-col items-center lg:items-start">
                  <h2 className="text-2xl font-bold mb-2">{doctor.name}</h2>
                  <p className="text-gray-600 mb-2">{doctor.specialization}</p>
                  <p className="text-yellow-500 mb-4">Rating: {doctor.totalRating}</p>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">About the Doctor</h3>
                <p className="text-gray-700">{doctor.bio}</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Qualifications</h3>
                <ul className="text-gray-700 list-disc list-inside">
                  {doctor.qualifications.map((qualification, index) => (
                    <li key={index}>{qualification}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Experience</h3>
                <ul className="text-gray-700 list-disc list-inside">
                  {doctor.experience.map((experience, index) => (
                    <li key={index}>{experience}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Reviews</h3>
                <div className="space-y-4 overflow-auto max-h-64">
                  {doctor.reviews && doctor.reviews.map((review, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-gray-700"><strong>User ID: {review.user}</strong></p>
                      <p className="text-gray-700">{review.reviewText}</p>
                      <p className="text-yellow-500">Rating: {review.rating}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Add a review"
                    className="border p-2 rounded w-full"
                  />
                  <button className="mt-2 bg-blue-600 text-white py-2 px-4 rounded">Submit Review</button>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 bg-gray-100 p-4 rounded-lg lg:ml-6 mt-6 lg:mt-0">
              <h3 className="text-xl font-semibold mb-4">Book Appointment</h3>
              <div className="mb-4">
                <p className="text-gray-700">Ticket Price: ${doctor.ticketPrice}</p>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-medium mb-2">Available Time Slots:</h4>
                <ul className="text-gray-700 list-disc list-inside">
                  {doctor.timeSlots.map((slot, index) => (
                    <li key={index}>{slot}</li>
                  ))}
                </ul>
              </div>
              <div>
                <button className="mt-2 bg-blue-600 text-white py-2 px-4 rounded w-full">Book Appointment</button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="text-center text-red-500">Loading doctor profile...</p>
      )}
    </div>
  );
};

export default BookAppointment;





