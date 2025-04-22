import React, { useState, useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";

export default function ItemsCard({
  selectedCategory,
  filteredSearchValues,
  setIsModelOpen,
  setIsAddItem,
  setSelectedItem,
  categoryRefs,
}) {
  return (
    <div className="itemsCard">
      <div>
        {Object.entries(filteredSearchValues)
          // .filter(([category]) =>
          //   selectedCategory === "Categories" || selectedCategory === ""
          //     ? true
          //     : category === selectedCategory
          // )
          .map(([category, items]) => (
            <div
              key={category}
              //Attaching Ref for scrolling track
              ref={(el) => (categoryRefs.current[category] = el)}
              className="mb-6"
            >
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
                          setSelectedItem(item); //set the selected item
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
          ))}
      </div>
    </div>
  );
}
