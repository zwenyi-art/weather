import React from "react";
import Modal_test from "./Modal_test";
import { useState, useEffect } from "react";
import image_detect from "../assets";
import { useAllWeatherFetch } from "./__test__/apiFetch";
import SearchBox from "./__test__/SearchBox";
const Cities_Test = () => {
  const {
    currentData,
    forecastData,
    isPending,
    selectedMyCity,
    selectedMyCityForecast,
  } = useAllWeatherFetch();
  const [modal_show, setmodal_show] = useState(true);
  const [selectCity, setSelectCity] = useState();
  const [selectCityForecast, setSelectCityForecast] = useState();
  const [activeDiv, setactiveDiv] = useState(0);
  const [inputdata, setInputdata] = useState("");
  const currentDate = new Date();
  const currentDay = currentDate.toISOString().split("T")[0];
  const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dayInWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );

  const handleDivClick = (item, id) => {
    setSelectCity(item);
    setmodal_show(!modal_show);
    setactiveDiv(id);
    setSelectCityForecast(forecastData[id]);
  };
  const normalTimeConvert = (time_data) => {
    const [_, hour, minute] = time_data.split(/[ :]/);
    let AMorPM = Number(hour) >= 12 ? "PM" : "AM";
    let hr = Number(hour);
    hr = hr % 12 || 12;
    return String(hr) + ":" + minute + "" + AMorPM;
  };
  // const modal_hundle=()=>{
  //   setmodal_show(!modal_show);
  //   // setSelectCity(item);
  //   // setactiveDiv(id);
  //   // setSelectCityForecast(forecastData[id])

  // }

  const modal_handle = () => {
    setmodal_show(!modal_show);
  };

  const timeStampCvt = (timestamp) => {
    const dateFormat = new Date(timestamp);
    let hours = dateFormat.getHours();
    let AmorPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    let minutes = dateFormat.getMinutes();
    return hours + ":" + minutes + "" + AmorPm;
    // console.log(hours,minutes,AmorPm);
  };

  useEffect(() => {
    if (!isPending) {
      setSelectCity(selectedMyCity);
      setSelectCityForecast(selectedMyCityForecast);
    }
    // setSelectCity(selectedMyCity);
    // setSelectCity(selectedMyCity);
  }, [isPending]);
  console.log("Here", selectCity);
  console.log("forecast", selectCityForecast);
  return (
    <>
      {isPending && (
        <div className="w-full h-screen bg-transparent absolute mx-auto  flex items-center justify-center ">
          <span class="loader "></span>
        </div>
      )}
      <section className="">
        <div
          className={`flex ${
            !modal_show && "blur-sm md:blur-0"
          }  flex-col md:flex-row  gap-3 md:text-base  flex-1 `}
        >
          {/* left Page */}
          <div className=" flex-1 flex flex-col w-full md:w-[600px] max-h-full">
            <div className="relative ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-800 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Cities..."
                onChange={(e) =>
                  setInputdata(e.currentTarget.value.toLowerCase())
                }
                required
              />
            </div>

            <div className="w-full overflow-scroll max-h-screen">
              {/* Search Bar */}
              {/* <Search_Box></Search_Box> */}

              {/* simple weather condition */}
              {currentData &&
                currentData
                  .filter((item) => {
                    return inputdata.toLowerCase() === ""
                      ? item
                      : item.name.toLowerCase().includes(inputdata);
                  })
                  .map((item, index) => (
                    <div
                      key={index}
                      onClick={() => handleDivClick(item, index)}
                      className=" my-3 flex-1 h-[100px] rounded-3xl bg-gray-900 min-w-full  px-4 py-2 flex flex-row  justify-between items-center"
                    >
                      <div className="flex flex-row justify-center items-center">
                        <img
                          src={image_detect(item.weather[0].icon)}
                          alt=""
                          className="h-[100px] "
                        />
                        <div className="">
                          <p className="p-0 font-extrabold text-base md:text-2xl">
                            {item.name}
                          </p>
                          <p className="p-0 text-sm">{timeStampCvt(item.dt)}</p>
                        </div>
                      </div>
                      <div className="font-extrabold text-base md:text-2xl">
                      {Math.round(item.main.temp)}°C
                      </div>
                    </div>
                  ))}
            </div>
          </div>
          {/* right page */}
          {selectCity && (
            <div className="hidden md:block flex-1 mt-0 md:mt-12  w-full p-2  divide-y  md:max-w-[400px] max-h-screen overflow-scroll">
              <div className="flex flex-row items-center gap-11">
                <div className="flex flex-col gap-8">
                  <h1 className="text-4xl font-medium ">
                    {selectCity.name} <br />{" "}
                    <p className="text-sm opacity-80">Chance of rain:0%</p>
                  </h1>
                  <h1 className="text-4xl font-extrabold">
                    {Math.round(selectCity.main.temp)}°C
                  </h1>
                </div>
                <img
                  src={image_detect(selectCity.weather[0].icon)}
                  alt=""
                  className="w-full md:w-[200px] mx-0"
                />
              </div>
              {/* Today Forecast */}

              <div className="">
                <p className="py-4">TODAY'S FORECAST</p>
                <div className="flex flex-row w-full divide-x">
                  {selectCityForecast.list
                    .splice(0, 2)
                    .filter((item) => item.dt_txt.includes(currentDay))
                    .map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col w-full justify-center items-center"
                      >
                        <div className="">
                          <p>{normalTimeConvert(item.dt_txt)}</p>
                        </div>
                        <div className="">
                          <img
                            src={image_detect(item.weather[0].icon)}
                            alt=""
                            className="w-[100px] mx-0"
                          />
                        </div>
                        <div className="py-2">
                          <h1>{Math.round(item.main.temp)}°C</h1>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* 3 day Forecast */}

              <div className="">
                <p className="py-4">3-DAY FORECAST</p>
                <div className="flex flex-col divide-y">
                  {selectCityForecast.list.splice(0, 3).map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-row items-center justify-around"
                    >
                      <p>{forecastDays[index]}</p>
                      <div className="flex items-center justify-center">
                        <img
                          src={image_detect(item.weather[0].icon)}
                          alt=""
                          className="w-full md:w-[60px] mx-0"
                        />
                        <div className="flex flex-col flex-wrap max-w-[10px]">
                          {item.weather[0].description}
                        </div>
                      </div>
                      <p>
                        {Math.round(item.main.temp_min)}/
                        {Math.round(item.main.temp_max)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <Modal_test
          modal_togel={modal_show}
          modal_handle={modal_handle}
          selectCity={selectCity}
          selectCityForecast={selectCityForecast}
        ></Modal_test>
      </section>
    </>
  );
};

export default Cities_Test;
