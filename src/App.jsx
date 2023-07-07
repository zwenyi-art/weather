import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main_Page from "./components/Main_Page";

import Sidebar from "./components/Sidebar";
import Cities_Page from "./components/Cities_Page";
import Testing_Page from "./components/testing_area/Testing_Page";

import Weather_Fetch from "./Weather_Fetch";


import Weather1 from "./components/__test__/Weather1";
import Parent from "./components/__test__/Parent";
import SearchBox from "./components/__test__/SearchBox";
import Weather2 from "./components/__test__/Weather2";
import Map_Page from "./components/Map_Page";
import Cities_Test from "./components/Cities_Test";
import Normal_Search from "./components/__test__/Normal_Search";
import Settings from "./components/Settings"




const App = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3 ">
      <Router>
        <Sidebar></Sidebar>
        <Routes>
          <Route index element={<Main_Page></Main_Page>}></Route>
          <Route path="/cities" element={<Cities_Test></Cities_Test>}></Route>
          <Route path="/map" element={<Map_Page></Map_Page>}></Route>
          <Route path="/settings" element={<Settings></Settings>}></Route>
          
          
        </Routes>
      </Router>
    </div>
  );
};

export default App;
