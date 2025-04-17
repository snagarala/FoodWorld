import React from "react";
import { GiForkKnifeSpoon } from "react-icons/gi";

export default function FooterOrderOnline() {
  return (
    <div>
      <div className="flex gap-2 cursor-pointer">
        <p className="font-semibold">Powered By</p>
        <GiForkKnifeSpoon
          size={15}
          className="w-[25px] h-[25px] text-white p-1 bg-black rounded-full"
        />
        <p className="font-semibold">ChowNow</p>
      </div>
      <div className="flex justify-between items-center mt-8">
        <p className="cursor-pointer text-black hover:text-cyan-500">
          About Us
        </p>
        <p className="cursor-pointer text-black hover:text-cyan-500">Help</p>
        <p className="cursor-pointer text-black hover:text-cyan-500">
          Terms of Use
        </p>
        <p className="cursor-pointer text-black hover:text-cyan-500">
          Personal Information
        </p>
        <p className="cursor-pointer text-black hover:text-cyan-500">
          Privacy policy
        </p>
      </div>
    </div>
  );
}
