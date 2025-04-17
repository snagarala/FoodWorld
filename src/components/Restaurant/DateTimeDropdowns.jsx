import React, {useState, useRef} from 'react';
import TimeDropdown from "./TimeDropdown";
import DateDropdown from "./DateDropdown";

export default function DateTimeDropdowns() {

    const [pickupDetails, setPickupDetails] = useState(false);

    const [pickupInfo, setPickupInfo] = useState({
      date: null,
      time: null,
    });
    const dateSelectRef = useRef(null);
    const timeSelectRef = useRef(null);
  
      function handleDateTime() {
          //Check if pickupInfo.date or pickupInfo.time is null,
          // then get the current value of the Date and time component and set it to the pickInfo.
          const selectedDateValue = dateSelectRef.current?.value;
          const selectedTimeValue = timeSelectRef.current?.value;
          if (!pickupInfo.date) {
            setPickupInfo((prev) => ({ ...prev, date: selectedDateValue }));
          }
          if (!pickupInfo.time) {
            setPickupInfo((prev) => ({ ...prev, time: selectedTimeValue }));
          }
          setPickupDetails(false);
        }
  

  return (
    <div>
      <DateDropdown
                ref={dateSelectRef}
                onChange={(val) =>
                  setPickupInfo((prev) => ({ ...prev, date: val }))
                }
              />
              <TimeDropdown
                ref={timeSelectRef}
                onChange={(val) =>
                  setPickupInfo((prev) => ({ ...prev, time: val }))
                }
              />
    </div>
  )
}
