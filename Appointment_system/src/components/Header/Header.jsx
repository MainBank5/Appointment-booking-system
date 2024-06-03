import { Link, NavLink } from 'react-router-dom';
import {FaTimes, FaBars, FaPlus} from 'react-icons/fa'
import { useState } from 'react';

const navLinks = [
  {
    path:"/",
    name:"Home"
  },
  {
    path:"/doctors",
    name:"Find a doctor"
  },
  {
    path:"/services",
    name:"Services"
  },
  {
    path:"/contact",
    name:"Contact"
  }
]

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMobileMenu = () => {
    setOpenMenu(prev => !prev)
  }

  return (
    <nav className="header flex items-center">
      <div className='container'>

          {/*logo */}
        <div className='max-w-full flex items-center gap-1 cursor-pointer'>
          <span><FaPlus size={30} className='text-blue-600'/></span>
          <h1 className='text-2xl'> MediCare</h1>
        </div>

      </div>
    </nav>
  );
};

export default Header;
