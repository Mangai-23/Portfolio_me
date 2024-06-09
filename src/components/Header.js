import React from 'react';
import logo from '../assets/logo(1).png'
import { Link } from 'react-scroll';
const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href="/" className='flex'>
          <img src={logo} alt="" className='w-20 h-25'/>
          <p className='pt-6 font-bold text-[32px]'>Its Me !</p>
        </a>
        {/* button */}
        <button className='btn btn-sm'><Link to='contact'>Contact Me</Link></button>
      </div>
    </div>
  </header>;
};

export default Header;
