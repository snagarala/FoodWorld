import React from 'react';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Catering() {
  return (
    <div className='w-[100%]'>
      <Navbar/>
    <div className='w-[95%] mx-auto mt-[40px]'>
       <h1 className="text-green-900 font-bold font-['Fraunces'] text-center text-[90px]">
          Now Providing <br/> Catering Services</h1>
      <div className="bg-[#F3F6F4] p-4 rounded-3xl">
          <h2 className="text-green-900 font-thin text-[38px] mt-4 text-center italic font-sans">
              Please submit the form below,and we will get back 
              to you <br/> right away.
         </h2>
         <div>
            <form className='form grid grid-cols-2 gap-6 w-[650px] mt-9 ml-[40px] '>
                <div>
                <label className='text-green-900 font-normal p-2 mb-2'>First name</label><br/>
                <input type="text" className='rounded-lg bg-[#E1E7E3] mt-2 p-4 mr-5 w-full 
                 hover:border hover:border-green-900 outline-none'/>
                </div>

                <div className=''>
                <label className='text-green-900 font-normal p-2'>Last name</label><br/>
                <input type="text" className='rounded-lg bg-[#E1E7E3] p-4 mt-2 w-full 
                 hover:border hover:border-green-900 outline-none'/><br/>
                </div>

                <div className='col-span-2'>
                <label className='text-green-900 font-normal p-2'>Best Email*</label><br/>
                <input type="text" className='rounded-lg bg-[#E1E7E3] p-4 w-full hover:border
                 hover:border-green-900 outline-none'/><br/>
                </div>

                <div className='col-span-2'>
                <label className='text-green-900 font-normal p-2'>Best Phone</label><br/>
                <input type="text" className='rounded-lg bg-[#E1E7E3] p-4 w-full hover:border
                 hover:border-green-900 outline-none'/><br/>
                </div>

                <div className='col-span-2'>
                <label className='text-green-900 font-normal p-2'>Street Address for Event</label><br/>
                <input type="text" placeholder='Street Address' className='rounded-lg bg-[#E1E7E3] p-4
                 hover:border hover:border-green-900 outline-none w-full'/><br/>
                </div>
                
                <div className='col-span-2'>
                <label className='text-green-900 font-normal p-2'>Street Address Line 2</label><br/>
                <input type="text" placeholder='Street Address Line 2' className='rounded-lg bg-[#E1E7E3] 
                 hover:border hover:border-green-900 outline-none p-4 w-full'/><br/>
                </div>

                <div>
                <label className='text-green-900 font-normal p-2'>City</label><br/>
                <input type="text" placeholder='City' className='rounded-lg bg-[#E1E7E3] p-4 
                 hover:border hover:border-green-900 outline-none w-full'/><br/>
                </div>

                <div>
                <label className='text-green-900 font-normal p-2'>Region / State / Province</label><br/>
                <input type="text" placeholder='Region/State/Province' className='rounded-lg bg-[#E1E7E3]
                 hover:border hover:border-green-900 outline-none p-4 w-full'/><br/>
                </div>

                 <div className='col-span-2'>
                <label className='text-green-900 font-normal p-2'>Postal / Zip code</label><br/>
                <input type="text" placeholder='Postal / Zip code' className='rounded-lg bg-[#E1E7E3]
                  hover:border hover:border-green-900 outline-none p-4 '/><br/>
                </div>
                 
                 <div className='col-span-2'>
                <label className='text-green-900 font-normal p-2'>Please describe 
                  the event, number of people, any special requests</label><br/>
                <textarea type="text" rows="5" className='rounded-lg bg-[#E1E7E3] 
                 p-4 w-full hover:border hover:border-green-900 outline-none'/><br/>
                </div>
               
                <button className='bg-green-700 opacity-75 hover:bg-green-900 mb-[50px]
                rounded w-full text-center text-white p-2 ml-[150px]'>Submit</button> 
            </form>
         </div>
      </div>

      <div className='flex mt-[250px] justify-end pr-[40px] mb-[180px]'>
         <FaSquareInstagram  size={60}  className="text-pink-800 ml-[80px]"/>
         <FaFacebook size={60}  className="text-[#3D5999] ml-[20px]"/>
      </div>
      <Footer/>
    </div>
    </div>
  )
}
