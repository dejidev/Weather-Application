import React from "react";
import Dropdown from "../Dropdown";
import { TiWeatherStormy } from "react-icons/ti";

const Forecast = ({ forecast }) => {
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
        <h1 className="text-xl font-semibold flex items-center">
          <span className="pr-1"> Days </span>
          <TiWeatherStormy />
        </h1>
      </div>
      <section>
        <section>
          {forecast.list.slice(0, 7).map((data, index) => {
            return (
              <>
                <Dropdown
                  data={data}
                  key={index}
                  certainDay={certainDay}
                  idx={index}
                />
              </>
            );
          })}
        </section>
      </section>
    </main>
  );
};

export default Forecast;
