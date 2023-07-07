import React, { useEffect } from "react";
import { useState } from "react";
import image_detect from "../assets/index";
import { FaThermometerHalf } from "react-icons/fa";
import { BsWind } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { WiRaindrop } from "react-icons/wi";
import SearchBox from "./SearchBox";
import { useWeatherFetch, useIpLocate } from "./apiFetch";
const Main_Page = () => {
  const currentDate = new Date();
  const currentDay = currentDate.toISOString().split("T")[0];
  const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dayInWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );
  const { loc, city, ipData } = useIpLocate();
  const { updateLoc, currentData, forecastData, isPending } = useWeatherFetch();
  const [searchData, setSearchData] = useState();
  const [flag, setFlag] = useState(false);
  //auto detect location
  useEffect(() => {
    if (loc != undefined) {
      console.log("Hello", loc);
      const [lat, lon] = loc.split(",");
      updateLoc(lat, lon);
    }
  }, [loc]);

  useEffect(() => {
    if (searchData) {
      const [lat, lon] = searchData.value.split(" ");
      updateLoc(lat, lon);
      console.log("lksfklsjfklsjk");
    }
  }, [searchData]);

  const handleSearch = (data) => {
    console.log("SelectedData", data);
    setSearchData(data);
  };
  // if(currentData.length !=0){
  //   console.log(currentData);
  //   console.log(forecastData);
  // }
  console.log(isPending);
  const timeStampCvt = (timestamp) => {
    const dateFormat = new Date(timestamp);
    let hours = dateFormat.getHours();
    let AmorPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    let minutes = dateFormat.getMinutes();
    return hours + ":" + minutes + "" + AmorPm;
    // console.log(hours,minutes,AmorPm);
  };

  const normalTimeConvert = (time_data) => {
    const [_, hour, minute] = time_data.split(/[ :]/);
    let AMorPM = Number(hour) >= 12 ? "PM" : "AM";
    let hr = Number(hour);
    hr = hr % 12 || 12;
    return String(hr) + ":" + minute + "" + AMorPM;
  };

  console.log(ipData);
  return (
    <>
      {isPending && (
        <div className="w-full h-screen bg-transparent absolute mx-auto  flex items-center justify-center ">
          <span class="loader "></span>
        </div>
      )}

      <section className="">
        <div className="flex flex-col md:flex-row  gap-3 md:text-base  flex-1 ">
          {/* left Page */}
          <div className=" flex-1 flex w-full md:w-[600px]">
            <div className="w-full">
              {/* Search Bar */}
              <SearchBox searchedData={handleSearch}></SearchBox>
              {/* simple weather condition */}
              {currentData.length != 0 && (
                <div className="  md:flex-1 md:h-[170px] min-w-full  md:px-4 py-2 flex flex-col-reverse md:flex-row items-center justify-between">
                  <div className="md:flex-1 md:w-full px-6 py-3 rounded-lg bg-gray-900 md:bg-transparent shadow-inner  shadow-green-600/30  h-full flex flex-col justify-around">
                    <div className="flex flex-col">
                      <h1 className="text-3xl  font-extrabold">
                        {currentData.name}
                      </h1>
                      <p className="text-red-500 py-3">
                        Current IP: {ipData.ip}
                      </p>
                    </div>
                    <p className="text-3xl font-extrabold">
                      {Math.round(currentData.main.temp)}°C
                    </p>
                  </div>
                  <div className="h-[200px] w-full md:flex-1">
                    <img
                      src={image_detect(currentData.weather[0].icon)}
                      alt=""
                      className="w-full h-full object-contain "
                    />
                  </div>
                </div>
              )}
              {/* Today Forecast */}

              {forecastData.length != 0 && (
                <div
                  className="bg-gray-900 md:bg-transparent hidden h-
              w-full p-2  rounded-2xl  md:flex flex-col gap-2 shadow-inner  shadow-fuchsia-600/30"
                >
                  <p className="font-bold px-4">TODAY'S FORECAST</p>
                  <div className="flex divide-x flex-row flex-1 justify-center items-center ">
                    {forecastData.list
                      .filter((item) => item.dt_txt.includes(currentDay))
                      .map((item, index) => (
                        <div
                          key={index}
                          className="flex flex-col justify-center items-center px-2"
                        >
                          <p>{normalTimeConvert(item.dt_txt)}</p>
                          <img
                            src={image_detect(item.weather[0].icon)}
                            alt=""
                            className=" h-[80px] object-contain "
                          />
                          <p>{Math.round(item.main.temp)}°C</p>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* conditions */}
              {currentData.length != 0 && (
                <div className="mx-2 bg-gray-900 md:bg-transparent shadow-inner  shadow-green-600/30 h-[188px]  my-3 rounded-2xl flex flex-col">
                  <div className="flex flex-row items-center justify-between px-6 pt-3">
                    <h1>AIR CONDITIONS</h1>
                  </div>

                  <div className="grid grid-cols-2 grid-rows-2 gap-3 pl-4 mt-2">
                    <div className="flex flex-col justify-center ">
                      <div className="flex flex-row items-center ">
                        <FaThermometerHalf className="text-2xl"></FaThermometerHalf>
                        <p className="p-0 pl-1">Real Feed</p>
                      </div>
                      <div className="pl-7">
                        <span className="text-xl font-medium">
                          {Math.round(currentData.main.feels_like)}°C
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center ">
                      <div className="flex flex-row items-center ">
                        <BsWind className="text-2xl"></BsWind>
                        <p className="p-0 pl-1">Wind</p>
                      </div>
                      <div className="pl-7">
                        <span className="text-xl font-medium">
                          {currentData.wind.speed}meter/sec
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center ">
                      <div className="flex flex-row items-center ">
                        <CiSettings className="text-2xl"></CiSettings>
                        <p className="p-0 pl-1">UV Index</p>
                      </div>
                      <div className="pl-7">
                        <span className="text-xl font-medium">3</span>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center ">
                      <div className="flex flex-row items-center ">
                        <WiRaindrop className="text-2xl"></WiRaindrop>
                        <p className="p-0 pl-1">Rain Chance</p>
                      </div>
                      <div className="pl-7">
                        <span className="text-xl font-medium">..%</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* right page */}
          {forecastData.length != 0 && (
            <div className="shadow-inner  shadow-green-600/30 max-h-full flex-1 mt-0 md:mt-12  w-full pt-3 px-3  bg-gray-900 md:rounded-2xl  md:max-w-[320px] ">
              <h1 className="">7-DAY FORECAST</h1>

              <div className="flex flex-col  max-h-screen  overflow-scroll  w-full divide-y divide-green-500 duration-300 ease-in-out hover:divide-y-0 ">
                {forecastData.list.splice(0, 7).map((item, idx) => (
                  <div
                    key={idx}
                    className="flex px-5 flex-row items-center justify-between py-6"
                  >
                    <p className="">{forecastDays[idx]}</p>
                    <div className="flex flex-row items-center -ml-10 justify-center">
                      <img
                        src={image_detect(item.weather[0].icon)}
                        alt=""
                        className="w-[90px] "
                      />
                      <div className="flex flex-col flex-wrap max-w-[10px]">
                        Sunny Rain
                      </div>
                    </div>
                    <p className="ml-5">
                      {Math.round(item.main.temp_min)}/
                      {Math.round(item.main.temp_max)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Main_Page;
