import React, { useState } from "react";
import "./App.css";
import Search from "./Components/search/Search";
import { WeatherApi, wetherApiKey } from "./Components/search/Api";
import Home from "./Components/search/Home";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const onSearchChange = (searchData) => {
    console.log(searchData);
    const [lat, lon] = searchData.value.split(" ");
    console.log(`${lat} and ${lon}`);

    const currentWeatherFetch = fetch(
      `${WeatherApi}/weather?lat=${lat}&lon=${lon}&appid=${wetherApiKey}&units=metric`
    );

    const forecastFetch = fetch(
      `${WeatherApi}/forecast?lat=${lat}&lon=${lon}&appid=${wetherApiKey}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastRespoonse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastRespoonse });
      })
      .catch((err) => console.log(err));
  };

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="bg-indigo-400 ">
      <div className="sm:w-3/4">
        <Search onSearchChange={onSearchChange} className="" currentWeather={currentWeather} forecast={forecast}/>
        <Home className="" />
      </div>
    </div>
  );
}

export default App;
