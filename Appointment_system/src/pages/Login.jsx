import { useForm } from 'react-hook-form';
import { axiosusers } from '../API/api';
import {Link, useNavigate} from 'react-router-dom'
import { useContext } from 'react';
import { AppContext } from '../context/UserContext';

const Login = () => {
    const {setToken, setUser} = useContext(AppContext)

    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }, reset
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axiosusers.post('/login', data)
    //console.log(data)
    console.log(response);
    //console.log(response.data.accessToken);
    //console.log(response.data.userData);
    //console.log(response.data.userData.name);
    setToken(response.data.accessToken);
    setUser(response.data.userData);
    navigate('/', {replace:true});

    
    reset();
    } catch (error) {
      console.error("Login failed", error);
    }
    
  };
 
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row gap-20">
        {/* Sign up icons */}
        <div className=" w-full md:w-1/2 p-6">
          <h1 className="heading">Patients Log In</h1>
          <p className='text_para'>Dont have an account? <Link to="/signup" className='text-blue-600'>Sign up </Link> instead</p>
          <p className='mt-10 text-md'>Are you a doctor? Log in <Link to="/doctor/login" className='text-blue-600'>here</Link></p>
        </div>

        <div className="w-full md:w-1/2 p-6">
          <form onSubmit={handleSubmit(onSubmit)}>
        
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

            <button type="submit" className="btn bg-blue-600 text-white p-2 rounded">Log in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;