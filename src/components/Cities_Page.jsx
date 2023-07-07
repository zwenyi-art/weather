import React, { useState } from "react";
import image_detect from "../assets/index";
import { FaThermometerHalf } from "react-icons/fa";
import Modal_test from "./Modal_test";


const Cities_Page = () => {
  const [modal_show,setmodal_show]=useState(true);
  const modal_hundle=()=>{
    setmodal_show(!modal_show);
  }
  return (
    <section className=''>
      <div className={`flex ${!modal_show && 'blur-sm md:blur-0'} flex-col md:flex-row  gap-3 md:text-base  flex-1 `}>
        {/* left Page */}
        <div className=" flex-1 flex w-full md:w-[600px]">
          <div className="w-full">
            {/* Search Bar */}
           {/* <Search_Box></Search_Box> */}
            {/* simple weather condition */}

            <div onClick={()=>(setmodal_show(!modal_show))} className=" my-3 flex-1 h-[100px] rounded-3xl bg-gray-900 min-w-full  px-4 py-2 flex flex-row  justify-between items-center">
              <div className="flex flex-row justify-center items-center" >
                <img src={image_detect("01n")} alt="" className="h-[100px] " />
                <div className="">
                  <p className="p-0 font-extrabold text-base md:text-2xl">
                    Madrid
                  </p>
                  <p className="p-0 text-sm">10:23</p>
                </div>
              </div>
              <div className="font-extrabold text-base md:text-2xl">31°C</div>
            </div>

            <div onClick={()=>(setmodal_show(!modal_show))} className=" my-3 flex-1 h-[100px] rounded-3xl bg-gray-900 min-w-full  px-4 py-2 flex flex-row  justify-between items-center">
              <div className="flex flex-row justify-center items-center ">
                <img src={image_detect("04n")} alt="" className="h-[100px] " />
                <div className="">
                  <p className="p-0 font-extrabold text-base md:text-2xl">
                    Madrid
                  </p>
                  <p className="p-0 text-sm">10:23</p>
                </div>
              </div>
              <div className="font-extrabold text-base md:text-2xl">31°C</div>
            </div>

            <div onClick={()=>(setmodal_show(!modal_show))} className=" my-3 flex-1 h-[100px] rounded-3xl bg-gray-900 min-w-full  px-4 py-2 flex flex-row  justify-between items-center">
              <div className="flex flex-row justify-center items-center ">
                <img src={image_detect("02n")} alt="" className="h-[100px] " />
                <div className="">
                  <p className="p-0 font-extrabold text-base md:text-2xl">
                    Madrid
                  </p>
                  <p className="p-0 text-sm">10:23</p>
                </div>
              </div>
              <div className="font-extrabold text-base md:text-2xl">31°C</div>
            </div>
          </div>
        </div>
        {/* right page */}
        <div className="hidden md:block flex-1 mt-0 md:mt-12  w-full p-2  divide-y  md:max-w-[400px] max-h-screen overflow-scroll">
          <div className="flex flex-row items-center gap-11">
            <div className="flex flex-col gap-8">
              <h1 className="text-4xl font-medium ">
                Madrid <br />{" "}
                <p className="text-sm opacity-80">Chance of rain:0%</p>
              </h1>
              <h1 className="text-4xl font-extrabold">31°C</h1>
            </div>
            <img
              src={image_detect("02n")}
              alt=""
              className="w-full md:w-[200px] mx-0"
            />
          </div>
          {/* Today Forecast */}

          <div className="">
            <p className="py-4">TODAY'S FORECAST</p>
            <div className="flex flex-row w-full divide-x">
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

          <div className="">
            <p className="py-4">3-DAY FORECAST</p>
            <div className="flex flex-col divide-y">
              <div className="flex flex-row items-center justify-around">
                <p>Today</p>
                <div className="flex items-center justify-center">
                  <img
                    src={image_detect("02n")}
                    alt=""
                    className="w-full md:w-[60px] mx-0"
                  />
                  <p>Sunny</p>
                </div>
                <p>36/22</p>
              </div>
              <div className="flex flex-row items-center justify-around">
                <p>Today</p>
                <div className="flex items-center justify-center">
                  <img
                    src={image_detect("02n")}
                    alt=""
                    className="w-full md:w-[60px] mx-0"
                  />
                  <p>Sunny</p>
                </div>
                <p>36/22</p>
              </div>
              <div className="flex flex-row items-center justify-around">
                <p>Today</p>
                <div className="flex items-center justify-center">
                  <img
                    src={image_detect("02n")}
                    alt=""
                    className="w-full md:w-[60px] mx-0"
                  />
                  <p>Sunny</p>
                </div>
                <p>36/22</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal_test modal_togel={modal_show} modal_hundle={modal_hundle}></Modal_test>
    </section>
  );
};

export default Cities_Page;
