import React, { useEffect, useState } from 'react'
import { GEO_API_URL, geoApioptions } from "../../api";
const Search_Box_testing_Page = () => {
  const [input_data,setInputData]=useState('');
  const [suggestions, setsuggestions] = useState([]);
  useEffect(()=>{
    const getData = setTimeout(async()=>{
      try {
        const response = await fetch(
          `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${input_data}`,
          geoApioptions
        );
        const result = await response.json();
        const myresult = await result.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name},${city.countryCode}`,
          };
        });
        console.log(myresult);
      } catch (error) {
       
        console.error(error);
      }
    },2000);
    return ()=>clearTimeout(getData);
  },[input_data])
  return (
    <div>Search_Box_testing_Page <br/>
     <input type="text" name="" id=""  onChange={(e)=>(setInputData(e.target.value))}/>
    </div>
  )
}

export default Search_Box_testing_Page