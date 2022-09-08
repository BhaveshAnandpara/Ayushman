import './App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';


import Home from './Pages/Home/Home'
import ApproximateCost from './Pages/Approximate-Cost/Approximate-cost'
import Feedback from './Pages/Feedback/Feedback'
import Login from './Pages/Login/Login'
import HospitalCard from './Components/HospitalCards/HospitalCards'


import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import HospitalProfile from './Pages/HospitalProfile/HospitalProfile';
import Search from './Components/Search/Search.jsx';
import EmergencySection from '../src/Components/HospitalProfile/EmergencySection/EmergencySection'
import FacilitiesSection from '../src/Components/HospitalProfile/FacilitiesSection/FacilitiesSection'
import CostEstimatorSection from '../src/Components/HospitalProfile/CostEstimatorSection/CostEstimatorSection'

import Hospital from './Pages/Hospitals/Hospital';
import Test from './Pages/test'
import FindHospital from './Pages/FindHospital/FindHospital';

import setIsLogged from './States/actions-creators/index'
import HospitalCards from './Components/HospitalCards/HospitalCards';

function App() {

  const user = useSelector(state=>state.User)
  console.log(user)
  return (
   
    <div className="App">

        <Routes>

          <Route exact path="/" element={<FindHospital/>}></Route>
          <Route exact path="/test" element={<Test/>}></Route>
          <Route exact path="/findHospital" element={<FindHospital/>}></Route>
          <Route exact path="/hospitalProfile" element={<HospitalProfile/>}></Route>
          <Route exact path="/hospitalCard/:id" element={<HospitalCards/>}></Route>

          <Route exact path="/hospitalDashboard" element={ user.isAuthenticated ? <Hospital value={"basicInfo"}/> : <Navigate to={'/login/hospital'} /> }></Route>
          <Route exact path="/hospitalDashboard/basicInfo" element={<Hospital value={"basicInfo"} />}></Route>
          <Route exact path="/hospitalDashboard/update" element={<Hospital value={"update"} />}></Route>
          <Route exact path="/hospitalDashboard/facilities" element={<Hospital value={"facilities"} />}></Route>
          <Route exact path="/hospitalDashboard/inventory" element={<Hospital value={"inventory"} />}></Route>
          <Route exact path="/hospitalDashboard/rates" element={<Hospital value={"rates"} />}></Route>
          <Route exact path="/hospitalDashboard/performanceReport" element={<Hospital value={"performanceReport"} />}></Route>

          <Route exact path="/login" element={<Login loginItem={"Patient"} />}></Route>
          <Route exact path="/login/patient" element={<Login loginItem={"Patient"} />}></Route>
          <Route exact path="/login/hospital" element={  <Login loginItem={"Hospital"} />  }></Route>
          <Route exact path="/login/medicalCouncil" element={<Login loginItem={"MedicalCouncil"} />}></Route>
        </Routes>
     
    </div >
    
    
  );
}

export default App;
