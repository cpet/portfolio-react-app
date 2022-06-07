import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { FaLinkedin, } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-slate-100'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-center'>
        <p className='text-[#A33C8A] font-bold'>Hi, my name is:</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#3C51A3]'>Cristian Petrescu</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#3C51A3]'>Software Developer</h2>
        <p className='text-[#A33C8A] py-4 max-w-[1200px] font-bold'>I have 10+ years of experience building games and responsive websites.<br />
          This portfolio is built from ground up using React and Tailwind.
        </p>
        <div className='m-auto my-2'>
          <a href="/work">
            <button className='text-[#3C51A3] group border-2 border-[#3C51A3] px-6 py-3 my-2 flex items-center rounded-lg hover:text-slate-100
          hover:bg-[#3C51A3] animate-none duration-100'>
              View Work
              <span className=''>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </a>
        </div>
        {/* Socials placed on bottom of the page */}
        <div className='lg:hidden flex items-center justify-between max-w-[1200px] mx-auto my-4 py-4 gap-5'>
          <a href='https://www.linkedin.com/in/cristian-petrescu-690bab18/' target='_blank'>
            <div className='rounded-full p-5 cursor-pointer hover:scale-110 ease-in duration-100 
            bg-blue-800 text-gray-100'>
              <FaLinkedin size={30} />
            </div>
          </a>

          <a href='/contact'>
            <div className='rounded-full p-5 cursor-pointer hover:scale-110 ease-in duration-100
            bg-red-800 text-gray-100'>
              <HiOutlineMail size={30} />
            </div>
          </a>

          <a href='https://docs.google.com/document/d/1WTchuwHF63-Vqmx3hetkYZjSIOYv8gYJYjQ59Mpmgfs/edit?usp=sharing' target={'_blank'}>
            <div className='rounded-full p-5 cursor-pointer hover:scale-110 ease-in duration-100
            bg-slate-800 text-gray-100'>
              <BsFillPersonLinesFill size={30} />
            </div>
          </a>
        </div>
      </div>
    </div >
  )
}

export default Home