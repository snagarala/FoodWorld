import React from "react";
import { foodItems, kidsMenu } from "./foodItems";

export default function ItemsCard() {
  
  return (
    <div className="itemsCard">
      {Object.entries(foodItems).map(([category, items]) => (
        //Object.entries - will get both keys-category, values-items
        //console.log(`items: ${JSON.stringify(items)}`);
        <div key={category} className="mb-6">
          <h2 className="font-medium text-[28px] ml-2">{category}</h2>
          {items.map((item) => (
            <div key={item.id}>
              <div className="flex rounded-2xl border mt-4">
                <div className="p-4 flex-[7] flex-col mt-2">
                  <p className="font-semibold mb-4">{item.name}</p>
                  <p className="text-sm mb-4 font-thin">{item.description}</p>
                  <p className="">$ {Number(item.price).toFixed(2)} </p>
                </div>
                <div className="flex-[3] w-[200px] h-[150px]">
                  <img
                    src={item.image}
                    className="rounded-2xl object-cover w-full h-full"
                    alt="foodImg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}

      <h1 className="font-semibold text-[25px] ml-2 underline mt-4 text-green-600">
        Kids Menu
      </h1>
      {Object.entries(kidsMenu).map(([category, items]) => (
      <div key={category} className="mb-6">
            <h2 className="font-medium text-[28px] ml-2">{category}</h2>
          { items.map((item) => (
          <div key={item.id}>
             <div className="flex rounded-2xl border mt-4">
                 <div className="p-4 flex-[7] flex-col mt-2">
                     <p className="font-semibold mb-4">{item.name}</p>
                     <p className="text-sm mb-4 font-thin">{item.description}</p>
                     <p className="">$ {Number(item.price).toFixed(2)} </p>
                  </div>
                  <div className="flex-[3] w-[200px] h-[150px]">
                     <img
                       src={item.image}
                       className="rounded-2xl object-cover w-full h-full"
                        alt="foodImg"/>
                   </div>
               </div>
          </div>
            ))}
       </div>
      ))}
 </div>
  );
}
