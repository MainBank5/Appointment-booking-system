import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const Doctors = () => {
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
    
    return (
        <div>
            {doctors.length > 0 ? (
                doctors.map((doctor, index) => (
                    <div key={index}>
                        <h1>{doctor.name}</h1>
                        <h2>{doctor.specialization}</h2>
                        <p>{doctor.bio}</p>
                        <p>{doctor.experience}</p>
                    </div>
                ))
            ) : (
                <p>No doctors found</p>
            )}
        </div>
    );
};

export default Doctors;

