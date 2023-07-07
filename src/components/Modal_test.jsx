import React from "react";
import image_detect from "../assets/index";
const Modal_test = ({
  modal_togel,
  modal_handle,
  selectCity,
  selectCityForecast,
}) => {
  const currentDate = new Date();
  const currentDay = currentDate.toISOString().split("T")[0];
  console.log("I am from Modal", selectCity);
  const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dayInWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );
  const normalTimeConvert = (time_data) => {
    const [_, hour, minute] = time_data.split(/[ :]/);
    let AMorPM = Number(hour) >= 12 ? "PM" : "AM";
    let hr = Number(hour);
    hr = hr % 12 || 12;
    return String(hr) + ":" + minute + "" + AMorPM;
  };
  return (
    <div className="md:hidden">
      {/* // <!-- Main modal --> */}
      <div
        id="defaultModal"
        tabIndex="-1"
        aria-hidden="true"
        className={`fixed top-0 left-0 right-0 z-50 ${
          modal_togel ? "hidden" : "flex"
        } w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative w-full max-w-2xl max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-gray-900 rounded-lg shadow ">
            {/* <!-- Modal header --> */}
            <div className="flex items-start justify-between p-1 border-b rounded-t dark:border-gray-600">
              <h1 className="font-semibold text-lg">CITY</h1>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                data-modal-hide="defaultModal"
                onClick={() => modal_handle()}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            {selectCity && (
              <div className=" flex-1 mt-0 md:mt-12  w-full p-2  divide-y  md:max-w-[400px] max-h-screen overflow-scroll">
                <div className="flex flex-col items-center">
                  <img
                    src={image_detect(selectCity.weather[0].icon)}
                    alt=""
                    className="h-[130px] mx-0"
                  />
                  <div className="flex pb-3 flex-row gap-1 justify-around w-full items-center">
                    <div className="text-2xl font-medium ">
                      <p>{selectCity.name}</p>
                    </div>
                    <div className=" font-extrabold">
                      <p>{selectCity.weather[0].description}</p>
                    </div>
                    <div className="text-2xl font-extrabold">
                      <p>{Math.round(selectCity.main.temp)}°C</p>
                    </div>
                  </div>
                </div>
                {/* Today Forecast */}

                <div className="">
                  <p className="py-4">TODAY'S FORECAST</p>
                  <div className="flex flex-row  w-full overflow-x-auto divide-x">
                    {selectCityForecast.list
                      .splice(0, 2)
                      .filter((item) => item.dt_txt.includes(currentDay))
                      .map((item, index) => (
                        <div
                          key={index}
                          className="flex flex-col justify-center items-center w-[400px]"
                        >
                          <div className="">
                            <p className="">{normalTimeConvert(item.dt_txt)}</p>
                          </div>
                          <div className="">
                            <img
                              src={image_detect(item.weather[0].icon)}
                              alt=""
                              className="w-full md:w-[200px] mx-0"
                            />
                          </div>

                          <div className="py-2">
                            <p>{Math.round(item.main.temp)}°C</p>
                          </div>
                        </div>
                      ))}

                    <div className="flex flex-col w-full justify-center items-center">
                      <div className="">
                        <p>6:00 AM</p>
                      </div>
                      <div className="">
                        <img
                          src={image_detect("02n")}
                          alt=""
                          className="w-full md:w-[200px] mx-0"
                        />
                      </div>
                      <div className="py-2">
                        <h1>25°C</h1>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3 day Forecast */}
                {selectCityForecast && (
                  <div className="">
                    <p className="py-4">3-DAY FORECAST</p>
                    <div className="flex flex-col divide-y">
                      {selectCityForecast.list.splice(0,7).map((item, idx) => (
                         <div  key={idx}
                         className="flex flex-row items-center justify-around">
                          <p>{forecastDays[idx]}</p>

                          <div className="flex flex-row items-center -ml-10 justify-center">
                      <img
                        src={image_detect(item.weather[0].icon)}
                        alt=""
                        className="w-[90px] "
                      />
                      <div className="flex flex-col flex-wrap max-w-[10px]">Sunny Rain</div>
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal_test;
