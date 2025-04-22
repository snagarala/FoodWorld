import React from "react";

 function generateTimeOptions(start = "10:00", end = "20:00") {
  const times = [];
  const [startHour, startMinute] = start.split(":").map(Number);
  const [endHour, endMinute] = end.split(":").map(Number);

  let current = new Date();
  current.setHours(startHour, startMinute, 0, 0);

  const endTime = new Date();
  endTime.setHours(endHour, endMinute, 0, 0);

  while (current <= endTime) {
    const hours = current.getHours();
    const minutes = current.getMinutes();
    const isPM = hours >= 12;
    const displayHour = hours % 12 || 12;
    const displayMinutes = minutes.toString().padStart(2, "0");
    const suffix = isPM ? "PM" : "AM";
    times.push(`${displayHour}:${displayMinutes} ${suffix}`);
    current.setMinutes(current.getMinutes() + 15);
  }

  return times;
}

export default function TimeDropdown({onChange, label}) {
  const timeOptions = generateTimeOptions("10:00", "20:00");

  return (
    <div className="mt-5">
      {label && <p className="text-sm font-semibold text-zinc-600 mb-2">{label}</p>}
      {/* <label className="block text-sm font-medium mb-2">Select a Pickup Time:</label> */}
      <select  onChange={(e) => onChange(e.target.value)}
        className="block w-full p-3 pr-10 border border-stone-300 rounded-md mt-2 shadow-sm text-stone-600 overflow-hidden
                 focus:outline-none focus:ring-1 focus:ring-stone-500 hover:ring-stone-400 hover:ring-2 cursor-pointer"
      >
        {timeOptions.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>
    </div>
  );
}
