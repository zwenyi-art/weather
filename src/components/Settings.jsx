import React from "react";
const Settings = () => {
  return (
    <section className="overflow-scroll max-h-[608px]">
      {/* <Search_Cities></Search_Cities> */}
      <div className="grid md:grid-cols-3 md:grid-flow-row grid-flow-col grid-rows-2  gap-2 mt-4">
        <div className="md:col-span-2 flex flex-col  flex-1 w-full">
          <h1 className="py-2 font-bold px-4 text-2xl">Units</h1>
          <div className="w-full p-4 bg-gray-700 rounded-2xl h-full flex flex-1 flex-col">
            <p className="font-medium text-xs py-2">TEMPERATURE</p>
            <div className="w-full p-1 flex flex-row bg-black rounded-md items-center justify-between">
              <div className="bg-slate-500 flex-1 rounded-md flex items-center justify-center">
                <p className="text-sm py-1 font-medium text-white">Celsius</p>
              </div>
              <div className="flex-1 rounded-md flex items-center justify-center">
                <p className="text-sm py-1 font-medium">Fahrenheit</p>
              </div>
            </div>
            <p className="font-medium text-xs py-2 ">WIND SPEED</p>
            <div className="w-full p-1 flex flex-row divide-x bg-black rounded-md items-center justify-between">
              <div className="bg-slate-500 flex-1 mx-2 rounded-md flex items-center justify-center">
                <p className="text-sm py-1 font-medium text-white">km/h</p>
              </div>
              <div className="flex-1 divide-x-0 flex items-center justify-center">
                <p className="text-sm py-1 font-medium"> m/s</p>
              </div>
              <div className="flex-1  flex items-center justify-center">
                <p className="text-sm py-1 font-medium">Knots</p>
              </div>
            </div>
            <p className="font-medium text-xs py-2">PRESSURE</p>
            <div className="w-full p-1  flex flex-row bg-black rounded-md items-center justify-between">
              <div className=" flex-1  flex items-center justify-center">
                <p className="text-sm py-1 font-medium">hPs</p>
              </div>
              <div className="flex-1  flex items-center justify-center">
                <p className="text-sm py-1 font-medium">Inches</p>
              </div>
              <div className="flex-1  flex items-center justify-center">
                <p className="text-sm py-1 font-medium">kpa</p>
              </div>
              <div className="flex-1 rounded-md  bg-slate-500  flex items-center justify-center">
                <p className="text-sm py-1 font-medium text-white ">mm</p>
              </div>
            </div>
            <p className="font-medium text-xs py-2">PRECIPITATION</p>
            <div className="w-full p-1 flex flex-row bg-black rounded-md items-center justify-between">
              <div className="bg-slate-500 flex-1 rounded-md flex items-center justify-center">
                <p className="text-sm py-1 font-medium text-white">Milimeters</p>
              </div>
              <div className="flex-1 rounded-md flex items-center justify-center">
                <p className="text-sm py-1 font-medium">Inches</p>
              </div>
            </div>
            <p className="font-medium text-xs py-2">DISTANCE</p>
            <div className="bg-black rounded-md p-1 ">
              <div className="w-full flex flex-row  gap-2 items-center justify-between">
                <div className="bg-slate-500 flex-1 rounded-md flex items-center justify-center">
                  <p className="text-sm py-1 font-medium text-white">Kilometers</p>
                </div>
                <div className=" flex-1  flex items-center justify-center">
                  <p className="text-sm py-1 font-medium">Miles</p>
                </div>
              </div>
            </div>
          </div>

          <h1 className="py-3 font-bold px-4 text-2xl">Notifications</h1>
          <div className="w-full flex flex-1 flex-col rounded-2xl p-4 bg-gray-700   justify-center">
            <div className="flex items-center justify-between">
              <h1 className="leading-3 font-medium text-lime-300">Notifications</h1>
              <label class="relative inline-flex items-center  cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" checked />
                <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <p className="opacity-70 text-lime-300">Be aware of the weather</p>
          </div>

          <h1 className="py-3 font-bold px-4 text-2xl">General</h1>
          <div className="w-full gap-4 flex flex-1 flex-col rounded-2xl divide-y p-4 bg-gray-700   justify-center">
            <div className="flex items-center justify-between">
              <h1 className="leading-3 font-medium text-lime-300">12-Hours Time</h1>
              <label class="relative inline-flex items-center  cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" checked />
                <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between pt-5">
              <h1 className="leading-3 font-medium text-lime-300">
                Location <br />
                <p className="opacity-70 pt-3 text-lime-300">Get Weather of your location</p>
              </h1>
              <label class="relative inline-flex items-center  cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" checked />
                <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
        <div className="md:col-span-1  mx-auto flex-1 flex flex-col items-center  gap-3 mt-12 w-[270px]">
          <div className="bg-gray-700  rounded-xl p-4 flex flex-col items-center justify-center">
            <h1 className="pb-3 font-extrabold text-2xl">Advanced</h1>
            <hr className="opacity-20" />
            <p className="py-2 font-bold">Get new experience</p>
            <ul className="pl-4 list-disc opacity-90 text-sm py-2 text-white">
              <li className="font-extrabold ">Ad free</li>
              <li className="font-extrabold ">Health activities overview</li>
              <li className="font-extrabold ">Severe weather notifications</li>
            </ul>
            <div className="flex w-full items-center justify-center rounded-2xl mt-4 bg-slate-500">
              <h1 className="font-extrabold text-2xl py-2 text-yellow-300">$5.99</h1>
              <p className="text-xs pt-2 text-green-500">/month</p>
            </div>
          </div>
          <div className="bg-gray-700 rounded-xl p-4 flex flex-col ">
            <h1 className="pb-3 font-extrabold text-base">
              Never forget your umbrella
            </h1>
            <hr className="opacity-20" />
            <p className="text-xs pt-3 opacity-70 font-semibold text-lime-50">
              Sign up for our daily weather newsletter personialized just for
              you
            </p>
            <div className="flex w-full items-center justify-center rounded-2xl mt-4 bg-blue-600">
              <p className="text-base py-1 text-white">Sign Up</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
