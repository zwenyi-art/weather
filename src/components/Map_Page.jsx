import React from "react";
import "leaflet/dist/leaflet.css";
import { cities } from "./cities_data";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import {} from "react";
import image_detect from "../assets/index";
import { useAllWeatherFetch } from "./apiFetch";
import { Icon, icon } from "leaflet";
const Map_Page = () => {
  const position = [21.9162, 95.956];
  const { currentData, forecastData, isPending } = useAllWeatherFetch();
  console.log(currentData);
  const customPopupStyle = {
    backgroundColor: "red", // Replace 'red' with your desired background color
    color: "blue", // Replace 'white' with your desired foreground color
    // Add any other styles you want to customize the popup
  };
  const customIcon = new Icon({
    iconUrl:
      "https://www.iconpacks.net/icons/2/free-icon-pin-location-4346.png",
    iconSize: [15, 15],
  });
  return (
    <>
      <div className="flex flex-row mt-6 gap-4 ">
        <div className="rounded-lg w-full">
          <MapContainer center={position} zoom={5} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            ></TileLayer>
            {currentData &&
              currentData.map((marker, index) => (
                <Marker
                  key={index}
                  position={[marker.coord.lat, marker.coord.lon]}
                  icon={customIcon}
                >
                  <Popup
                    className="custom-popup"
                    style={customPopupStyle}
                    closeButton={false}
                  >
                    <div className="bg-gray-800  w-28 text-white rounded-md p-2 flex flex-col items-center justify-center flex-1">
                      <div>{marker.name}</div>
                      <img
                        src={image_detect(marker.weather[0].icon)}
                        alt=""
                        className="w-full h-full object-contain "
                      />
                      <div>{Math.round(marker.main.feels_like)}°C</div>
                    </div>
                  </Popup>
                </Marker>
              ))}
          </MapContainer>
        </div>
        <div className=" w-full hidden md:flex flex-col gap-2 overflow-scroll max-h-[580px]">
          {currentData &&
            currentData.map((item, index) => (
              <div
                key={index}
                className="mx-2 w-[230px] bg-gray-700 rounded-2xl flex flex-row items-center justify-between px-4"
              >
                <div className="flex flex-row items-center justify-center">
                  <img
                    src={image_detect(item.weather[0].icon)}
                    alt=""
                    className="w-[80px] "
                  />
                  <div className="flex flex-col items-center">
                    <h1 className=" ">{item.name}</h1>
                    <p>10:23</p>
                  </div>
                </div>
                <div className="">{Math.round(item.main.feels_like)}°C</div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Map_Page;
