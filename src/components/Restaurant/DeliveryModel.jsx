import React, { useState, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import DateTimeDropdowns from "./DateTimeDropdowns";
import { SlLocationPin } from "react-icons/sl";

export default function DeliveryModel({
  setIsDeliveryModel,
  setIsToggled,
  setMode,
}) {
  return (
    <div>
      <section
        className="fixed top-0 left-0 w-full h-full z-50 bg-black 
           bg-opacity-50  flex items-center justify-center"
      >
        <div className="relative h-[400px] w-[500px] bg-white rounded-2xl overflow-auto ">
          <header className="sticky top-0 z-50 bg-white border-b px-5 pb-5 ">
            <h1 className="font-semibold text-xl pl-5 pt-6">
              Delivery Details
            </h1>
            <button
              onClick={() => {
                setIsDeliveryModel(false);
                setIsToggled(false);
                setMode("Pickup");
              }}
              className="absolute top-6 right-6 text-2xl text-zinc-600 cursor-pointer
                  hover:text-black "
            >
              <IoMdClose />
            </button>
          </header>
          <body className="px-8 ">
            <h2 className="font-semibold pt-6">Delivery Time</h2>
            <div className="">
              <DateTimeDropdowns />
            </div>
            <div className="flex items-center justify-between mt-5">
              <p className="text-sm font-semibold">Delivered To</p>
              <p className="text-xs border font-normal rounded-md py-1 px-2 uppercase">
                Required
              </p>
            </div>
            <div className="gap-4 flex flex-col items-center justify-center my-5">
              <div className="relative w-full">
                <SlLocationPin
                  size={30}
                  className="absolute mt-3 pl-2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Your Address"
                  className="border focus:outline-dashed focus:outline-1 focus:outline-black
                      focus:outline-offset-4 w-full rounded-lg py-3 px-4 pl-10"
                />
              </div>
              <input
                type="text"
                placeholder="Ste, Apt, Floor "
                className="border focus:outline-dashed focus:outline-1 focus:outline-black
                   focus:outline-offset-4  w-full py-3 rounded-lg px-4 "
              />
              <textarea
                name=""
                type="text"
                placeholder="Delivery Instructions"
                id=""
                rows="3"
                className="border py-3 px-4 focus:outline-dashed focus:outline-1 focus:outline-black
                 focus:outline-offset-4  w-full rounded-lg"
              ></textarea>
            </div>
          </body>
          <footer
            className="sticky z-50 bottom-0 left-3 flex items-center bg-white
              justify-center border-t border-gray-200  "
          >
            <button
              className=" w-[480px] py-3 bg-[#13AA6D] hover:bg-green-700 mt-5 mb-5
                  text-white rounded-full font-semibold"
            >
              Update
            </button>
          </footer>
        </div>
      </section>
    </div>
  );
}
