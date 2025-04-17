import React, {useState} from 'react';
import { PiCalendarBlankLight } from "react-icons/pi";

export default function ModelAfterBussHours({setShowAfterHours}) {

  return (
    <div>
       <section
          className="fixed top-0 left-0 w-full h-full z-50 bg-black 
           bg-opacity-50  flex items-center justify-center "
        >
          <div className="relative h-[400px] w-[500px] bg-white rounded-2xl overflow-auto px-[45px]">
             <h1 className="font-bold text-[20px] text-center mt-[40px]">
                 Next available Pickup time
             </h1>
             <div className='flex justify-center items-center gap-3 mt-5'>
                 <PiCalendarBlankLight  size={30} className=''/>
                 <p className='font-semibold text-sm '>
                    Opens Tomorrow at 12:15 PM</p>
             </div>
             <p className='text-center mt-5 font-normal text-sm'>
                Click 'start order' to accept the order time suggested <br/>
                above,or select another time.
             </p>
             
             <button onClick={()=>
                   setShowAfterHours(false)
             }
              className='rounded-full bg-[#13AA6D] hover:bg-green-700 text-white 
               cursor-pointer w-full py-3 mt-5 font-medium'>
                Start Order</button>
             <button 
              className='border py-3 w-full mt-5 rounded-full cursor-pointer hover:border-stone-5 00'>
                Select Another Time
             </button>
          </div>
        </section>
    </div>
  )
}
