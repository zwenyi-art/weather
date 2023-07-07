import React, { useCallback, useEffect, useState } from "react";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import { cities } from "./components/cities_data";

const Weather_Fetch = () => {
  const [currentWeather, setCurrentWeather] = useState([]);
  const [forecastWeather, setforecastWeather] = useState([]);
  const [currentTime, setcurrentTime] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);
  const [activeDiv, setactiveDiv] = useState(0);
  useEffect(() => {
    const getData = setTimeout(() => {
      cities.map((city) => {
        const [lat, lon] = city.value.split(" ");
        const currentWeatherResponse = fetch(
          `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );
        const forecastWeatherResponse = fetch(
          `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );
        Promise.all([currentWeatherResponse, forecastWeatherResponse])
          .then(async (response) => {
            const weatherResponse = await response[0].json();
            const forecastResponse = await response[1].json();

            const existingData = currentWeather.find(
              (item) => item.city === city.name
            );
            const existForecastData = forecastWeather.find(
              (item)=>item.fcity === city.name
            )
            if (!existingData) {
              setCurrentWeather((preArr) => [
                ...preArr,
                { city: city.name, ...weatherResponse },
              ]);
            }
             if(!existForecastData){
              setforecastWeather((preFArr) => [
                ...preFArr,
                { fcity: city.name, ...forecastResponse },
              ]);
             }
             
           
          })
          .catch((err) => console.log(err));
      });
    }, 1000);

    return () => clearTimeout(getData);
  }, []);
  // useEffect(()=>{
  //   console.log("Hello")
  // },[cities])
  useEffect(() => {
    if (selectedCity) {
      const timestamp = selectedCity.dt;
      const dateFormat = new Date(timestamp * 1000);
      const hour = String(dateFormat.getHours()).padStart(2, "0");
      const minutes = String(dateFormat.getMinutes()).padStart(2, "0");
      setcurrentTime({ hr: hour, min: minutes });
    }
  }, [selectedCity]);
  // console.log(currentWeather);
  const handleDivClick = (divid, city) => {
    console.log(divid, city);
    setSelectedCity(city);
    setactiveDiv(divid);
  };
  console.log(forecastWeather)
  return (
    <>
      <Map_test currentWeather={currentWeather}></Map_test>
      <div className="flex flex-col">
        <h1>Today Weather</h1>

        {currentWeather &&
          currentWeather.map((city, index) => (
            <div
              key={index}
              className={`${
                activeDiv === index ? "bg-blue-700" : "bg-gray-950"
              } flex flex-row divide-x-2 my-1  gap-5`}
              onClick={() => handleDivClick(index, city)}
            >
              <div className="">City: {city.city} </div>
              <div className="text-red-500">
                Desc: {city.weather[0].description}
              </div>

              <div className="text-red-500">Desc: {city.weather[0].icon}</div>
              <div className="text-red-500">Temp: {city.main.temp}deg</div>
              <div className="text-red-500">Felike: {city.main.feels_like}</div>
            </div>
          ))}
        <h1>Selected Weather</h1>
        {selectedCity !=null ?  (
          <div className="flex flex-row">
            <div className="">City: {selectedCity.city} </div>
            <div className="text-red-500">
              Desc: {selectedCity.weather[0].description}
            </div>
            <div className="text-red-500">
              Time: {currentTime.hr}:{currentTime.min}
            </div>
            <div className="text-red-500">
              Desc: {selectedCity.weather[0].icon}
            </div>
            <div className="text-red-500">
              Temp: {selectedCity.main.temp}deg
            </div>
            <div className="text-red-500">
              Felike: {selectedCity.main.feels_like}
            </div>
          </div>
        ):(
          currentWeather.length > 0 &&(
            <div className="flex flex-row">
            <div className="">City: {currentWeather[0].city} </div>
            <div className="text-red-500">
              Desc: {currentWeather[0].weather[0].description}
            </div>
            <div className="text-red-500">
              Desc: {currentWeather[0].weather[0].icon}
            </div>
            <div className="text-red-500">
              Temp: {currentWeather[0].main.temp}deg
            </div>
            <div className="text-red-500">
              Felike: {currentWeather[0].main.feels_like}
            </div>
          </div>
          )
        )}
      </div>
    </>
  );
};

export default Weather_Fetch;
