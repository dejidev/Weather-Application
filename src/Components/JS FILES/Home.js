import React from "react";
import { BsCloudDrizzleFill } from "react-icons/bs";
import { FaCloud } from "react-icons/fa";

const Home = ({ currentWeather }) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const day = new Date().getDay();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sept",
    "Aug",
    "Nov",
    "Dec",
  ];
  const month = new Date().getMonth();

  return (
    <div className="text-gray-100 bg-bluu py-10 sm:px-20 flex items-center flex-col text-center relative">
      <div className="flex items-center pb-5">
        {!currentWeather ? (
          <BsCloudDrizzleFill className="text-blue-500 w-20 h-20" />
        ) : (
          <img
            alt="weather"
            className="text-blue-500   w-20 h-20"
            src={`icons/${currentWeather.weather[0].icon}.png`}
            // src={`../../../public/icons/${currentWeather.weather[0].icon}.png`}
          />
        )}
        <div>
          <h2 className="text-4xl p-2">Today's</h2>
          <p className="text-gray-400 text-semibold">
            <span>{days[day]}, </span>
            <span>{months[month]}</span> <span>{new Date().getFullYear()}</span>
          </p>
        </div>
      </div>

      {!currentWeather ? (
        <div className="flex items-center py-4">
          <h1 className="text-8xl leading-none font-light">xx</h1>{" "}
          <p className="text-xl font-light">°C</p>
        </div>
      ) : (
        <div className="flex items-center py-4">
          <h1 className="text-8xl leading-none font-light">
            {Math.round(currentWeather.main.temp)}
          </h1>{" "}
          <p className="text-xl font-light">°C</p>
        </div>
      )}
      {/*  */}

      {!currentWeather ? (
        <p className="text-gray-300 p-2 text-lg">Place</p>
      ) : (
        <p className="text-gray-300 p-2 text-lg"> {currentWeather.city}</p>
      )}
      {!currentWeather ? (
        <p className="text-gray-300 p-2 ">Feels Like $ XX°C     .    Weather </p>
      ) : (
        <div className="text-gray-300 p-2">
          <p>`Feels like ${Math.round(currentWeather.main.feels_like)}°C `</p>{" "}
          <p>.</p> <p className="">{currentWeather.weather[0].description}</p>
        </div>
      )}

      {currentWeather ? (
        <p className="italic text-sm  p-4 text-bguu border-y-2 border-bggu border-double m-4">
          Wherever you go, no matter what the weather, always bring your own
          sunshine. Sunshine is delicious, rain is refreshing, wind braces us
          up, snow is exhilarating; there is really no such thing as bad
          weather, only different kinds of good weather
        </p>
      ) : (
        <p> </p>
      )}

      <FaCloud className="absolute top-4 left-4 w-16 h-16 text-gray-600 opacity-30 " />
      <FaCloud className="absolute top-32 right-2 w-24 h-24 text-gray-600 opacity-30 " />
      <BsCloudDrizzleFill className="absolute top-52 left-8 w-16 h-16 text-gray-600 opacity-30 " />
    </div>
  );
};

export default Home;
