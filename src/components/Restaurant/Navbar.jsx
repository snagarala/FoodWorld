import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import HandBurgerMenu from "./HandBurgerMenu";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const [isHandBurger, setIsHandBurger] = useState(false);

  function onClose() {
    setIsHandBurger(false);
  }
  return (
    <nav className=" w-[100%]  bg-white pt-[50px]">
      <div className="wrapper relative flex justify-between w-full h-[40rem]">
        <div
          onClick={() => {
            navigate("/");
          }}
          className=" mt-[20px] ml-[20px] cursor-pointer"
        >
          <h1 className="text-green-900 font-semibold text-[150px] font-['bentham'] leading-1">
            Gardenia
          </h1>
          <img
            src="https://static.wixstatic.com/media/7a07d6_bf44db4eaf8a480ba19f3caed58d149a~mv2.png/v1/fill/w_352,h_239,al_c,lg_1,q_85,enc_avif,quality_auto/7a07d6_bf44db4eaf8a480ba19f3caed58d149a~mv2.png"
            alt="food logo"
            className="w-[450px] h-[380px] "
          />
        </div>
        <div
          onClick={() => setIsHandBurger(true)}
          className="mt-[60px] mr-[25px] bg-green-900 text-white flex items-center justify-center
             rounded-full h-[150px] w-[150px]  p-8 cursor-pointer"
        >
          <IoMenu size={60} />
        </div>
      </div>

      <div className="model ">
        {isHandBurger && <HandBurgerMenu onClose={onClose} />}
      </div>
    </nav>
  );
}
