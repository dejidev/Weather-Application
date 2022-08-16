import React, { useState } from "react";
import "./App.css";
import Search from "./Components/JS FILES/Search";
import { WeatherApi, wetherApiKey } from "./Components/JS FILES/Api";
import Home from "./Components/JS FILES/Home";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const onSearchChange = (searchData) => {
    console.log(searchData);
    const [lat, lon] = searchData.value.split(" ");

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
    <div className=" sm:flex sm:items-center justify-center sm:p-4  sm:bg-blue-500 ">
      <main className=" sm:flex  sm:justify-center sm:rounded-lg sm:px-16 sm:py-8">
        <section className="bg-bggu sm:w-1/2  ">
          <Search
            onSearchChange={onSearchChange}
            currentWeather={currentWeather}
            forecast={forecast}
            className="bg-bggu  "
          />
        </section>

        <section className="  bg-bluu  sm:w-1/2">
          <Home
            currentWeather={currentWeather}
            className="bg-bluu  "
          />
        </section>
      </main>
    </div>
  );
}

export default App;
