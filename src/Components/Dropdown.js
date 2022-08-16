import React, { useState } from "react";
import {
  FaAngleDown,
  FaArrowUp,
  FaCompressArrowsAlt,
  FaTemperatureLow,
  FaCloud,
} from "react-icons/fa";
import { GiWhirlwind } from "react-icons/gi";
import { DiDigitalOcean } from "react-icons/di";
import { WiHumidity } from "react-icons/wi";

const Dropdown = ({ data, certainDay, idx }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <main className="flex justify-between py-2 items-center">
        <div className="capitalize flex items-center">
          {certainDay[idx]}
          <img
            src={`icons/${data.weather[0].icon}.png`}
            className="w-8 pl-2"
            alt="weather"
          />
        </div>
        <button onClick={() => setShow(!show)}>
          {!show ? (
            <FaAngleDown className="w-8 cursor" />
          ) : (
            <FaArrowUp className="w-8 cursor" />
          )}
        </button>
      </main>

      <article>
        {show && (
          <div className="bg-bluu p-2 grid grid-cols-3 grid-gap-2 text-bggu border-bluu border-b-2 border-dashed rounded-lg font-light text-center text-sm">
            <div>
              <label className="flex items-center justify-center">
                Pressure <FaCompressArrowsAlt className="text-normal" />:
              </label>
              <label>{data.main.pressure}hPa</label>
            </div>
            <div>
              <label className="flex items-center justify-center">
                Humidity
                <WiHumidity className="text-normal" />
              </label>
              <label>{data.main.humidity}%</label>
            </div>
            <div>
              <label className="flex items-center justify-center">
                Clouds
                <FaCloud className="text-normal" />:
              </label>
              <label>{data.clouds.all}%</label>
            </div>
            <div>
              <label className="flex items-center justify-center">
                Windspeed
                <GiWhirlwind className="text-normal" />:
              </label>
              <label>{data.wind.speed} m/s</label>
            </div>
            <div>
              <label className="flex items-center justify-center">
                Sea level
                <DiDigitalOcean className="text-normal" />:
              </label>
              <label>{data.main.sea_level}m</label>
            </div>
            <div>
              <label className="flex items-center justify-center">
                Temp
                <FaTemperatureLow className="text-normal" />:
              </label>
              <label>{data.main.feels_like}°C</label>
            </div>
          </div>
        )}
      </article>
    </div>
  );
};

export default Dropdown;
