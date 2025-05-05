import React, { useState, useRef } from "react";
import TimeDropdown from "./TimeDropdown";
import DateDropdown from "./DateDropdown";
import { IoCloseOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";

export default function PickupModel({
  mode,
  pickupInfo,
  setPickupInfo,
  setIsPickupModel,
}) {
  const dateSelectRef = useRef(null);
  const timeSelectRef = useRef(null);
  const [showValidation, setShowValidation] = useState(false);

  function handleDateTime() {
    if (mode === "Delivery") {
      // Check delivery fields
      if (
        pickupInfo.address?.trim() === "" ||
        pickupInfo.apt?.trim() === "" ||
        !pickupInfo.delivery_notes?.trim()
      ) {
        setShowValidation(true);
        return;
      }
    }

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

  const handleUpdate = () => {
    if (pickupInfo.address?.trim() === "" || pickupInfo.apt?.trim() === "") {
      setShowValidation(true);
    } else {
      // Proceed with the update
      console.log("Delivery Info Submitted");
      setIsPickupModel(false);
    }
  };

  return (
    <div>
      <section
        className="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-50 
          overflow-auto flex items-center justify-center"
      >
        <div
          className={`${mode === "Delivery" ? "h-[520px]" : "h-[400px]"} w-[500px] bg-white rounded-2xl overflow-auto`}
        >
          <div className="sticky flex items-center justify-between py-3 top-0 z-60 bg-white border-b-2 border-stone-200">
            <h2 className="title font-semibold  text-[20px] pl-8 ">
              {mode === "Delivery" ? "Delivery Details" : "Pickup Details"}
            </h2>
            <button
              onClick={() => setIsPickupModel(false)}
              className="closeButton  cursor-pointer  "
            >
              <IoCloseOutline size={50} className=" text-gray-400 p-2" />
            </button>
          </div>
          {/* <hr className="flex-grow border-t-2  border-stone-200 mb-5 mt-[80px] " /> */}
          <div className="  px-[40px] mb-10 ">
            <p className="p-2 mt-6 text-sm font-semibold">
              {mode === "Delivery" ? "Delivery Time" : "Pickup Time"}
            </p>
            <DateDropdown
              pickupInfo={pickupInfo}
              ref={dateSelectRef}
              onChange={(val) =>
                setPickupInfo((prev) => ({ ...prev, date: val }))
              }
            />
            <TimeDropdown
              pickupInfo={pickupInfo}
              ref={timeSelectRef}
              onChange={(val) =>
                setPickupInfo((prev) => ({ ...prev, time: val }))
              }
            />
          </div>

          {mode === "Delivery" && (
            <div className="px-[40px] mb-8">
              <div className="flex items-center justify-between mt-5">
                <p className="text-sm font-semibold">Delivered To</p>
                <p
                  className={`text-xs border font-normal rounded-md py-1 px-2 uppercase 
                          ${
                            showValidation &&
                            (pickupInfo.address?.trim() === "" ||
                              pickupInfo.apt?.trim() === "" ||
                              !pickupInfo.delivery_notes?.trim())
                              ? "text-red-500 border-red-500 border-2"
                              : "text-black border-black"
                          }`}
                >
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
                    value={pickupInfo.address}
                    onChange={(e) => {
                      setPickupInfo((prev) => ({
                        ...prev,
                        address: e.target.value,
                      }));
                      setShowValidation(false);
                    }}
                    className="border focus:outline-dashed focus:outline-1 focus:outline-black
                              focus:outline-offset-4 w-full rounded-lg py-3 px-4 pl-10"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Ste, Apt, Floor "
                  value={pickupInfo.apt}
                  onChange={(e) => {
                    setPickupInfo((prev) => ({ ...prev, apt: e.target.value }));
                    setShowValidation(false);
                  }}
                  className="border focus:outline-dashed focus:outline-1 focus:outline-black
                           focus:outline-offset-4  w-full py-3 rounded-lg px-4 "
                />

                <textarea
                  name="delivery_notes"
                  type="text"
                  placeholder="Delivery Instructions"
                  value={pickupInfo.delivery_notes}
                  onChange={(e) => {
                    setPickupInfo((prev) => ({
                      ...prev,
                      delivery_notes: e.target.value,
                    }));
                    setShowValidation(false);
                  }}
                  rows="3"
                  className="border py-3 px-4 focus:outline-dashed focus:outline-1 focus:outline-black
                         focus:outline-offset-4  w-full rounded-lg"
                />
              </div>
            </div>
          )}

          <div
            className="flex items-center justify-center pb-3 sticky bottom-0 z-60
           bg-white border-t-2 border-stone-200"
          >
            <button
              onClick={handleDateTime}
              disabled={
                mode === "Delivery" &&
                showValidation &&
                (pickupInfo.address?.trim() === "" ||
                  pickupInfo.apt?.trim() === "" ||
                  !pickupInfo.delivery_notes?.trim())
              }
              className={`rounded-full w-[100%] flex items-center justify-center m-5 px-8 py-3.5 text-white cursor-pointer 
                     ${
                       mode === "Delivery" &&
                       showValidation &&
                       (pickupInfo.address?.trim() === "" ||
                         pickupInfo.apt?.trim() === "" ||
                         !pickupInfo.delivery_notes?.trim())
                         ? "bg-[#13AA6D] cursor-not-allowed"
                         : "bg-[#13AA6D] hover:bg-green-700"
                     }`}
            >
              Update
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
