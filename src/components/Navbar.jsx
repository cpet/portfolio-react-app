import React, { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin, } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Chris from '../assets/Chris_sm.jpg';
import {Link} from 'react-router-dom';

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[50px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Chris} alt="" style={{ width: '50px' }} />
      </div>

      {/* Menu */}

      <ul className='hidden md:flex font-semibold'>
        <li>
          {/* <a href="/portfwind/#/">Home</a> */}
          <Link to='/'>Home</Link>
        </li>
        <li>
          {/* <a href="/portfwind/#/about">About</a> */}
          <Link to='/about'>About</Link>
        </li>
        <li>
          {/* <a href="/portfwind/#/work">Work</a> */}
          <Link to='/work'>Work</Link>
        </li>
        <li>
          {/* <a href="/portfwind/#/contact">Contact</a> */}
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div className='md:hidden z-10' onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <ul>
          <li className='py-6 text-4xl'><a href="/portfwind/#/">Home</a></li>
          <li className='py-6 text-4xl'><a href="/portfwind/#/about">About</a></li>
          <li className='py-6 text-4xl'><a href="/portfwind/#/work">Work</a></li>
          <li className='py-6 text-4xl'><a href="/portfwind/#/contact">Contact</a></li>

        </ul>
      </div>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800'>
            <a className='flex justify-between items-center w-full text-gray-100'
              href="https://www.linkedin.com/in/cristian-petrescu-690bab18/" target={'_blank'} rel="noreferrer">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-800'>
            <a className='flex justify-between items-center w-full text-gray-100' href="#/contact">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-800'>
            <a className='flex justify-between items-center w-full text-gray-100'
              href="https://docs.google.com/document/d/1WTchuwHF63-Vqmx3hetkYZjSIOYv8gYJYjQ59Mpmgfs/edit?usp=sharing" target={'_blank'} rel="noreferrer">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>

        </ul>
      </div>

    </div>
  )
}

export default Navbar