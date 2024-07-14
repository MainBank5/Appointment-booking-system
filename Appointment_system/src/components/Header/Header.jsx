import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaTimes, FaBars, FaHandHoldingMedical } from 'react-icons/fa';
import { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../../context/UserContext';
import { axiosusers } from '../../API/api';

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
    console.log('handleLogOut function called');
    try {
      const response = await axiosusers.post('/logout');
      console.log('user logged out', response);
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
    console.log('handleLogOut function end');
  };

  return (
    <nav className="header flex items-center" ref={headerRef}>
      <div className="container flex items-center justify-between gap-4">
        <Link to="/" className="max-w-full flex items-center gap-1 cursor-pointer">
          <FaHandHoldingMedical size={35} className="text-blue-600" />
          <h1 className="md:text-2xl text-4xl">MediCare</h1>
        </Link>

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

        <div className="hidden md:flex items-center gap-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center"
            onClick={user ? handleLogOut : () => navigate('/login')}
          >
            {user ? "Log Out" : "Log In"}
          </button>
        </div>

        <div onClick={handleMobileMenu} className="block md:hidden px-8">
          {openMenu ? <FaTimes size={25} /> : <FaBars size={25} />}
          <div></div>
        </div>

        {openMenu && (
          <div
            className="fixed inset-0 bg-blue-500 bg-opacity-95 z-10 flex flex-col items-center gap-4 py-6 transition-transform transform"
            style={{ top: '70px' }}
          >
            <ul className="flex flex-col items-center gap-4">
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
              className="bg-blue-600 text-[34px] text-white px-4 py-2 rounded-md flex items-center"
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


