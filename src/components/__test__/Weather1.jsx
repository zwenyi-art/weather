import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useWeatherFetch, useGeoFetch, useIpLocate } from "./apiFetch";
import {
  WEATHER_API_URL,
  WEATHER_API_KEY,
  GEO_API_URL,
  geoApioptions,
} from "../../api";
import { defaultConfig } from "swr/_internal";
import SearchBox from "./SearchBox";
const Weather1 = () => {
  const { loc,city,ipData } = useIpLocate();
  const { updateLoc, currentData,forecastData } = useWeatherFetch();
  const [searchData, setSearchData] = useState();
  const [flag,setFlag]=useState(false);
  //auto detect userlocation
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
  // if(data){
  //   setFlag(true);
  // }
  if(currentData.length !=0){
    console.log(currentData);
    console.log(forecastData);
  }
  return (
    <div>
      <SearchBox searchedData={handleSearch}></SearchBox>
      {currentData.length !=0 ? (
        <div className="flex text-red-500 flex-col items-center justify-center">
          <p>IP:{ipData.ip}</p>
          <p>Org:{ipData.org}</p>
          <p>{currentData.name}</p>
          <p>{currentData.main.temp}</p>
          



          <div
                          key={idx}
                          className="flex flex-row items-center justify-around"
                        >
                          <p>{forecastDays[idx]}</p>
                          <div className="flex items-center justify-center">
                            <img
                              src={image_detect(item.weather[0].icon)}
                              alt=""
                              className="w-full md:w-[60px] mx-0"
                            />
                            <p>{item.weather[0].description}</p>
                          </div>
                        </div>
        </div>
      ):''}
    </div>
  );
};

export default Weather1;
