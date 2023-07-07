import React, { useEffect, useState } from 'react'
import {cities} from '../cities_data'
import { useAllWeatherFetch } from './apiFetch'
const Weather2 = () => {
 
  const [activeDiv, setactiveDiv] = useState();
  const {currentData,forecastData,isPending,selectedMyCity,selectedMyCityForecast}=useAllWeatherFetch();
  const [selectCity,setSelectCity]=useState();
  const [selectCityForecast,setSelectCityForecast]=useState();
  const [flag,setFlag]=useState(true);

  console.log(isPending);
  // console.log("Default",selectedMyCity);
  // console.log("Default Forecast",selectedMyCityForecast);
  const handleDivClick = (item,id)=>{
    setFlag(false);
    setSelectCity(item);
    setactiveDiv(id);
    setSelectCityForecast(forecastData[id])
  }
  useEffect(()=>{
    if(!isPending){
    setSelectCity(selectedMyCity);
    setSelectCityForecast(selectedMyCityForecast);   
    }
    // setSelectCity(selectedMyCity);
    // setSelectCity(selectedMyCity);
  },[isPending])
 
  console.log("Here",selectCity);
  console.log("forecast",selectCityForecast)
  // if(currentData){
  //   currentData.map((item)=>{
  //     console.log("currentWeather",item);
  //   })
  // }
  // console.log(forecastData);
  return (
    <>
    <div className="flex"></div>
    <div>Weather
      {
        currentData && ( 
          currentData.map((item,index)=>(
            <div key={index} className={`${
              activeDiv === index ? "bg-red-700" : "bg-gray-950"
            } flex flex-row divide-x-2 my-1  gap-5`} onClick={()=>(handleDivClick(item,index))}>{item.name}</div>
          ))
          
        )
      }
    </div>
     <div className="">
         {
          selectCity && (
            <div>{selectCity.name}</div>
          )
         }
     </div>
    </>
  )
}

export default Weather2