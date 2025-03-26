import React, {useState} from 'react';

export default function CategoryDropDown({values,selectedCategory,setSelectedCategory,setOpen}) {

  return (
    <div className="absolute border left-5 z-10 bg-white w-[300px] mt-9 pb-3 shadow-2xl rounded-lg hover:h-auto overflow-hidden ">
   
    {values.map((value) => {
      return (
        <span key={value.id}
          className={`box px-4 py-3 flex text-sm hover:bg-[#F5F5F6] cursor-pointer
           ${value.name === selectedCategory.name ? 'bg-gray-200' : ''}`}
          onClick={() => {
            setSelectedCategory(value.name);
            setOpen(false);
          }}
        >
          {value.name}
        </span>
      );
    })}

    </div>
  )
}
