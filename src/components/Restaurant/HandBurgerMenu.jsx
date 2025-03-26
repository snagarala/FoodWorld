import React from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate, Link } from "react-router-dom";

export default function HandBurgerMenu({ onClose }) {
  const navigate = useNavigate();

  return (
    <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-green-800 p-5">
      {/* Close Button */}
      <p
        onClick={onClose}
        className="cursor-pointer text-white flex justify-end"
      >
        <IoClose size={30} />
      </p>

      {/* Menu Items */}
      <div className="flex flex-col gap-5 mt-10 text-white text-4xl ml-10 font-semibold">
        <p
          onClick={() => {
            navigate("/");
            onClose();
          }}
          className="cursor-pointer text-white font-serif"
        >
          Home
        </p>
        <p
          onClick={() => {
            navigate("/about");
            onClose();
          }}
          className="cursor-pointer text-white font-serif"
        >
          About
        </p>
        <p
          onClick={() => {
            navigate("/catering");
            onClose();
          }}
          className="cursor-pointer text-white font-serif"
        >
          Catering
        </p>
        <Link to={`orderOnline`}>
          <p className="cursor-pointer text-white font-serif">
            Order Online</p>
        </Link>
      </div>
    </div>
  );
}
