import React, { useState, useEffect } from "react";
import { IoCloseOutline } from 'react-icons/io5';

export default function ItemsCard({ filteredSearchValues}) {
  
  const [isModelOpen, setIsModelOpen] = useState(false);

function modelClose(){
  setIsModelOpen(false);
}

  return (
    <div className="itemsCard">
      <div>
        {Object.entries(filteredSearchValues).map(
          ([category, items], index) => (
            <div key={category} className="mb-6">
              <h2 className="font-medium text-[28px] ml-2">{category}</h2>
              {items.map((item) => (
                <div key={item.id}>
                  <div className="flex rounded-2xl border border-zinc-300 mt-4">
                    <div className="p-4 flex-[7] flex-col mt-2">
                      <p className="font-semibold mb-4">{item.name}</p>
                      <p className="text-sm mb-4 font-thin">
                        {item.description}
                      </p>
                      <p className="">$ {Number(item.price).toFixed(2)} </p>
                    </div>
                    <div className="flex-[3] w-[200px] h-[150px]">
                      <img onClick={()=>{
                            setIsModelOpen(true);
                      }}
                        src={item.image}
                        className=" rounded-2xl object-cover w-full h-full cursor-pointer"
                        alt="foodImg"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        )}
      </div>
      {
        isModelOpen && (
          <div className=" fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-75  flex items-center justify-center ">
         <div className="relative w-[480px] h-[750px] bg-white  max-w-3xl rounded-2xl">
            {/* close button */}
            <button
              onClick={() => {
                modelClose();
              }}
              className=" absolute m-4 bg-white rounded-full top-0 right-0  border-none 
               cursor-pointer  "
            >
              <IoCloseOutline size={50} className=" text-gray-400" />
            </button>
            <div className="rounded-2xl">
                <img src="houseSalad.jpg"  alt="foodImg" className="w-full h-[350px] "/>
                <div className="p-5">
                   <p className="font-semibold mb-4 text-[28px] text-stone-800">Pizza</p>
                   <p className="text-sm mb-4 font-normal text-stone-800">
                       Choose an item from the  Choose an item from the.
                   </p>
                </div>
                 <div className="p-4 border-t border-stone-400">
                  <p className="mb-4 font-semibold text-stone-800">Special Instructions</p>
                  <textarea type="text" rows="4" className="border border-stone-600 w-full p-2 rounded-lg" />
                 </div>
                 <div>
                  <buttons>1+</buttons>
                  <div className="flex rounded-full bg-[#13AA6D] ">
                    <p className="">Add to orders</p>
                    <p className="">$</p>
                  </div>
                 </div>
            </div>
          </div>
          </div>
        )
      }
    </div>
  );
}
