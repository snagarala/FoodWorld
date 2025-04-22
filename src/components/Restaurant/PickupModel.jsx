import React, { useState, useRef } from "react";
import TimeDropdown from "./TimeDropdown";
import DateDropdown from "./DateDropdown";
import { IoCloseOutline } from "react-icons/io5";

export default function PickupModel({
  pickupInfo,
  setPickupInfo,
  setIsPickupModel,
}) {
  const dateSelectRef = useRef(null);
  const timeSelectRef = useRef(null);

  function handleDateTime() {
    //Check if pickupInfo.date or pickupInfo.time is null,
    // then get the current value of the Date and time component and set it to the pickInfo.
    const selectedDateValue = dateSelectRef.current?.value;
    const selectedTimeValue = timeSelectRef.current?.value;
    if (!pickupInfo.date) {
      setPickupInfo((prev) => ({ ...prev, date: selectedDateValue }));
    }
    if (!pickupInfo.time) {
      setPickupInfo((prev) => ({ ...prev, time: selectedTimeValue }));
    }
    setIsPickupModel(false);
  }

  return (
    <div>
      <section className="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-50  flex items-center justify-center">
        <div className="relative h-[400px] w-[500px] bg-white rounded-2xl overflow-auto ">
          <div className="border-b">
            <h2 className="title font-semibold absolute top-6 left-8 text-[20px]">
              Pickup Details
            </h2>
            <button
              onClick={() => setIsPickupModel(false)}
              className="closeButton absolute top-6 right-6 cursor-pointer  "
            >
              <IoCloseOutline size={50} className=" text-gray-400 p-2" />
            </button>
          </div>
          <hr className="flex-grow border-t-2  border-stone-200 mb-5 mt-[80px]" />
          <div className="  px-[40px] mb-8">
            <p className="p-2 mt-8 text-sm font-semibold">Pickup Time</p>
            <DateDropdown
              ref={dateSelectRef}
              onChange={(val) =>
                setPickupInfo((prev) => ({ ...prev, date: val }))
              }
            />
            <TimeDropdown
              ref={timeSelectRef}
              onChange={(val) =>
                setPickupInfo((prev) => ({ ...prev, time: val }))
              }
            />
          </div>
          <hr className="flex-grow border-t-2  border-stone-200 mb-5" />
          <div className="flex items-center justify-center">
            <button
              onClick={handleDateTime}
              className="rounded-full bg-[#13AA6D] hover:bg-green-700 w-[80%]
                      px-8 py-3 text-white cursor-pointer"
            >
              Update
            </button>
          </div>
        </div>
      </section>
      {/* <div>
        <h1 className="font-bold text-xl pl-8 pt-9 text-stone-800">
            We need a little extra time
          </h1>
          <p className="px-8 font-medium text-sm/6 text-start my-5 text-neutral-600 ">
             We're sorry,the time you selected is no longer
             <br />
             available. Please select a new pickup time for your
             <br />
             order.
           </p>
           <p className="text-sm text-neutral-600 font-semibold">Select Pickup Date</p>
            <p className="text-sm font-medium text-neutral-600">Select Pickup Time</p>
        </div> */}
    </div>
  );
}
