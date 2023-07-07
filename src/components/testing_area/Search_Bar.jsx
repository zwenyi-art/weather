import React, { useEffect, useState } from 'react'
import {GEO_API_URL,geoApioptions} from '../api'

const Search_Bar = ({mysearch_data}) => {
  const [cname,setCname]=useState('');
  const [mydata,setmydata]=useState('');
 
  const Search_Data =async(cname)=>{
    try {
      const response = await fetch(`${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${cname}`, geoApioptions);
      const result = await response.json();
      const myresult=await result.data.map((city)=>{
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name},${city.countryCode}`,
        };
      })
     
      await setmydata(myresult);
    } catch (error) {
      console.error(error);
    }
  }
//  useEffect(()=>{mysearch_data(mydata)},[mydata]);

  const form_handle=(event)=>{
    event.preventDefault();
    console.log("clicked");
    Search_Data(cname);
    // console.log(mydata);
    
  }
  return (
    <form onSubmit={form_handle} className="flex flex-1 items-center mt-1">
    <label htmlFor="simple-search" className="sr-only">
      Search
    </label>
    <div className="relative w-full ">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <input
        type="text"
        id="simple-search"
        className="bg-gray-900   text-[#535bf2] text-sm rounded-lg  outline-none caret-pink-600  block w-full pl-10 p-2.5   "
        placeholder="Search Cities....."
        onChange={(e)=>setCname(e.target.value)}
        required
      />
    </div>
    <button
      type="submit"
      className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
      <span className="sr-only">Search</span>
    </button>
  </form>
  )
}

export default Search_Bar