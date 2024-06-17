import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import { BsArrowRight } from 'react-icons/bs';
const DoctorList= () => {
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
        queryFn: getDoctors
    });

    if (isLoading) return <h1>Loading....</h1>;
    if (error) return <h1>An error occurred when fetching the data: {error.message}</h1>;

    console.log(data); // Log the entire response to debug
    const doctors = data?.doctors || []; // Safely access doctors array

    console.log("this is the list of doctors: ", doctors);

    const handleDoctorClick = (doctorId) => {
        // Navigate to the doctor's booking page
        navigate(`/doctors/${doctorId}`);
    };

    return (
        <div className='container'>
            {doctors.length > 0 ? (
                doctors.map((doctor, index) => (
                    <div key={index}>
                        <h1>{doctor.name} - {doctor.specialization}  </h1>
                        <h2>Bio</h2>
                        <p>{doctor.bio}</p> 
                        <p>{doctor._id}</p>
                        <button className='w-[40px] h-[40px] rounded-full border 
                        border-solid border-gray-900 mt-[30px] mx-auto group hover:bg-blue-600"' onClick={() => handleDoctorClick(doctor._id)}>
                        <BsArrowRight className="group-hover:text-blue-500 h-5 w-6" />
                        </button>
                    </div>
                ))
            ) : (
                <p>No doctors found</p>
            )}
        </div>
    );
};

export default DoctorList;

