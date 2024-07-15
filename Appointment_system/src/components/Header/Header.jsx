import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaTimes, FaBars, FaHandHoldingMedical } from 'react-icons/fa';
import { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../../context/UserContext';
import { axiosusers } from '../../API/api';
import Profile from '../../features/Profile';

const navLinks = [
  { path: "/", name: "Home" },
  { path: "/doctors", name: "Find a doctor" },
  { path: "/services", name: "Services" },
  { path: "/contact", name: "Contact" },
];

const Header = () => {
  const { user, setUser, setToken } = useContext(AppContext);
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [profile, setProfile] = useState(false);
  const headerRef = useRef(null);

  const handleMobileMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const handleScroll = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add('sticky-nav');
    } else {
      headerRef.current.classList.remove('sticky-nav');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className="header flex items-center" ref={headerRef}>
      <div className="md:container flex items-center justify-between gap-4 w-full mx-4">
        {/* Logo and Site Title */}
        <Link to="/" className="max-w-full flex items-center gap-1 cursor-pointer ">
          <FaHandHoldingMedical size={35} className="text-blue-600" />
          <h1 className="md:text-2xl text-4xl">MediCare</h1>
        </Link>
        


        {/* Desktop Navigation Links */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-11">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-bold text-xl leading-7"
                      : "text-gray-700 text-xl leading-7 hover:text-blue-500"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile and Desktop Avatar */}
        {user && (
          <div className="flex items-center gap-4" onClick={() => setProfile(!profile)}>
            <img src={user.photo} alt="user-profile" className="rounded-full h-12 w-12 md:h-16 md:w-16 object-cover cursor-pointer" />
            {profile && <Profile/>}
          </div>
        )}

        {/* Log Out/Log In Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center"
            onClick={user ? handleLogOut : () => navigate('/login')}
          >
            {user ? "Log Out" : "Log In"}
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div onClick={handleMobileMenu} className="block md:hidden px-8">
          {openMenu ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>


        {/* Mobile Menu */}
        {openMenu && (
          <div
            className="fixed inset-0 bg-white bg-opacity-95 z-10 flex flex-col items-center gap-4 py-6 left-24  transition-transform transform border-t-4 border-l-2 shadow-md"
            style={{ top: '70px' }}
          >
            <ul className="flex flex-col items-center justify-between gap-4 h-[20rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className="text-3xl text-gray-900 hover:text-blue-200"
                    onClick={handleMobileMenu}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <button
              className="bg-blue-600 text-[34px] text-white px-4 py-2 mt-16 rounded-md flex items-center"
              onClick={user ? handleLogOut : () => navigate('/login')}
            >
              {user ? "Log Out" : "Log In"}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;





