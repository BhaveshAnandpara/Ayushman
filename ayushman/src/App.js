import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import Home from './Pages/Home/Home'
import ApproximateCost from './Pages/Approximate-Cost/Approximate-cost'
import Feedback from './Pages/Feedback/Feedback'
import Login from './Pages/Login/Login'
import HospitalCard from './Components/HospitalCards/HospitalCards'


import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import HospitalProfile from './Components/HospitalProfile/HospitalProfile';
import Search from './Components/Search/Search.jsx';
import EmergencySection from '../src/Components/HospitalProfile/EmergencySection/EmergencySection'
import FacilitiesSection from '../src/Components/HospitalProfile/FacilitiesSection/FacilitiesSection'

import Hospital from './Pages/Hospitals/Hospital';
import Test from './Pages/test'

function App() {
 





  return (
   
    <div className="App">
       <EmergencySection></EmergencySection>
       <FacilitiesSection></FacilitiesSection>
     
      <BrowserRouter>
        <Routes>


          <Route exact path="/test" element={<Test/>}></Route>
          <Route exact path="/findHospital" element={<Home/>}></Route>
          <Route exact path="/hospitalProfile" element={<HospitalProfile/>}></Route>
          <Route exact path="/hospitalDashboard" element={<Hospital value={"basicInfo"} />}></Route>
          <Route exact path="/hospitalDashboard/basicInfo" element={<Hospital value={"basicInfo"} />}></Route>
          <Route exact path="/hospitalDashboard/update" element={<Hospital value={"update"} />}></Route>
          <Route exact path="/hospitalDashboard/facilities" element={<Hospital value={"facilities"} />}></Route>
          <Route exact path="/hospitalDashboard/inventory" element={<Hospital value={"inventory"} />}></Route>
          <Route exact path="/hospitalDashboard/rates" element={<Hospital value={"rates"} />}></Route>
          <Route exact path="/hospitalDashboard/performanceReport" element={<Hospital value={"performanceReport"} />}></Route>
        </Routes>
      </BrowserRouter>



    </div >
    
  );
}

export default App;
