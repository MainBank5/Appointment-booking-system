import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { storage } from '../firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

const Signup = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsUploading(true);
    try {
      // Upload the image to Firebase storage
      const imageFile = data.photo[0];
      const imageRef = ref(storage, `images/${imageFile.name + v4()}`);
      const uploadTask = uploadBytesResumable(imageRef, imageFile);

      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.error('Upload failed', error);
          setIsUploading(false);
        },
        async () => {
          const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
          const formData = {
            name: data.name,
            email: data.email,
            password: data.password,
            photo: imageUrl
          };

          const response = await axios.post('http://localhost:8080/api/user/register', formData, {
            headers: {
              'Content-Type': 'application/json',
            },
          });

          console.log(response.data);
          console.log(data);
          setIsUploading(false);
          navigate('/login');
        }
      );
    } catch (error) {
      console.error('There was an error uploading the data!', error);
      setIsUploading(false);
    }
  };

  return (
    <div className="container">
      <div className="flex flex-col md:flex-row gap-20">
        <div className="w-full md:w-1/2 p-6">
          <h1 className="heading">Want to book an Appointment?</h1>
          <p className="text_para">Sign Up as a patient.</p>
          <p>Have an account? <Link to="/login" className="text-blue-600">Log in</Link> instead</p>
        </div>

        <div className="w-full md:w-1/2 p-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="mb-2">First Name</label>
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

            <div className="flex flex-col mb-4">
              <label htmlFor="photo" className="mb-2">Profile Image</label>
              <input
                type="file"
                id="photo"
                {...register('photo', { required: 'This field is required' })}
              />
              {errors.photo && <span className="text-red-600">{errors.photo.message}</span>}
            </div>

            {isUploading && <div className="mb-4">Upload Progress: {uploadProgress.toFixed(2)}%</div>}

            <button type="submit" disabled={isUploading} className="btn bg-blue-600 text-white p-2 rounded">
              {isUploading ? 'Uploading...' : 'Sign Up'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;


