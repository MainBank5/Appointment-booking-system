import {Link, useNavigate} from 'react-router-dom';
import {axiosusers} from '../API/api';
import {AppContext} from '../context/UserContext';
import {useContext} from 'react';

const Profile = () => {
    const {setToken, setUser} = useContext(AppContext);
    const navigate = useNavigate();
    const handleLogOut = async () => {
        try {
          const response = await axiosusers.post('/logout');
          if (response.status === 204) {
            setUser(null);
            setToken(null);
            navigate('/');
          } else {
            console.log('Error logging out');
          }
        } catch (error) {
          console.log('Error logging out', error);
        }
      };
  return (
    <div className="relative bg-gray-300 max-w-80 h-32 top-24 right-32">
        <ul className="flex flex-col justify-between items-center text-center">
            <li className="text_para"> <Link>Profile</Link></li>
            <li className="text_para" onClick={handleLogOut}>Log Out</li>
        </ul>
    </div>
  )
}

export default Profile;