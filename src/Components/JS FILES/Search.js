import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GeoApiOptions, GeoApiUrl } from "./Api";
import { FaAngleDown  } from "react-icons/fa";

import f1 from "../../Image/f1.png";
import f2 from "../../Image/f2.png";
import f3 from "../../Image/f3.png";
import Forecast from "./Forecast";

const Search = ({ onSearchChange, currentWeather, forecast }) => {
  const [search, setSearch] = useState(null);


  const loadOptions = (inputVal) => {
    return fetch(
      `${GeoApiUrl}/cities?minPopulation=1000000&namePrefix=${inputVal}`,
      GeoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name} ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <div className="bg-bggu p-5  text-bluu">
      <div className="flex items-center">
        <AsyncPaginate
          placeholder="search cities"
          debounceTimeout={600}
          value={search}
          onChange={handleOnChange}
          loadOptions={loadOptions}
          className="w-1/2 border-2 border-bluu rounded-lg mr-5 cursor"
        />

        <div className="flex justify-center items-center ">
          <span className="mx">All Places </span>
          <span>
            <FaAngleDown />
          </span>
        </div>
      </div>

      <div>
        <div className="text-4xl py-4">
          <span>Weather</span>
          <span className="font-bold"> Forecast</span>
        </div>
      </div>

      <div className="font-semibold">
        <div className="flex justify-between items-end m-0">
          <div className="flex justify-center flex-col items-center m-2 ">
            <img src={f3} alt="berlin" className=" rounded-lg " />
            <p className="p-2">Berlin</p>
          </div>

          <div className="flex justify-center flex-col items-center m-2">
            <img src={f2} alt="paris" className=" rounded-lg  " />
            <p className="p-2">Paris</p>
          </div>

          <div className="flex justify-center flex-col items-center m-2">
            <img src={f1} alt="New York" className=" rounded-lg " />
            <p className="p-2">NewYork</p>
          </div>
        </div>
      </div>

      {!currentWeather ? (
        <p className="italic text-sm  p-4 text-bluu border-x-2 border-bluu border-double">
          Wherever you go, no matter what the weather, always bring your own
          sunshine. Sunshine is delicious, rain is refreshing, wind braces us
          up, snow is exhilarating; there is really no such thing as bad
          weather, only different kinds of good weather
        </p>
      ) : (
        <p> </p>
      )}
      {forecast && <Forecast forecast={forecast} />}
    </div>
  );
};

export default Search;
