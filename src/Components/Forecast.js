import React, { useState } from "react";
import { FaAngleDown, FaArrowUp } from "react-icons/fa";

const Forecast = ({ Forecast }) => {
  const [show, setShow] = useState(false);
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const day = new Date().getDay();
  const certainDay = days.slice(day, days.length).concat(days.slice(0, day));
  return (
    <main>
      <div>
        <p>Hi </p>
        <button onClick={() => setShow(!show)}>
          {!show ? <FaAngleDown /> : <FaArrowUp />}
        </button>
      </div>
      {show && <p className="info">Whats Up</p>}
    </main>
  );
};

export default Forecast;
