import axios from 'axios'
import {useQuery} from '@tanstack/react-query'

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
    
    const {data, error, isPending} = useQuery({
        queryKey:['doctors'], 
        queryFn: getDoctors
    })

    if(isPending) return <h1>Loading....</h1>
    if(error) return <h1>An error occured when fetching the data: {error.message}</h1>
    console.log(data)
    const doctor = data?.doctors[0]; 
    console.log(doctor)
  return (
    <div>
    {doctor && (
        <div>
            <h1>{doctor.name}</h1>
            <h2>{doctor.specialization}</h2>
            <p>{doctor.bio}</p>
            <p>{doctor.timeSlots}</p>
        </div>
    )}
</div>
    
  )
}

export default Doctors;
