import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";

export default function ItemsCard({
  filteredSearchValues,
  selectedCategory,
  cartDetails,
  setCartDetails,
  isModelOpen,
  setIsModelOpen,
  isAddItem,
  setIsAddItem,
}) {
  //const [isModelOpen, setIsModelOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

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
      // Update quantity and price
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
    <div className="itemsCard">
      <div>
        {Object.entries(filteredSearchValues).map(
          ([category, items], index) => (
            <div key={category} className="mb-6">
              <h2 className="font-medium text-[28px] ml-2">{category}</h2>
              {items.map((item) => (
                <div key={item.id}>
                  <div className="flex rounded-2xl border border-zinc-300 mt-4">
                    <div className="p-4 flex-[7] flex-col mt-2">
                      <p className="font-semibold mb-4">{item.name}</p>
                      <p className="text-sm mb-4 font-thin">
                        {item.description}
                      </p>
                      <p className=""> $ {Number(item.price).toFixed(2)} </p>
                    </div>
                    <div className="flex-[3] w-[200px] h-[150px]">
                      <img
                        onClick={() => {
                          setIsModelOpen(true);
                          setIsAddItem(true);
                          setSelectedItem(item); //store the selected item
                        }}
                        src={item.image}
                        className=" rounded-2xl object-cover w-full h-full cursor-pointer"
                        alt="foodImg"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        )}
      </div>
      {isModelOpen && selectedItem && (
        <div className="model fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-50  flex items-center justify-center ">
          <div className="relative w-[480px] h-[750px] min-h-[550px] bg-white  max-w-3xl rounded-2xl">
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
                className="w-full h-[320px] min-h-[220px] rounded-2xl"
              />
              <div className="p-5">
                <p className="font-semibold mb-4 text-[28px] text-stone-800">
                  {selectedItem.name}
                </p>
                <p className="text-sm mb-8 font-normal text-stone-800">
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
                  <p className=" "> {selectedItem.quantity}</p>
                  <button
                    onClick={() =>
                      setSelectedItem({
                        ...selectedItem,
                        quantity: selectedItem.quantity + 1,
                      })
                    }
                    className="text-zinc-400 ml-4 cursor-pointer"
                  >
                    {" "}
                    +{" "}
                  </button>
                </div>
                <div className="flex rounded-full justify-center bg-[#13AA6D] px-8 py-4 w-full text-white gap-4 cursor-pointer">
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
    </div>
  );
}
