import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="h-[100%] w-[95%] bg-white mx-auto mt-5 mb-5">
      <Navbar />
      <h2
        className="text-green-900 italic font-semibold text-[40px] font-['bentham']
         opacity-75 text-start"
      >
        An Authentic Mediterranean Dining Experience.
      </h2>
      <img
        src="FoodImage.png"
        alt="food image"
        className="w-full object-cover"
      />
      <div className="WelcomeSection flex flex-col items-center justify-center gap-4 mx-[50px] text-center">
        <h1 className="text-green-900 font-['libre_caslon_display'] font-bold text-[60px] mt-[50px]">
          Welcome to Gardenia
        </h1>
        <p className="text-green-900 font-serif text-[20px]">
          Come dine with us and be a part of our family!
        </p>
        <p className="text-green-900 font-serif text-[20px] text-center px-[100px]">
          we are located at the shops you can visit us and enjoy our food. You
          can also call us with your take-out order, and we will have it ready
          for you at the register.
        </p>
      </div>
      <div
        className="orderWrapper flex gap-[90px] items-center justify-end 
            mt-[50px] mb-[50px] p-[40px] pr-[100px]"
      >
        <div
          className="  bg-green-900 text-white hover:bg-white hover:text-blue-500 border border-blue-500
              rounded-full h-[150px] w-[150px] text-center  cursor-pointer "
        >
          <p
            onClick={() => {
              navigate("/orderOnline");
            }}
            className="mt-[60px] font-sans font-light "
          >
            Order Takeout
          </p>
        </div>
        <p
          onClick={() => {
            navigate("/catering");
          }}
          className="text-green-900 font-semibold font-['Fraunces'] text-start 
                 underline cursor-pointer text-[45px] mt-[30px]  "
        >
          Now Offering <br /> Catering
        </p>
      </div>
      <div className="secondSection relative">
        <div className="flex">
          <img
            src="https://static.wixstatic.com/media/7a07d6_6c825c62ecc4475dac3dee0f50b3b714~mv2.jpg/v1/fill/w_505,h_560,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/7a07d6_6c825c62ecc4475dac3dee0f50b3b714~mv2.jpg"
            alt="foodImg"
            className="w-[485px]"
          />
          <div className="flex flex-col items-center justify-center gap-5  text-start">
            <p className="px-1 uppercase text-[#624D16] font-['libre_caslon_display'] font-bold text-[30px]">
              Authentic Mediterranean <br />
              dining
            </p>
            <p className="font-thin font-serif text-[#624D16] pl-2">
              Come dine with us in a casual ,family-friendly settings with
              authentic Mediterranean food.
            </p>
            <button
              onClick={() => {
                navigate("/about");
              }}
              className="bg-[#624D16] text-white cursor-pointer px-5 py-2 rounded-full mr-[300px]
                       hover:bg-yellow-700 hover:border-yellow-800 border"
            >
              About Us
            </button>
          </div>
        </div>
        <div className="flex items-center text-start w-8 h-[450px] pr-[150px]">
          <p className=" text-green-900 font-['libre_caslon_display'] font-bold 
           text-[45px] p-2">
            "Every plate is a masterpiece,fresh and flavorful"
          </p>
        </div>
        <div className="absolute top-[450px] left-[380px] w-[1000px] pr-[150px]">
          <img
            className="h-[550px]"
            src="https://static.wixstatic.com/media/7a07d6_120defe0ecab4aa98d55feb8862f1169~mv2.jpg/v1/fill/w_355,h_533,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/GardeniaMediterranianRestaurant40_JPG.jpg"
            alt="foodImg"
          />
        </div>
        <div className="images bg-[#F6F6EE] mt-4 ">
          <div className="firstGrid grid grid-cols-4 grid-rows-9 gap-5 pt-5 px-5">
            <div className="col-span-2 row-span-3">
              <img
                src="https://static.wixstatic.com/media/7a07d6_0b09ac7daa2c43e88d114f1436c8db13~mv2.jpg/v1/fill/w_419,h_281,q_90,enc_avif,quality_auto/7a07d6_0b09ac7daa2c43e88d114f1436c8db13~mv2.jpg"
                alt="food"
                className="h-[300px]"
              />
            </div>
            <div className="col-span-2 row-span-3 col-start-3">
              <img
                src="https://static.wixstatic.com/media/7a07d6_692f9e2dca204e11b2620abff4e39e1e~mv2.jpg/v1/fit/w_1072,h_2436,q_90,enc_avif,quality_auto/7a07d6_692f9e2dca204e11b2620abff4e39e1e~mv2.jpg"
                alt="food"
                className=""
              />
            </div>
            <div className="col-span-4 row-span-6 row-start-4">
              <img
                src="https://static.wixstatic.com/media/7a07d6_cd41b8a7d5c4427b96c7b58fad784423~mv2.jpg/v1/fill/w_864,h_579,q_90,enc_avif,quality_auto/7a07d6_cd41b8a7d5c4427b96c7b58fad784423~mv2.jpg"
                alt="food"
                className="w-[970px]"
              />
            </div>
          </div>
          <div className="secondGrid grid grid-cols-7 grid-rows-6 gap-5 pt-5 px-5">
            <div className="col-span-3 row-span-3 ">
              <img
                src="https://static.wixstatic.com/media/7a07d6_90ea5a2f16904853949f52c555ae98f2~mv2.jpg/v1/fit/w_1072,h_2436,q_90,enc_avif,quality_auto/7a07d6_90ea5a2f16904853949f52c555ae98f2~mv2.jpg"
                alt="foodImg"
                className=""
              />
            </div>
            <div className="col-span-3 row-span-3 col-start-1 row-start-4">
              <img
                src="https://static.wixstatic.com/media/7a07d6_51352c3acaab4fad8c18224d9a6b3cab~mv2.jpg/v1/fit/w_1072,h_2436,q_90,enc_avif,quality_auto/7a07d6_51352c3acaab4fad8c18224d9a6b3cab~mv2.jpg"
                alt="foodImg"
                className=""
              />
            </div>
            <div className="col-span-4 row-span-4 col-start-4 row-start-1">
              <img
                src="https://static.wixstatic.com/media/7a07d6_ecba5b8c7a184d8294ff034fa4d25678~mv2.jpg/v1/fit/w_1072,h_2436,q_90,enc_avif,quality_auto/7a07d6_ecba5b8c7a184d8294ff034fa4d25678~mv2.jpg"
                alt="foodImg"
                className=" "
              />
            </div>
            <div className="col-span-2 row-span-2 col-start-4 row-start-5">
              <img
                src="https://static.wixstatic.com/media/7a07d6_79eb206f67364cf693cd65ed2ad2daff~mv2.jpg/v1/fit/w_1072,h_2436,q_90,enc_avif,quality_auto/7a07d6_79eb206f67364cf693cd65ed2ad2daff~mv2.jpg"
                alt="foodImg"
                className=" "
              />
            </div>
            <div className="col-span-2 row-span-2 col-start-6 row-start-5">
              <img
                src="https://static.wixstatic.com/media/7a07d6_f7356c6e1c7a481e90ac44bfbd34dd2d~mv2.jpg/v1/fit/w_1072,h_2436,q_90,enc_avif,quality_auto/7a07d6_f7356c6e1c7a481e90ac44bfbd34dd2d~mv2.jpg"
                alt="foodImg"
                className=""
              />
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-12 gap-5 px-5">
            <div className="col-span-6 row-span-6 pt-5 ">
              <img
                src="https://static.wixstatic.com/media/7a07d6_31beac9edc654c75a47eb0b3fb8fcbb9~mv2.jpg/v1/fit/w_1072,h_2436,q_90,enc_avif,quality_auto/7a07d6_31beac9edc654c75a47eb0b3fb8fcbb9~mv2.jpg"
                alt="foodImg"
              />
            </div>
            <div className="col-span-3 row-span-3 row-start-7">
              <img
                src="https://static.wixstatic.com/media/7a07d6_47cdacfd395e46fd8710ff03007c1352~mv2.jpg/v1/fit/w_1072,h_2436,q_90,enc_avif,quality_auto/7a07d6_47cdacfd395e46fd8710ff03007c1352~mv2.jpg"
                alt="foodImg"
              />
            </div>
            <div className="col-span-3 row-span-3 col-start-4 row-start-7">
              <img
                src="https://static.wixstatic.com/media/7a07d6_f6fb2547e6114826b2891536d276be75~mv2.jpg/v1/fit/w_1072,h_2436,q_90,enc_avif,quality_auto/7a07d6_f6fb2547e6114826b2891536d276be75~mv2.jpg"
                alt="foodImg"
              />
            </div>
            <div className="col-span-3 row-span-3 row-start-10">
              <img
                src="https://static.wixstatic.com/media/7a07d6_a603d2147eab438c9b4ec64bd60f93ac~mv2.jpg/v1/fit/w_1072,h_2436,q_90,enc_avif,quality_auto/7a07d6_a603d2147eab438c9b4ec64bd60f93ac~mv2.jpg"
                alt="foodImg"
              />
            </div>
            <div className="col-span-3 row-span-3 col-start-4 row-start-10">
              <img
                src="https://static.wixstatic.com/media/7a07d6_df23b3775778463493fe57c8a07aa81b~mv2.jpg/v1/fit/w_1072,h_2436,q_90,enc_avif,quality_auto/7a07d6_df23b3775778463493fe57c8a07aa81b~mv2.jpg"
                alt="foodImg"
              />
            </div>
          </div>
          <div className="imagesFooter pb-[60px] p-5 flex justify-between mt-[120px]">
            <div>
              <h1 className="text-green-900 font-semibold text-[80px] font-['bentham'] leading-1">
                Gardenia{" "}
              </h1>
              <img
                src="https://static.wixstatic.com/media/7a07d6_bf44db4eaf8a480ba19f3caed58d149a~mv2.png/v1/fill/w_352,h_239,al_c,lg_1,q_85,enc_avif,quality_auto/7a07d6_bf44db4eaf8a480ba19f3caed58d149a~mv2.png"
                alt="food logo"
                className="w-[250px] h-[180px] "
              />
            </div>
            <div className="mt-[25px]">
              <p className="text-green-900 font-semibold text-[45px] font-['bentham']">
                Contact
              </p>
              <p className="text-[#5F5F5B] mt-[20px] text-[20px]">
                Shops at NewYork Street
                <br />
                (corner of the Street left side)
                <br />
                4567 NewJersey Road
                <br />
                Pink Street,US 4004
                <br />
                Phone:(780)456-1234
              </p>
            </div>
            <div className="">
              <p className="text-green-900 mt-[25px] font-semibold text-[50px] font-['bentham']">
                Follow Us
              </p>
              <div className="flex mt-[20px]">
                <FaSquareInstagram
                  size={60}
                  className="text-pink-800 ml-[80px]"
                />
                <FaFacebook size={60} className="text-[#3D5999] ml-[20px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <Footer />
      </div>
    </div>
  );
}
