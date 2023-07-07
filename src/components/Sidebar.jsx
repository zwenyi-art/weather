import React, { useState } from "react";
import { TiWeatherPartlySunny, TiWeatherDownpour } from "react-icons/ti";
import { AiOutlineBars } from "react-icons/ai";
import { FaRegMap } from "react-icons/fa";
import { ImEqualizer } from "react-icons/im";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className=" flex flex-col flex-1 text-[#535bf2]  w-full  md:max-w-[100px]">
      <div className=" p-4 flex flex-row md:flex-col gap-20 bg-gray-900 md:m-1 md:rounded-md justify-between md:justify-start  items-center md:h-full ">
        <h1 className="font-medium text-lime-400 text-3xl">
          <TiWeatherPartlySunny></TiWeatherPartlySunny>
        </h1>
        <button
          onClick={() => setToggle(!toggle)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-lime-400 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <ul className="hidden md:flex flex-col flex-1 gap-11">
          <NavLink to="/">
            <li className=" flex flex-col justify-center items-center">
              <TiWeatherDownpour className="font-medium text-3xl text-yellow-50"></TiWeatherDownpour>
              <p className="text-white">Weather</p>
            </li>
          </NavLink>
          <NavLink to="/cities">
            <li className=" flex flex-col justify-center items-center py-2">
              <AiOutlineBars className="font-medium text-3xl text-yellow-50"></AiOutlineBars>
              <p className="text-white">Cities</p>
            </li>
          </NavLink>

          <NavLink to="/map">
            <li className=" flex flex-col justify-center items-center py-2">
              <FaRegMap className="font-medium text-3xl text-yellow-50"></FaRegMap>
              <p className="text-white">Map</p>
            </li>
          </NavLink>
          <NavLink to="/settings">
            <li className=" flex flex-col justify-center items-center py-2">
              <ImEqualizer className="font-medium text-3xl text-yellow-50"></ImEqualizer>
              <p className="text-white">Setting</p>
            </li>
          </NavLink>
        </ul>
      </div>
      <div
        className={`md:hidden transition  delay-300 ${
          toggle ? "flex" : "hidden"
        }  flex-row justify-around gap-2 w-auto px-4 py-3`}
      >
        <NavLink to="/">
          <p className="">Weather</p>
        </NavLink>
        <NavLink to="/cities">
          <p className="">Cities</p>
        </NavLink>
        <NavLink to="/map">
          <p className="">Map</p>
        </NavLink>
        <NavLink to="/settings">
          <p className="">Setting</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
