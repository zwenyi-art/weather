import { useEffect, useState } from "react";
import {
  geoApioptions,
  GEO_API_URL,
  WEATHER_API_KEY,
  WEATHER_API_URL,
} from "../api";
import { cities } from "./cities_data";
export const useIpLocate = () => {
  const [city, setCity] = useState();
  const [loc, setLoc] = useState();
  const [data, setData] = useState();
  useEffect(() => {
    try {
      const getData = setTimeout(async () => {
        const req = await fetch("https://ipinfo.io/json?token=13144c33bd5de0");
        const jsonResp = await req.json();
        setCity(jsonResp.city);
        setLoc(jsonResp.loc);
        setData(jsonResp);
      }, 1000);
      return () => clearTimeout(getData);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return { city, loc, ipData: data };
};

export const useWeatherFetch = () => {
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [forecastData, setForecastData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  useEffect(() => {
    if (lat) {
      const getData = setTimeout(async () => {
        const currentWeatherResponse = fetch(
          `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );
        const forecastWeatherResponse = fetch(
          `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );
        Promise.all([currentWeatherResponse, forecastWeatherResponse])
          .then(async (resp) => {
            const weatherResponse = await resp[0].json();
            const forecastRespone = await resp[1].json();
            setCurrentData(weatherResponse);
            setForecastData(forecastRespone);
            setIsPending(false);
            setError(null);
          })
          .catch((err) => {
            setIsPending(false);
            setError(err.message);
          });
      }, 2000);
      return () => clearTimeout(getData);
    }
  }, [lat]);

  const updateLoc = (latData, locData) => {
    console.log("welcome from api");
    setIsPending(true);
    if (latData != undefined) {
      setLat(latData);
      setLon(locData);
    }
  };
  return { currentData, forecastData, isPending, error, updateLoc };
};

export const useGeoFetch = () => {
  const [value, setValue] = useState("");
  const [flag, setFlag] = useState(false);
  const [mydata, setMydata] = useState([]);
  const [isPending, setIsPending] = useState();
  const [noData, setNoData] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    //  setMydata([]);
    console.log(value);
    const getData = setTimeout(async () => {
      try {
        const response = await fetch(
          `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${value}`,
          geoApioptions
        );
        const result = await response.json();
        if (result.data.length != 0) {
          const myresult = await result.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name},${city.countryCode}`,
            };
          });
          setMydata(myresult);
          setIsPending(false);
        } else {
          setIsPending(false);
          setNoData(true);
          setMydata([]);
          console.log("Not Found");
        }

        // setsuggestions(myresult);
      } catch (error) {
        console.log(error);
        console.log("dljaljkfjkjfkl");

        // setSearch_box(!search_box)
        // return (<div>I am not found</div>)
      }
    }, 1000);
    return () => clearTimeout(getData);
  }, [value]);
  const onChangeHandler = (e) => {
    setValue(e.target.value);
    setIsPending(true);
    setNoData(false);
  };
  const ClearData = () => {
    setMydata([]);
    setIsPending(false);
    setNoData(false);
  };
  const inputProps = {
    value: value,
    flag: flag,
    isPending,
    error,
    onChange: onChangeHandler,
    mydata,
    clear: ClearData,
    noData,
  };
  return inputProps;
};

export const useAllWeatherFetch = () => {
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [forecastData, setForecastData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = setTimeout(async () => {
      cities.map((city,index) => {
        const [lat, lon] = city.value.split(" ");
        const currentWeatherResponse = fetch(
          `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );
        const forecastWeatherResponse = fetch(
          `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );

        Promise.all([currentWeatherResponse, forecastWeatherResponse])
          .then(async (resp) => {
            const weatherResponse = await resp[0].json();
            const forecastResponse = await resp[1].json();
            const existingData = currentData.find(
              (item) => item.city === city.name
            );
            const existForecastData = forecastData.find(
              (item) => item.fcity === city.name
            );

            if (!existingData) {
              setCurrentData((preArr) => [...preArr, { ...weatherResponse }]);
            }
            if (!existForecastData) {
              setForecastData((preFArr) => [
                ...preFArr,
                { ...forecastResponse },
              ]);
            }
            if(index==cities.length-1){
              setIsPending(false);
              setError(null);
            }
           
          }).then(()=>{

          })
          .catch((err) => {
            setIsPending(false);
            setError(err.message);
          });
      });
    }, 2000);
    return () => clearTimeout(getData);
  }, []);

  return { currentData, forecastData, isPending, error };
};
