import { useForm } from 'react-hook-form';
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react';

const Login = () => {
    const [user, setUser] = useState('');
    const[token, setToken] = useState('')

    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await axios.post('http://localhost:8080/api/user/login', data)
    //console.log(data)
    console.log(response)
    console.log(response.data.accessToken)
    console.log(response.data.userData)
    navigate('/')
  };
 
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row gap-20">
        {/* Sign up icons */}
        <div className=" w-full md:w-1/2 p-6">
          <h1 className="heading">Already Have an Account?</h1>
          <p className="text_para">Log in as a User</p>
          <p>Dont have an account? <Link to="/signup" className='text-blue-600'>Sign up </Link> instead</p>
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