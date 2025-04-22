import React, { useState, useEffect } from "react";

export default function DateDropdown({ onChange,label }) {
  const [dateOptions, setDateOptions] = useState([]);

  useEffect(() => {
    const generateDates = () => {
      const dates = [];
      const options = { weekday: "short", month: "long", day: "numeric" };

      for (let i = 0; i < 7; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        const formatted = date.toLocaleDateString("en-US", options); // e.g., "Mon, April 8"
        dates.push(formatted);
      }

      setDateOptions(dates);
    };

    generateDates();
  }, []);

  return (
    <div>
      {label && <p className="text-sm font-semibold text-zinc-600 mb-2">{label}</p>}
      <select
        onChange={(e) => onChange(e.target.value)}
        className="block w-full p-3 pr-10 border border-stone-300 rounded-md mt-2 shadow-sm text-stone-600
                 focus:outline-none focus:ring-1 focus:ring-stone-500 hover:ring-stone-400 hover:ring-2 cursor-pointer"
      >
        {dateOptions.map((date, index) => (
          <option key={index} value={date}>
            {date}
          </option>
        ))}
      </select>
    </div>
  );
}
