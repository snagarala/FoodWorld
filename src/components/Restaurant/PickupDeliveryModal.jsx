import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

const PickupDeliveryModal = ({ isOpen, onClose, onUpdate }) => {
  const [mode, setMode] = useState('Pickup');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const generateTimeOptions = () => {
    const times = [];
    let hour = 10;
    let minute = 0;

    while (hour < 22) {
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour > 12 ? hour - 12 : hour;
      const time = `${displayHour}:${minute === 0 ? '00' : minute} ${ampm}`;
      times.push(time);
      minute += 15;
      if (minute === 60) {
        minute = 0;
        hour++;
      }
    }
    return times;
  };

  const handleUpdate = () => {
    if (!selectedDate || !selectedTime) return;
    onUpdate({ mode, selectedDate, selectedTime });
    onClose(); // close modal
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-[400px] relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl text-zinc-600 hover:text-black">
          <IoMdClose />
        </button>

        <h2 className="text-xl font-bold mb-4">Pickup Details</h2>

        <div className="flex justify-between mb-6">
          <button
            onClick={() => setMode('Pickup')}
            className={`px-4 py-2 rounded-full font-semibold w-1/2 ${mode === 'Pickup' ? 'bg-green-600 text-white' : 'bg-zinc-100 text-zinc-600'}`}
          >
            Pickup
          </button>
          <button
            onClick={() => setMode('Delivery')}
            className={`px-4 py-2 rounded-full font-semibold w-1/2 ml-2 ${mode === 'Delivery' ? 'bg-green-600 text-white' : 'bg-zinc-100 text-zinc-600'}`}
          >
            Delivery
          </button>
        </div>

        <p className="font-semibold mb-2">Pickup Time</p>

        <select
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="block w-full p-3 mb-4 border border-stone-300 rounded-md shadow-sm focus:ring-1 focus:ring-stone-500"
        >
          <option disabled value="">Select a date</option>
          <option>Fri, Apr 11</option>
          <option>Sat, Apr 12</option>
          <option>Sun, Apr 13</option>
          <option>Mon, Apr 14</option>
        </select>

        <select
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className="block w-full p-3 mb-6 border border-stone-300 rounded-md shadow-sm focus:ring-1 focus:ring-stone-500"
        >
          <option disabled value="">Select a time</option>
          {generateTimeOptions().map((time, idx) => (
            <option key={idx}>{time}</option>
          ))}
        </select>

        <button
          onClick={handleUpdate}
          className="w-full py-3 bg-green-600 text-white rounded-full font-semibold"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default PickupDeliveryModal;
