import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
//import { useNavigate } from "react-router-dom";

export default function AboutPage() {

   
  return (
    <div className='py-5'>
       <div className=' h-[550px] flex gap-8 mx-10  '>
        <div className='flex-1  '>
            <img src="restaurant.png" alt="restaurant pic" 
               className='h-full  '/>
        </div>
        <div className='flex-1 flex-col gap-2 justify-center items-center text-center'>
            <h1 className="text-green-900 text-6xl font-semibold font-['prata'] mt-9">
                A Dinning Experience in a Family Setting
            </h1>
            <p className='text-[#624D16] text-[20px] font-medium font-serif mt-8 '>
                We are so happy to announce the opening of our 
                new Mediterranean restaurant.At Gardenia, we strive 
                to provide our customers with happiness 
                and satisfaction by continuously 
                serving them authentic and yummy dishes to eat.<br/>
            </p> 
            <p className='text-[#624D16] text-[20px] font-medium font-serif mt-[25px] '>
                Come join us and be part of our family!</p>   
        </div>
      </div>
      <div className='mt-8 flex items-center justify-center'>
        <img src="chef.png" alt="chef image" className='w-[800px] h-[400px] mb-[20px]'/>
      </div>

      <div className='flex mt-[250px] justify-end pr-[40px]'>
      <FaInstagramSquare size={60}  className="text-pink-800 ml-[80px]"/>
      <FaFacebook size={60}  className="text-[#3D5999] ml-[20px]"/>
      </div>
    </div>
  )
}
