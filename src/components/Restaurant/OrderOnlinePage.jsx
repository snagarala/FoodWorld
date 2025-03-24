import React, {useState} from "react";
import { GoPerson } from "react-icons/go";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { PiPackageFill } from "react-icons/pi";
import { FaGreaterThan } from "react-icons/fa6";
import { GiForkKnifeSpoon } from "react-icons/gi";
import ItemsCard from "./ItemsCard";
import CategoryDropDown from "./CategoryDropDown";

export default function OrderOnlinePage() {

    const [ open,setOpen ] = useState(false);
    const [ selectedCategory,setSelectedCategory ] = useState("Categories");
    
  return (
    <div className="w-full h-screen overflow-scroll pb-8">
      <nav className="flex sticky top-0 bg-white ">
          <div className="flex-[2] p-4 font-semibold border text-center">
              <p>Gardenia<br />Mediterranean... </p>
          </div>
          <div className="flex-[8] flex justify-between border p-4 items-center">
               <div>
                 <p>Shops at 4567 NewJersey Road Pink Street,US</p>
               </div>
               <div className="flex gap-2 pr-2 cursor-pointer">
                   <GoPerson size={20} />
                   <p>Log In Sign Up</p>
               </div>
          </div>
      </nav>
      <header className="flex ">
        <div className="flex-[1] bg-[#F2F2F2] text-start items-start justify-center ">
            <h2 className="font-semibold mt-[90px] text-[28px] mb-4 ml-8">Gardenia Mediterranean <br/>Restaurant</h2>
            <div className="flex ml-8">
            <p className="text-xs ">4004 NewJersey Road Pink Street 116 </p>
            <p className="underline ml-4 text-xs"> More Info</p>
            </div>
        </div> 
        <div className="flex-[1]">
            <img src="https://menuimages.chownowcdn.com/image-resizing?image=d6741a67-a783-4d43-b5b0-7b14a1ec3835.jpg&left=0&top=0&right=0&bottom=0&quality=85&fit=contain"  alt="foodImg" />
        </div>
      </header>
      <body className="flex mt-[40px]">
        <div className="leftSection flex-[6] p-[20px] relative ">
             <div className="categories flex justify-around items-center gap-2 border-b border-zinc-300 mt-5">
                    
                 <div className="flex flex-[1] gap-2 justify-between px-4 pb-2 ">
                     <p className="font-semibold">{selectedCategory}</p>
                    { open && (
                     <div className="dropdownComponent ">
                        <CategoryDropDown 
                         title={"Categories"}
                         values={[
                            {id:1,name:"Appetizers | cold"},
                            {id:2,name:"Appetizers | hot"},
                            {id:3,name:"Soup of the day"},
                            {id:4,name:"Salads"},
                            {id:5,name:"Sandwiches"},
                            {id:6,name:"Coffee"},
                            {id:7,name:"Desserts"},
                            {id:8,name:"Pizza"},
                            {id:9,name:"Cold Coffee"},
                            {id:10,name:"IceCreams"},
                         ]}
                         selectedCategory={selectedCategory}
                         setSelectedCategory={setSelectedCategory}
                         setOpen={setOpen}
                        />
                     </div>
                     )}
                     <div onClick={()=>setOpen(!open)} className="mt-2 cursor-pointer">
                         <FaChevronDown size={15} className="text-zinc-500"/>
                     </div>
                 </div>
                 <div className="flex flex-[1] gap-2 px-4 text-zinc-500 pb-2 border-l border-zinc-300">
                     <IoSearchSharp  size={20} className="mt-1 "/>
                     <p className="">Search</p>
                 </div>
             </div> 
             <div className="offer flex border border-zinc-300 gap-2 text-center items-center 
                 justify-center rounded-2xl py-6 mt-8">
                 <PiPackageFill size={30} className="text-green-600"/>
                 <p className="font-semibold">Get 15% off after 8 orders.Log into st...</p>
                 <p className="font-semibold underline">Learn More</p>
                 <FaGreaterThan size={15} className="text-zinc-500"/>
             </div>
             <p className="text-center text-[50px] font-thin"> - - </p>
             <div className="AppetizersCold ">
                  <ItemsCard/>
             </div>
        </div>
        <div className="rightSection flex-col flex-[4] p-[20px] ">
            <div className="w-full flex  mb-4 ">
                <button className="bg-green-600 translate-x-8 text-white rounded-full text-center w-full py-3  cursor-pointer">PickUp</button>
                <button className="bg-[#F2F2F2]  rounded-full w-full py-3 text-center  hover:text-green-900 cursor-pointer">Delivery</button>
            </div>
            <div className="border border-bg-zinc-500 hover:border-gray-950 cursor-pointer rounded-full w-full mb-4 py-3 text-center flex items-center justify-center gap-2">
                 <CiClock2 size={20}/>
                 <button className="text-center text-zinc-500 ">ASAP</button>
            </div>  
            <div className="h-[220px] w-full rounded-2xl p-1 border border-bg-zinc-400">
                <p className="border-b p-4 font-semibold">Order Summary</p>
                <div className="text-zinc-500 flex flex-col p-8 gap-2 items-center justify-center text-center">
                  <IoBagHandleOutline size={30} />
                  <p className="text-sm">Choose an item from the<br/> menu to get started</p> 
                </div>
            </div>
        </div>
      </body>
      <footer className="border-t p-8">
          <div className="flex gap-2 cursor-pointer">
             <p className="font-semibold">Powered By</p>
             <GiForkKnifeSpoon size={15} className="w-[25px] h-[25px] text-white p-1 bg-black rounded-full"/>
             <p className="font-semibold">ChowNow</p>
          </div>
          <div className="flex justify-between items-center mt-8">
            <p className="cursor-pointer text-black hover:text-cyan-500">About Us</p>
            <p className="cursor-pointer text-black hover:text-cyan-500">Help</p>
            <p className="cursor-pointer text-black hover:text-cyan-500">Terms of Use</p>
            <p className="cursor-pointer text-black hover:text-cyan-500">Personal Information</p>
            <p className="cursor-pointer text-black hover:text-cyan-500">Privacy policy</p>
          </div>
      </footer>
    </div>
  );
}
