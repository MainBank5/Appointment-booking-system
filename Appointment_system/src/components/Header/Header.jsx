import { Link, NavLink } from 'react-router-dom';
import {FaTimes, FaBars, FaHandHoldingMedical} from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react';

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
  const headerRef = useRef(null);

  const handleScroll = () => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky-nav')
      } else {
        headerRef.current.classList.remove('sticky-nav')
      }
    })
  }
  useEffect ( () => {
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <nav className="header flex items-center" ref={headerRef}>
      <div className='container flex items-center justify-between'>

          {/*logo */}
        <div className='max-w-full flex items-center gap-1 cursor-pointer'>
          <span><FaHandHoldingMedical size={35} className='text-blue-600'/></span>
          <h1 className='md:text-2xl text-4xl'> MediCare</h1>
        </div>

        <div className="hidden md:block">
          <ul className='flex items-center gap-11'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink to={link.path} 
                className={({isActive}) => isActive ? "text-blue-600 font-bold text-xl leading-7" : "text-gray-700 text-xl leading-7 hover:text-blue-500"}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className='hidden md:flex items-center gap-4'>
          <div className='hidden'>
             <Link to="/">
              <figure className='w-[50px] h-[50px] rounded-full bg-blue-600'> 
                 <img src="" alt="user" className='w-full rounded-full'/>
              </figure>
             </Link>
          </div>

          <div>
           <Link to="/login">
            <button className='bg-blue-600 text-white px-4 py-2 rounded-md flex items-center'>Log In</button>
           </Link>
          </div>

        </div>

        <div onClick={handleMobileMenu} className='block md:hidden'>
          {openMenu ? <FaTimes size={25}/> : <FaBars size={25}/>}
        </div>

        
        {/* Mobile Menu */}
        {openMenu && (
          <div
            className="fixed inset-0 bg-blue-500 bg-opacity-95 z-10 flex flex-col items-center gap-4 py-6 transition-transform transform"
            style={{ top: '70px ' }}
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
            <Link to="/login">
              <button className="bg-blue-600 text-[34px] text-white px-4 py-2 rounded-md flex items-center">
                Log In
              </button>
            </Link>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Header;
