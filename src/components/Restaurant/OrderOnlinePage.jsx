import React, { useState, useEffect, useRef } from "react";
import { GoPerson } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { PiPackageFill } from "react-icons/pi";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import ItemsCard from "./ItemsCard";
import CategoryDropDown from "./CategoryDropDown";
import { foodItems, kidsMenu } from "./foodItems";
import { ImPriceTag } from "react-icons/im";
import { IoCloseOutline } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";
import { GiKnifeFork } from "react-icons/gi";
import RightSideOrderOnlinePage from "./RightSideOrderOnlinePage";
import FooterOrderOnline from "./FooterOrderOnline";
import ModelAfterBussHours from "./ModelAfterBussHours";
import PickupModel from "./PickupModel";

export default function OrderOnlinePage() {
  const [open, setOpen] = useState(false); //categoryDropDown
  const [selectedCategory, setSelectedCategory] = useState("Categories");
  //to Display category name when scroll up
  const categoryRefs = useRef({});
  const isClickScroll = useRef(false);
  //changes to be made
  //   isClickScroll.current = true; // 👈 Set the manual scroll flag
  // setSelectedCategory(category);

  // Merge both menus into a single state variable
  const [allMenuItems] = useState({ ...foodItems, ...kidsMenu });
  const [search, setSearch] = useState("");

  const [filteredSearchValues, setFilteredSearchValues] =
    useState(allMenuItems);
  //console.log(filteredSearchValues,"filteredSearchValues");

  const [cartDetails, setCartDetails] = useCartDetails();

  //const [openDetails, setOpenDetails] = useState(false);
  //when you click on itemImage model will open
  const [isModelOpen, setIsModelOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);

  //+ in "itemsCard" in model
  const [isAddItem, setIsAddItem] = useState(false);

  const [rewards, setRewards] = useState(false);

  const [logInSignUpModel, setLogInSignUpModel] = useState(false);

  const [learnMore, setLearnMore] = useState(false);

  //DateTimeModel
  const [isPickupModel, setIsPickupModel] = useState(false);

  const [pickupInfo, setPickupInfo] = useState({
    date: null,
    time: null,
    address: null,
    apt: null,
    SlLocationPin: null,
    delivery_notes: null,
  });

  const [mode, setMode] = useState("Pickup");

  function useCartDetails() {
    return useState([]);
  }

  // Category filtering is handled in the useEffect above

  // //to display category name when user scroll
  // useEffect(() => {
  //   // Observer for category sections
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const visibleEntry = entries.find((entry) => entry.isIntersecting);
  //       if (visibleEntry?.target) {
  //         const category = visibleEntry.target.getAttribute("data-category");
  //         if (category) setSelectedCategory(category);
  //       }
  //     },
  //     {
  //       rootMargin: "-50% 0px -50% 0px", // triggers when element is in middle-ish
  //       threshold: 0,
  //     }
  //   );

  //   // Observer for top of the page
  //   const topObserver = new IntersectionObserver(
  //     (entries) => {
  //       if (entries[0].isIntersecting) {
  //         setSelectedCategory("Categories");
  //       }
  //     },
  //     {
  //       threshold: 1, // Fully visible
  //       rootMargin: "0px 0px -90% 0px", // Only trigger at very top
  //     }
  //   );

  //   // Observe all category sections
  //   Object.entries(categoryRefs.current).forEach(([category, element]) => {
  //     if (element) {
  //       element.setAttribute("data-category", category);
  //       observer.observe(element);
  //     }
  //   });

  //   // Create and observe a dummy element at the top
  //   const topElement = document.createElement("div");
  //   topElement.style.height = "1px";
  //   const container = document.querySelector(".itemsCard");
  //   if (container && container.firstChild) {
  //     container.insertBefore(topElement, container.firstChild);
  //     topObserver.observe(topElement);
  //   }

  //   return () => {
  //     observer.disconnect();
  //     topObserver.disconnect();
  //     topElement.remove();
  //   };
  // }, [filteredSearchValues]);

  //scroll Tracking Logic
  // useEffect(() => {
  //   let ticking = false;

  //   const handleScroll = () => {
  //     if (!ticking) {
  //       window.requestAnimationFrame(() => {
  //         const scrollY = window.scrollY + 120;

  //         const categoryEntries = Object.entries(categoryRefs.current);

  //         let currentCategory = selectedCategory;

  //         for (let i = 0; i < categoryEntries.length; i++) {
  //           const [category, ref] = categoryEntries[i];
  //           if (ref && ref.offsetTop <= scrollY) {
  //             currentCategory = category;
  //           }
  //         }

  //         // Only update if it's not a click scroll and category actually changed
  //         if (!isClickScroll.current && currentCategory !== selectedCategory) {
  //           setSelectedCategory(currentCategory);
  //         }

  //         ticking = false;
  //       });

  //       ticking = true;
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [selectedCategory]);

  useEffect(() => {
    let filtered = { ...allMenuItems };

    // Apply search filter
    if (search.trim() !== "") {
      const searchLower = search.toLowerCase();
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
    }

    // Apply category filter if a specific category is selected
    if (selectedCategory !== "Categories") {
      filtered = {
        [selectedCategory]: filtered[selectedCategory] || [],
      };
    }

    setFilteredSearchValues(filtered);
  }, [selectedCategory, search]);

  //index=delItemIndex [we gave in onClick]
  function deleteItems(delItemIndex) {
    setCartDetails(cartDetails.filter((item, index) => index !== delItemIndex));
  }

  function editItems(index) {
    let cartEditItem = cartDetails[index];

    let allItems = [];
    Object.entries(filteredSearchValues).map(([categoryName, items], index) =>
      allItems.push(...items)
    );
    let selectedEditItem = allItems.find((e) => e.id === cartEditItem.id);
    selectedEditItem.quantity = cartEditItem.quantity;

    console.log(`selectedEditItem = ${selectedEditItem}`);
    setSelectedItem(selectedEditItem);
    setIsModelOpen(true);
    setIsAddItem(false);
  }

  function modelClose() {
    setIsModelOpen(false);
    setSelectedItem(null);
  }

  function handlingOrders() {
    //Add logic
    // Find if the item is already in the cart
    let existingItem = cartDetails.find((e) => e.id === selectedItem.id);
    let otherItems = cartDetails.filter((e) => e.id !== selectedItem.id);

    let updatedItem;

    // Check if cart is empty before adding the item
    const isFirstItem = cartDetails.length === 0;

    if (existingItem && isAddItem) {
      // Update quantity and price [if you want to increase same item]
      updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + selectedItem.quantity,
        price:
          (existingItem.quantity + selectedItem.quantity) * selectedItem.price,
      };
    } else {
      // Add new item (same case for edit scenario)
      updatedItem = {
        ...selectedItem,
        price: selectedItem.quantity * selectedItem.price,
      };
    }

    setCartDetails([...otherItems, updatedItem]);
    setIsModelOpen(false);
    // Show pickup modal only if it's the first item
    if (isFirstItem) {
      setIsPickupModel(true);
    }
  }

  //ModelAfterBussHours code
  // Business hours: 10 AM - 8 PM
  const [showAfterHours, setShowAfterHours] = useState(true);
  const businessStart = 10;
  const businessEnd = 20;

  const isOutsideBusinessHours = () => {
    const now = new Date();
    const hour = now.getHours();
    return hour < businessStart || hour >= businessEnd;
  };

  const getNextPickupTime = () => {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(12, 15, 0, 0); // 12:15 PM tomorrow

    const options = { weekday: "long", hour: "numeric", minute: "2-digit" };
    const day = tomorrow.toLocaleDateString("en-US", { weekday: "long" });
    const time = tomorrow.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });

    return { day, time };
  };

  const { day, time } = getNextPickupTime();

  return (
    <div className="w-full h-screen relative pb-8">
      <nav className="flex fixed w-full z-50 top-0 bg-white ">
        <div className="flex-[2] p-4 font-semibold border text-center">
          <p>
            Gardenia
            <br />
            Mediterranean...
          </p>
        </div>
        <div className="flex-[8] flex justify-between border p-4 items-center">
          <div>
            <p>Shops at 4567 NewJersey Road Pink Street,US</p>
          </div>
          <div
            onClick={() => setLogInSignUpModel(true)}
            className="flex gap-2 pr-2 cursor-pointer"
          >
            <GoPerson size={20} />
            <p>Log In Sign Up</p>
          </div>
        </div>
      </nav>
      <header className="flex h-[300px] mt-[82px] bg-[#F2F2F2]">
        <div className="flex-[1] bg-[#F2F2F2] text-start items-start justify-center mt-[50px]">
          <h2 className="font-semibold mt-[90px] text-[28px] mb-4 ml-8">
            Gardenia Mediterranean <br />
            Restaurant
          </h2>
          <div className="flex ml-8">
            <p className="text-xs ">4004 NewJersey Road Pink Street 116 </p>
            <p className="underline ml-4 text-xs cursor-pointer hover:text-green-900 ">
              {" "}
              More Info
            </p>
          </div>
        </div>
        <div className="flex-[1]">
          <img
            src="https://menuimages.chownowcdn.com/image-resizing?image=d6741a67-a783-4d43-b5b0-7b14a1ec3835.jpg&left=0&top=0&right=0&bottom=0&quality=85&fit=contain"
            alt="foodImg"
            className="h-[300px]"
          />
        </div>
      </header>
      <div className="wrapper  w-full flex  bg-white">
        <div className="leftSection bg-white flex-[6] pl-5 ">
          <div
            className="categoriesTopSection sticky top-20 bg-white z-50  pt-[50px] 
          flex justify-around items-center gap-2 border-b border-zinc-300 "
          >
            <div className=" flex flex-[1] gap-2 justify-between px-4 pb-2 ">
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
                    isClickScroll={isClickScroll}
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
            <div className="flex flex-[1] relative gap-1 px-4 text-zinc-500 pb-2 border-l border-zinc-300 ">
              <IoSearchSharp size={20} className="mt-3 " />
              <input
                type="text"
                value={search}
                placeholder="Search"
                className="focus:outline-dashed py-2 px-4 outline-black cursor-pointer"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              {search && (
                <IoCloseOutline
                  size={20}
                  onClick={() => {
                    setSearch("");
                  }}
                  className="mt-3 absolute top-0 right-20 cursor-pointer"
                />
              )}
            </div>
          </div>
          <div className="leftDownSectionWrapper ">
            <div className="rewards  text-center items-center mt-8">
              {!rewards && (
                <div
                  className="flex justify-between border border-zinc-300 mt-9 
                rounded-2xl gap-2 text-center pl-9 px-5 py-6 items-center"
                >
                  <div className="flex gap-2">
                    <PiPackageFill size={30} className="text-[#13AA6D]" />
                    <p
                      className="font-semibold overflow-hidden whitespace-nowrap 
                   min-w-[200px] max-w-[400px] sm:max-w-[300px] md:max-w-[500px]"
                    >
                      Get 15% off after 8 orders.Log into start earning
                      rewards...
                    </p>
                    <p
                      onClick={() => setLearnMore(true)}
                      className="font-semibold underline cursor-pointer whitespace-nowrap"
                    >
                      Learn More
                    </p>
                  </div>
                  <div
                    onClick={() => setRewards(true)}
                    className="cursor-pointer"
                  >
                    <FaGreaterThan size={15} className="text-zinc-500 " />
                  </div>
                </div>
              )}
              {rewards && (
                <div
                  className="flex bg-green-50 rounded-2xl px-5 py-6 border-none items-center 
                justify-around text-center gap-2 cursor-pointer"
                >
                  <div
                    onClick={() => setRewards(false)}
                    className="cursor-pointer"
                  >
                    <FaLessThan size={15} className="text-zinc-500 " />
                  </div>
                  <div className="bg-[#2E9952] rounded-full p-3">
                    <ImPriceTag size={20} className="text-white " />
                  </div>
                  <p
                    className="text-[#2E9952] font-medium overflow-hidden whitespace-nowrap
                   min-w-[200px] max-w-[400px] sm:max-w-[400px] md:max-w-[500px] truncate"
                  >
                    Log into get 10% off orders of $0.50 or more at Gardenia
                    Mediterranean Restaurant...
                  </p>
                  <div className="">
                    <p
                      onClick={() => setLogInSignUpModel(true)}
                      className="font-normal underline cursor-pointer w-[40px]
                       text-[#2E9952] whitespace-nowrap"
                    >
                      Log In
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center justify-center">
              <p
                className={`text-center text-[50px] font-thin ${!rewards ? "text-black" : "text-zinc-300"}`}
              >
                {" "}
                -{" "}
              </p>
              <p
                className={`text-center text-[50px] font-thin ${rewards ? "text-black" : "text-zinc-300"}`}
              >
                {" "}
                -{" "}
              </p>
            </div>
            {/* Show message if no items match */}
            {search.trim() !== "" &&
              Object.values(filteredSearchValues).flat().length === 0 && (
                <p className="text-start mt-4 font-semibold text-md">
                  Sorry, no menu items found for "{search}"
                  <br />
                  <span className="font-light text-md ">
                    Please try searching for something else or make sure the
                    spelling is correct.
                  </span>
                </p>
              )}
            <div className="itemsCards">
              <ItemsCard
                selectedCategory={selectedCategory}
                filteredSearchValues={filteredSearchValues}
                setIsModelOpen={setIsModelOpen}
                setIsAddItem={setIsAddItem}
                setSelectedItem={setSelectedItem}
                categoryRefs={categoryRefs}
              />
            </div>
          </div>
        </div>
        <div className="rightSection flex-col flex-[4] p-[20px] max-w-[500px] min-w-[300px] ">
          <div>
            <RightSideOrderOnlinePage
              mode={mode}
              setMode={setMode}
              isPickupModel={isPickupModel}
              setIsPickupModel={setIsPickupModel}
              cartDetails={cartDetails}
              setCartDetails={setCartDetails}
              editItems={editItems}
              deleteItems={deleteItems}
              pickupInfo={pickupInfo}
            />
          </div>
        </div>
      </div>
      {logInSignUpModel && (
        <section className="loginSignUpPage ">
          <div className="w-full h-full fixed top-0 left-0 z-50 bg-black bg-opacity-50  flex items-center justify-center ">
            <div className="relative p-9  h-[520px] w-[500px] bg-white rounded-xl overflow-auto">
              {/* close button */}
              <button
                onClick={() => setLogInSignUpModel(false)}
                className=" absolute top-0 right-0 cursor-pointer  "
              >
                <IoCloseOutline size={50} className=" text-gray-400 p-2" />
              </button>
              <div className="wrapper flex flex-col gap-5">
                <h1 className="font-bold text-center text-[20px] mt-5">
                  Log In or Sign Up
                </h1>
                <div className="w-full mt-5 rounded-full cursor-pointer bg-black hover:bg-stone-700 p-1 flex">
                  <FaGoogle size={34} className=" bg-white rounded-full p-2" />
                  <buttons className=" text-white  font-medium text-center ml-[80px] p-1 ">
                    Continue with Google
                  </buttons>
                </div>
                <div className="w-full mt-5 rounded-full cursor-pointer bg-black hover:bg-stone-700 p-1 flex">
                  <FaApple size={36} className=" bg-white rounded-full p-1" />
                  <buttons className=" text-white font-medium text-center ml-[80px] p-1">
                    Continue with Apple
                  </buttons>
                </div>
                <div className="flex items-center justify-center my-4">
                  <hr className="flex-grow border-t border-zinc-300" />
                  <p className="px-4 text-zinc-400 text-sm">OR</p>
                  <hr className="flex-grow border-t border-zinc-300" />
                </div>
                <div>
                  <label className="mt-6 text-start text-gray-500">Email</label>
                  <input
                    type="email"
                    placeholder="foodapp@food.com"
                    className="p-3 rounded-lg border border-gray-400 text-gray-500 w-full"
                  />
                </div>
                <button className="bg-[#DBDBDB] cursor-pointer p-3 text-gray-500 font-medium rounded-full w-full">
                  Continue
                </button>
                <p className="text-[#3E3E3E] text-xs text-center font-semibold whitespace-nowrap">
                  By continuing, you agree to our
                  <span className="underline hover:text-[#13AA6D] cursor-pointer">
                    {" "}
                    Terms{" "}
                  </span>{" "}
                  and{" "}
                  <span className="underline hover:text-[#13AA6D] cursor-pointer">
                    Privacy Policy.
                  </span>
                </p>
                <div className="flex items-center justify-center gap-2 mt-2 cursor-pointer">
                  <p className=" font-medium text-center">Powered by</p>
                  <div className="bg-black rounded-full p-1">
                    <GiKnifeFork size={20} className="text-white" />
                  </div>
                  <p className=" font-medium text-center">ChowNow</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {learnMore && (
        <section className="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-50  flex items-center justify-center ">
          <div className="relative p-9  h-[520px] w-[500px] bg-white rounded-xl overflow-auto">
            {/* close button */}
            <button
              onClick={() => setLearnMore(false)}
              className=" absolute top-0 right-0 cursor-pointer  "
            >
              <IoCloseOutline size={50} className=" text-gray-400 p-2" />
            </button>
            <div className="wrapper flex flex-col gap-5 p-5">
              <h1 className="font-medium text-center text-[30px] text-[#232323] mt-5">
                Collect stickers and start <br /> earning rewards!
              </h1>
              <div className="border-2 border-[#ABABAB] rounded-2xl p-5">
                <div className="grid grid-cols-4 grid-rows-2 gap-4 justify-items-center items-center ">
                  <div className="bg-[#BBEFC4] border-dotted rounded-full border-black border-2 w-[60px] h-[60px] p-2">
                    <PiPackageFill size={40} className="text-black  " />
                  </div>
                  <div className="border-dotted rounded-full border-black border-2 w-[60px] h-[60px] p-1">
                    {" "}
                  </div>
                  <div className="border-dotted rounded-full border-black border-2 w-[60px] h-[60px] p-1">
                    {" "}
                  </div>
                  <div className="border-dotted rounded-full border-black border-2 w-[60px] h-[60px] p-1">
                    {" "}
                  </div>
                  <div className="border-dotted rounded-full border-black border-2 w-[60px] h-[60px] p-1">
                    {" "}
                  </div>
                  <div className="border-dotted rounded-full border-black border-2 w-[60px] h-[60px] p-1">
                    {" "}
                  </div>
                  <div className="border-dotted rounded-full border-black border-2 w-[60px] h-[60px] p-1">
                    {" "}
                  </div>
                  <div
                    className="bg-[#BBEFC4] text-black font-semibold text-xs pt-5 p-1
                    border-dotted rounded-full border-black border-2 w-[60px] h-[60px]"
                  >
                    Reward
                  </div>
                </div>
              </div>
              <p className="text-[#3E3E3E] mt-2 text-xs font-semibold uppercase text-center">
                how it works
              </p>
              <hr className="flex-grow border-t border-2 border-[#ABABAB]" />
              <div className="flex items-center justify-around text-center w-full">
                <div className="bg-[#BBEFC4] rounded-full p-1 w-[60px] h-[60px] whitespace-nowrap">
                  <PiPackageFill size={55} className="text-stone-600" />
                </div>
                <p className="text-[#3E3E3E] text-xs font-semibold whitespace-nowrap">
                  Collect a sticker for each order of $25 or more.
                </p>
              </div>
              <div className="flex items-center justify-around text-center w-full">
                <div className="bg-[#BBEFC4] rounded-full p-1 w-[60px] h-[60px] whitespace-nowrap">
                  <SlBadge size={50} className="text-stone-600" />
                </div>
                <p className="text-[#3E3E3E] text-xs font-semibold">
                  Once you've collected 8 stickers, you'll unlock <br />
                  15% off your next order, automatically applied <br />
                  at checkout.
                </p>
              </div>
              <button className="rounded-full bg-[#13AA6D] hover:bg-green-700 px-8 py-3 w-full text-white cursor-pointer">
                Log In to Earn
              </button>
              <p className="text-[#3E3E3E] text-xs font-semibold whitespace-nowrap">
                By Participating in our rewards program, you agree to our
                <span className="underline hover:text-[#13AA6D] cursor-pointer">
                  {" "}
                  Terms.
                </span>
              </p>
            </div>
          </div>
        </section>
      )}
      {isModelOpen && selectedItem && (
        <div className="model fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-50  flex items-center justify-center ">
          <div className="relative w-[480px] h-[750px] sm:max-h-[400px] md:max-h-[620px] md:max-w-[440px] bg-white  max-w-3xl rounded-2xl">
            {/* close button */}
            <button
              onClick={modelClose}
              className=" absolute m-4 bg-white rounded-full top-0 right-0  border-none 
                cursor-pointer  "
            >
              <IoCloseOutline size={50} className=" text-gray-400 p-2" />
            </button>
            <div className="rounded-2xl">
              <img
                src={selectedItem.image}
                alt="foodImg"
                className="w-full h-[320px] sm:max-h-[380px] md:max-h-[200px] rounded-2xl"
              />
              <div className="p-5">
                <p className="font-semibold mb-4 text-[28px] text-stone-800">
                  {selectedItem.name}
                </p>
                <p className="text-sm mb-6 font-normal text-stone-800">
                  {selectedItem.description}
                </p>
              </div>
              <div className="p-4 border-t border-stone-300">
                <p className="mb-4 font-semibold text-stone-800">
                  Special Instructions
                </p>
                <textarea
                  type="text"
                  rows="3"
                  className="border border-stone-300 w-full p-2 rounded-lg mb-2"
                />
              </div>
              <div className="flex items-center justify-center gap-4 border-t border-stone-300 pt-[20px] px-4">
                <div className="bg-zinc-200 rounded-3xl px-10 py-3 flex">
                  <button
                    onClick={() => {
                      if (selectedItem.quantity <= 1) {
                        return;
                      }
                      setSelectedItem({
                        ...selectedItem,
                        quantity: selectedItem.quantity - 1,
                      });
                    }}
                    className={`text-zinc-400 mr-4 cursor-pointer font-bold
                     ${selectedItem.quantity <= 1 ? "cursor-none" : ""}`}
                  >
                    {" "}
                    -{" "}
                  </button>
                  <p className=" "> {selectedItem.quantity}</p>
                  <button
                    onClick={() =>
                      setSelectedItem({
                        ...selectedItem,
                        quantity: selectedItem.quantity + 1,
                      })
                    }
                    className="text-zinc-400 ml-4 cursor-pointer font-bold"
                  >
                    {" "}
                    +{" "}
                  </button>
                </div>
                <div className="flex rounded-full justify-center bg-[#13AA6D] px-8 py-3 w-full text-white gap-4 cursor-pointer">
                  <button onClick={handlingOrders} className="">
                    Add to orders{" "}
                  </button>
                  <p className="">
                    | ${" "}
                    {Number(selectedItem.price * selectedItem.quantity).toFixed(
                      2
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Model for pickup details-date & time rightPart 2nd one  */}
      {isPickupModel && (
        <PickupModel
          mode={mode}
          setIsPickupModel={setIsPickupModel}
          pickupInfo={pickupInfo}
          setPickupInfo={setPickupInfo}
        />
      )}
      {/* Model for outside business hours */}
      {isOutsideBusinessHours() && showAfterHours && (
        <ModelAfterBussHours setShowAfterHours={setShowAfterHours} />
      )}
      <footer className="border-t p-8">
        <FooterOrderOnline />
      </footer>
    </div>
  );
}
