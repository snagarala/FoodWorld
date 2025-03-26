import React, { useState, useEffect } from "react";
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
import { foodItems, kidsMenu } from "./foodItems";

export default function OrderOnlinePage() {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Categories");
  // Merge both menus into a single state variable
  const [allMenuItems] = useState({ ...foodItems, ...kidsMenu });
  const [search, setSearch] = useState("");

  const [filteredSearchValues, setFilteredSearchValues] = useState({});

  const setScrollToCategory = () => {
    if (selectedCategory === "Categories") return allMenuItems;
    return { [selectedCategory]: allMenuItems[selectedCategory] };
  };

  useEffect(() => {
    let filtered = { ...allMenuItems };
    // Apply search filter
    if (search.trim() !== "") {
      const searchLower = search.toLowerCase();
      console.log(searchLower, "searchLower");
      console.log(allMenuItems, "allMenuItems");

      filtered = Object.entries(allMenuItems).reduce(
        (acc, [category, items]) => {
          const matchingItems = items.filter(
            (item) =>
              item.name.toLowerCase().includes(searchLower) ||
              item.description.toLowerCase().includes(searchLower)
          );
          if (matchingItems.length > 0) {
            acc[category] = matchingItems;
          }
          return acc;
        },
        {}
      );
      console.log(filtered, "filtered with search str");
    }
    console.log(filtered, "calling setFilteredSearchValues after search str");

    setFilteredSearchValues(filtered);
  }, [selectedCategory, search]);

  return (
    <div className="w-full h-screen  pb-8">
      <nav className="flex sticky top-0 bg-white ">
        <div className="flex-[2] p-4 font-semibold border text-center">
          <p>
            Gardenia
            <br />
            Mediterranean...{" "}
          </p>
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
      <header className="flex h-[300px] bg-[#F2F2F2]">
        <div className="flex-[1] bg-[#F2F2F2] text-start items-start justify-center mt-[50px]">
          <h2 className="font-semibold mt-[90px] text-[28px] mb-4 ml-8">
            Gardenia Mediterranean <br />
            Restaurant
          </h2>
          <div className="flex ml-8">
            <p className="text-xs ">4004 NewJersey Road Pink Street 116 </p>
            <p className="underline ml-4 text-xs"> More Info</p>
          </div>
        </div>
        <div className="flex-[1]">
          <img
            src="https://menuimages.chownowcdn.com/image-resizing?image=d6741a67-a783-4d43-b5b0-7b14a1ec3835.jpg&left=0&top=0&right=0&bottom=0&quality=85&fit=contain"
            alt="foodImg" className="h-[300px]"
          />
        </div>
      </header>
      <div className=" flex mt-[20px] bg-white">
        <div className="leftSection flex-[6] p-[20px] relative mt-[20px]">
          <div className="categories  flex justify-around items-center gap-2 border-b border-zinc-300 ">
            <div className="flex flex-[1] gap-2 justify-between px-4 pb-2 ">
              <p className="font-semibold">{selectedCategory}</p>
              {open && (
                <div className="dropdownComponent ">
                  <CategoryDropDown
                    title={"Categories"}
                    values={Object.keys(filteredSearchValues).map(
                      (category) => ({
                        id: category,
                        name: category,
                      })
                    )}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    setOpen={setOpen}
                  />
                </div>
              )}
              <div
                onClick={() => setOpen(!open)}
                className="mt-2 cursor-pointer"
              >
                <FaChevronDown size={15} className="text-zinc-500" />
              </div>
            </div>
            <div className="flex flex-[1] gap-2 px-4 text-zinc-500 pb-2 border-l border-zinc-300 ">
              <IoSearchSharp size={20} className="mt-1 " />
              <input
                type="text"
                value={search}
                placeholder="Search"
                className="focus:outline-dotted p-2 outline-black cursor-pointer"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
          </div>
          <div
            className="offer flex border border-zinc-300 gap-2 text-center items-center 
                 justify-center rounded-2xl py-6 mt-8"
          >
            <PiPackageFill size={30} className="text-[#13AA6D]" />
            <p className="font-semibold">
              Get 15% off after 8 orders.Log into st...
            </p>
            <p className="font-semibold underline">Learn More</p>
            <FaGreaterThan size={15} className="text-zinc-500" />
          </div>
          <p className="text-center text-[50px] font-thin"> - - </p>
          <div className="AppetizersCold ">
            <ItemsCard
              filteredSearchValues={filteredSearchValues}
              selectedCategory={selectedCategory}
            />
          </div>
        </div>
        <div className="rightSection flex-col flex-[4] m-[20px] ">
          <div className="w-full mr-5 flex  mb-4 ">
            <button className="bg-[#13AA6D] translate-x-8  text-white rounded-full text-center w-full cursor-pointer">
              PickUp
            </button>
            <button className="bg-[#F2F2F2]  rounded-full w-full py-3 text-center  hover:text-green-900 cursor-pointer">
              Delivery
            </button>
          </div>
          <div className="border border-zinc-300 hover:border-gray-950 cursor-pointer rounded-full w-full mb-4 py-3 
             text-center flex items-center justify-center gap-2">
            <CiClock2 size={20} />
            <button className="text-center text-zinc-500 ">ASAP</button>
          </div>
          <div className="h-[220px] w-full rounded-2xl p-1 border border-zinc-300">
            <p className="border-b p-4 font-semibold">Order Summary</p>
            <div className="text-zinc-500 flex flex-col p-8 gap-2 items-center justify-center text-center">
              <IoBagHandleOutline size={30} />
              <p className="text-sm">
                Choose an item from the
                <br /> menu to get started
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="border-t p-8">
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
      </footer>
    </div>
  );
}
