import React from 'react';


//681C03-input border
export default function Footer() {
  return (
    <div className='footer  w-[95%]  mx-auto bg-[#F6F6EE]  p-[40px]'>
        <h1 className="text-green-900 font-bold text-start text-[40px] font-['cormorant_garamond'] mb-2">
            Join Our<br/> Mailing List</h1>
     <form className='flex flex-col '>
        <label className='text-start font-extralight text-[20px] mb-1 text-green-900'>Email
        <span className='text-green-900'>*</span></label>
        <input type="email" placeholder='Email' 
          className='p-4 focus:outline-none border-2 border-[#681C03] mb-[40px] bg-[#F6F6EE] 
           font-extralight text-green-900'/>

        <label className='text-start font-extralight text-[20px] mb-1 text-green-900'>First name</label>
        <input type="text" placeholder='First name'
          className='p-4 focus:outline-none mb-[40px] border-b border-gray-700 hover:border-blue-800 
          hover:border-b-2 outline-none bg-[#F6F6EE] font-extralight text-green-900'/>

        <label className='text-start font-extralight text-[20px] mb-1 text-green-900'>Last name</label>
        <input type="text" placeholder='Last name'
        className='p-4 focus:outline-none mb-[40px] bg-[#F6F6EE] border-b border-gray-700
         hover:border-blue-800 hover:border-b-2 outline-none font-extralight text-green-900'/>

        <label className='text-start font-extralight text-[20px] mb-1 text-green-900'>Birthday</label>
        <input type="date" placeholder='Birthday'
        className='p-4 focus:outline-none mb-[40px] bg-[#F6F6EE] border-b border-gray-700 
        hover:border-blue-800 hover:border-b-2 outline-none font-extralight text-green-900'/>

        <label className='text-start font-extralight text-[20px] mb-1 text-green-900'>Phone</label>
        <input type="numbers" placeholder='Phone'
        className='p-4 focus:outline-none mb-[40px] bg-[#F6F6EE] border-b border-gray-700 
        hover:border-blue-800 hover:border-b-2 outline-none font-extralight text-green-900'/>

       <button className='bg-green-900 text-white py-3 text-[20px] border-2  border-transparent
        rounded cursor-pointer w-[150px] hover:bg-white hover:border-blue-600
         hover:text-blue-600 transition-all duration-300'>
            Join</button>
     </form>
    </div>
  )
}