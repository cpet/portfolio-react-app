import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen text-[#3C51A3] text-center font-bold bg-slate-100 flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/402fb185-176f-4870-aec8-6afd0a38fc67" className='flex flex-col max-w-[800px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#A33C8A] text-[#3C51A3] mb-8'>Contact</p>
                <p className='pt-8'>Submit the form below or shoot me an email</p>
                <p classNme='my-1'>chris.petrescu99@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-[#3C51A3] group border-2 border-[#3C51A3] px-6 py-3 my-2 rounded-lg hover:text-slate-100
          hover:bg-[#3C51A3] animate-none duration-100 w-[240px] text-center self-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact