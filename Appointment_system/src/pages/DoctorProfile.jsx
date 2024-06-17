import { useParams } from "react-router-dom"

const DoctorProfile = () => {
  const {doctorId} = useParams();
 
  return (
    <div className="container h-screen bg-black">
      <h1 className="text-center text-3xl text-red-500"> Doctor Profile</h1>
      <p>This is the doctor profile page</p>

    </div>
  )
}

export default DoctorProfile