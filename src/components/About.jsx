import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-slate-100 text-[#3C51A3] font-bold'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#A33C8A]'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'>
          <div className='sm:text-right text-4xl font-bold pl-4'>
            <p>Hi, I'm Chris!<br />Nice to meet you!<br />Please take a look around.</p>
          </div>
          <div className='px-4 text-[#A33C8A]'>
            <p>
              Game development seem to be my goto in between projects. I love finding and applying optimization techniques
              while pushing device limits.
            </p>
            <br/>
            <p>
              Excited about interacting with and learning server side architecture and databases.
              Creating rich interactive experiences for the web and mobile is my MOJO.
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full px-4 text-[#A33C8A]'>
        <br/>
          <p>
            Lately my mind wonders about being part of the team behind a Browser MMO game where players increase their characters' powers
            via daily log-ins and pvp activities. The best Browser MMO out there without the need for frowned upon 'features' s.a. auto-play and
            huge paywalls, though making the VIP experience worth-while.
          </p>
        </div>
      </div>
    </div>

  )
}

export default About