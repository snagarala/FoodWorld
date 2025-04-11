import React, { useState, useEffect } from "react";
import { GoPerson } from "react-icons/go";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { PiPackageFill } from "react-icons/pi";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import { GiForkKnifeSpoon } from "react-icons/gi";
import ItemsCard from "./ItemsCard";
import CategoryDropDown from "./CategoryDropDown";
import { foodItems, kidsMenu } from "./foodItems";
import { ImPriceTag } from "react-icons/im";
import { IoCloseOutline } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";
import { GiKnifeFork } from "react-icons/gi";
import TimeDropdown from "./TimeDropdown";
import DateDropdown from "./DateDropdown";
import PickupDeliveryModal from "./PickupDeliveryModal";

export default function OrderOnlinePage() {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Categories");
  // Merge both menus into a single state variable
  const [allMenuItems] = useState({ ...foodItems, ...kidsMenu });
  const [search, setSearch] = useState("");

  const [filteredSearchValues, setFilteredSearchValues] = useState({});

  const [cartDetails, setCartDetails] = useCartDetails();

  const [openDetails, setOpenDetails] = useState(false);
  //when you click on itemImage model will open
  const [isModelOpen, setIsModelOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);

  //+ in "itemsCard" in model
  const [isAddItem, setIsAddItem] = useState(false);

  const [rewards, setRewards] = useState(false);

  const [logInSignUpModel, setLogInSignUpModel] = useState(false);

  const [learnMore, setLearnMore] = useState(false);

  const [pickupDetails, setPickupDetails] = useState(false);

  const [selectedDate, setSelectedDate] = useState("");

  const [mode, setMode] = useState('Pickup');

  //pickup delivery logic
  const [modalOpen, setModalOpen] = useState(false);
  const [pickupInfo, setPickupInfo] = useState(null);

  const handleUpdate = (data) => {
    setPickupInfo(data);
  };

  function useCartDetails() {
    return useState([]);
  }

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

  //index=delItemIndex [we gave in onClick]
  function deleteItems(delItemIndex) {
    setCartDetails(cartDetails.filter((item, index) => index !== delItemIndex));
  }

  function editItems(index) {
    let cartEditItem = cartDetails[index];

    let allItems = [];
    Object.entries(filteredSearchValues).map(([category, items], index) =>
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
  }
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
            <div className="flex flex-[1] gap-1 px-4 text-zinc-500 pb-2 border-l border-zinc-300 ">
              <IoSearchSharp size={20} className="mt-3 " />
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

            <div className="itemsCards">
              <ItemsCard
                filteredSearchValues={filteredSearchValues}
                setIsModelOpen={setIsModelOpen}
                setIsAddItem={setIsAddItem}
                setSelectedItem={setSelectedItem}
              />
            </div>
          </div>
        </div>
        <div className="rightSection flex-col flex-[4] p-[20px] max-w-[500px] min-w-[300px] ">
          <div className=" w-full mr-5 flex pt-[30px] mb-4 ">
            <button onClick={() => setMode('Pickup')}
            className={`bg-[#13AA6D] translate-x-8 text-white rounded-full text-center
             w-full cursor-pointer  ${mode === 'Pickup' ? "bg-[#13AA6D] text-white" : "bg-[#F2F2F2] text-black" }`}>
              PickUp
            </button>
            <button onClick={() => setMode('Delivery')}
            className={`bg-[#F2F2F2]  rounded-full w-full py-3 text-center  hover:text-green-900 cursor-pointer 
              ${mode === "Delivery" ? "bg-[#13AA6D] text-white" : "bg-[#F2F2F2] text-black" } `}>
              Delivery
            </button>
          </div>
          <div
            onClick={() => setPickupDetails(true)}
            className="border border-zinc-300 hover:border-gray-950 cursor-pointer rounded-full w-full mb-4 py-3 
              text-center flex items-center justify-center gap-2"
          >
            <CiClock2 size={20} />
            <button className="text-center text-zinc-500 ">ASAP</button>
          </div>
          <div className=" w-full rounded-2xl p-1 border border-zinc-300">
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
              {/* Pickup and Delivery */}
            <div className="min-h-[300px] flex flex-col items-center
              justify-center bg-gray-100 p-6">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-green-600 text-white px-6 py-3 rounded-full"
              >
                Choose Pickup/Delivery Time
              </button>
               
              {pickupInfo && (
                <div className="mt-4 p-4 bg-white rounded shadow-md text-sm">
                  <p>
                    <strong>Mode:</strong> {pickupInfo.mode}
                  </p>
                  <p>
                    <strong>Date:</strong> {pickupInfo.selectedDate}
                  </p>
                  <p>
                    <strong>Time:</strong> {pickupInfo.selectedTime}
                  </p>
                </div>
              )}

              <PickupDeliveryModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onUpdate={handleUpdate}
              />
            </div>

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
      {/* Model for pickup details-date & time right 2nd one  */}
      {pickupDetails && (
        <section className="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-50  flex items-center justify-center">
          <div className="relative h-[400px] w-[500px] bg-white rounded-2xl overflow-auto ">
            <div className="border-b">
              <h2 className="font-semibold absolute top-6 left-8 text-[20px]">
                Pickup Details
              </h2>
              <button
                onClick={() => setPickupDetails(false)}
                className=" absolute top-6 right-6 cursor-pointer  "
              >
                <IoCloseOutline size={50} className=" text-gray-400 p-2" />
              </button>
            </div>
            <hr className="flex-grow border-t-2  border-stone-200 mb-5 mt-[80px]" />
            <div className="  px-[40px] mb-8">
              <p className="p-2 mt-8 text-sm font-semibold">Pickup Time</p>
              <DateDropdown onChange={(value) => setSelectedDate(value)} />
              <TimeDropdown />
            </div>
            <hr className="flex-grow border-t-2  border-stone-200 mb-5" />
            <div className="flex items-center justify-center">
              <button
                className="rounded-full bg-[#13AA6D] hover:bg-green-700 w-[80%]
                      px-8 py-3 text-white cursor-pointer"
              >
                Update
              </button>
            </div>
          </div>
        </section>
      )}
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
