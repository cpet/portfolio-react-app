import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-slate-100'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#A33C8A] font-bold'>Hi, my name is:</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#3C51A3]'>Cristian Petrescu</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#3C51A3]'>Full-Stack Developer</h2>
        <p className='text-[#A33C8A] py-4 max-w-[1200px] font-bold'>I have 10+ years of experience building games and responsive websites.<br />
          This portfolio is built from ground up using React and Tailwind.
        </p>
        <div>
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
      </div>
    </div >
  )
}

export default Home