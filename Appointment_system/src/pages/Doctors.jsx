import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { BsArrowRight } from 'react-icons/bs';


const DoctorList = () => {
  const navigate = useNavigate();
 

  const getDoctors = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/doctors');
      return res.data;
    } catch (error) {
      console.error('Error fetching doctors:', error);
      throw error;
    }
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ['doctors'],
    queryFn: getDoctors,
  });

  if (isLoading) return <h1>Loading....</h1>;
  if (error)
    return <h1>An error occurred when fetching the data: {error.message}</h1>;

  const doctors = data?.doctors || [];

  const handleDoctorClick = (doctorId) => {
    navigate(`/doctors/${doctorId}`);
  };

  return (
    <div className=" mx-auto px-4 py-8">
      
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {doctors.length > 0 ? (
          doctors.map((doctor, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="profile"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h1 className="text-xl font-semibold mb-2">{doctor.name}</h1>
                <h2 className="text-gray-600 mb-2">{doctor.specialization}</h2>
                <p className="text-yellow-500 mb-4">Rating: {doctor.totalRating}</p>
                <p className="text-gray-700 mb-4">{doctor.bio}</p>
                <button
                  className="w-10 h-10 rounded-full border border-solid border-gray-900 flex items-center justify-center hover:bg-blue-600 transition-colors group"
                  onClick={() => handleDoctorClick(doctor._id)}
                >
                  <BsArrowRight className="text-gray-900 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No doctors found</p>
        )}
      </div>
    </div>
  );
};

export default DoctorList;


