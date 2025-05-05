import React, { useState } from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { PiCalendarBlank } from "react-icons/pi";

export default function RightSideOrderOnlinePage({
  mode,
  setMode,
  setIsPickupModel,
  cartDetails,
  editItems,
  deleteItems,
  pickupInfo,
}) {
  const [isToggled, setIsToggled] = useState(true);

  return (
    <div className="">
      <div
        className="w-full flex mt-[30px] mb-6 bg-[#F2F2F2] items-center rounded-full justify-between
         shadow-md relative transition-all duration-300"
      >
        {/* Sliding background highlight */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 rounded-full bg-[#13AA6D] transition-transform duration-300
         ${mode === "Delivery" ? "translate-x-full" : "translate-x-0"}`}
        />

        {/* Pickup Button */}
        <button
          onClick={() => {
            setMode("Pickup");
            setIsToggled(false);
            setIsPickupModel(true);
          }}
          className={`w-1/2 z-10 py-4 text-center rounded-full transition-colors duration-300
         ${mode === "Pickup" ? "text-white" : "text-black"}`}
        >
          Pickup
        </button>

        {/* Delivery Button */}
        <button
          onClick={() => {
            setMode("Delivery");
            setIsToggled(true);
            setIsPickupModel(true);
          }}
          className={`w-1/2 z-10 py-4 text-center rounded-full transition-colors duration-300
           ${mode === "Delivery" ? "text-white" : "text-black"}`}
        >
          Delivery
        </button>
      </div>

      {/* Time section */}
      <div
        onClick={() => setIsPickupModel(true)}
        className="border border-zinc-300 hover:border-gray-950 cursor-pointer rounded-full w-full mb-4 py-3 
              text-center flex items-center justify-center gap-2"
      >
        {!pickupInfo.date && !pickupInfo.time ? (
          <div className="flex">
            <CiClock2 size={20} className="mt-1 mr-2" />
            <p className="text-center text-zinc-500 ">ASAP</p>
          </div>
        ) : (
          <div className="flex items-center">
            <PiCalendarBlank size={20} className="text-zinc-500 mr-5" />
            <button className="text-center text-zinc-500 text-sm">
              {pickupInfo.date} {pickupInfo.time}
            </button>
          </div>
        )}
      </div>
      {/* Cart */}
      <div className="w-full rounded-2xl border border-zinc-300">
        <div className="">
          {cartDetails?.length === 0 && (
            <div className="wrapperForOrderSummery">
              <p className="border-b p-4 font-semibold">Order Summary</p>
              <div className="text-zinc-500 flex flex-col p-8 gap-2 items-center justify-center text-center">
                <IoBagHandleOutline size={30} />
                <p className="text-sm ">
                  Choose an item from the
                  <br /> menu to get started
                </p>
              </div>
            </div>
          )}
        </div>
        <div className=" ">
          {/* cartItems - Order Summary */}
          {cartDetails?.length > 0 && (
            <div>
              <p className="border-b p-4 font-semibold">Order Summary</p>
              <div>
                {cartDetails.map((cartItem, index) => (
                  <div key={index} className="flex flex-col  ">
                    <div className="flex justify-around pt-5 px-2 py-1">
                      <p className="pr-1"> {cartItem.quantity}</p>
                      <p className="font-semibold mb-4 cursor-pointer">
                        {cartItem.name}{" "}
                      </p>
                      <p className="pl-[40px] cursor-pointer">
                        $ {Number(cartItem.price).toFixed(2)}
                      </p>
                    </div>
                    <div className="flex pb-5 px-2 py-1">
                      <button
                        onClick={() => editItems(index)}
                        className="underline pl-5 text-underline-offset-4 cursor-pointer decoration-1 hover:text-[#13AA6D]"
                      >
                        Edit Item
                      </button>
                      <button
                        onClick={() => deleteItems(index)}
                        className="underline pl-5 text-underline-offset-4 cursor-pointer decoration-1 hover:text-[#13AA6D]"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                <div className="subTotalSection border-t flex flex-col gap-5 px-4 py-1 ">
                  <div className="flex justify-between  mt-5">
                    <p className="font-bold text-[20px]">Subtotal</p>
                    <p className="font-bold">
                      ${" "}
                      {cartDetails
                        .reduce((acc, item) => acc + Number(item.price), 0)
                        .toFixed(2)}
                    </p>
                  </div>
                  <button
                    className="bg-[#13AA6D] hover:bg-emerald-600 text-white  py-4 mb-4 font-semibold
                            rounded-full text-center w-full cursor-pointer "
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
