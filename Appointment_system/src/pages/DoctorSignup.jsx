import { useForm } from 'react-hook-form';
import {axiosdoctor} from '../API/api'
import {Link, useNavigate} from 'react-router-dom'

const Doctorsignup = () => {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await axiosdoctor.post('/register', data)
    console.log(data)
    console.log(response)
    navigate('/doctor/login')
  };
  
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row gap-20">
        {/* Sign up icons */}
        <div className=" w-full md:w-1/2 p-6">
          <h1 className="heading">For Healthcare-practioners</h1>
          <p className="text_para">Sign Up as a Doctor</p>
          <p>Have an account? <Link to="/doctor/login" className='text-blue-600'>Log in </Link> instead</p>
        </div>

        <div className="w-full md:w-1/2 p-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="mb-2">FirstName</label>
              <input
                type="text"
                id="name"
                className="border-2 p-2 outline-none"
                placeholder="Enter name..."
                {...register('name', { required: 'This field is required' })}
              />
              {errors.name && <span className="text-red-600">{errors.name.message}</span>}
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="border-2 p-2 outline-none"
                placeholder="Enter email..."
                {...register('email', { required: 'This field is required' })}
              />
              {errors.email && <span className="text-red-600">{errors.email.message}</span>}
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="password" className="mb-2">Password</label>
              <input
                type="password"
                id="password"
                className="border-2 p-2 outline-none"
                placeholder="Enter password..."
                {...register('password', { required: 'This field is required' })}
              />
              {errors.password && <span className="text-red-600">{errors.password.message}</span>}
            </div>

            <button type="submit" className="btn bg-blue-600 text-white p-2 rounded">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Doctorsignup;