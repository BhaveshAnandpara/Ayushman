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
import AdvanceSearch from './Components/AdvanceSearch/AdvanceSearch';
import EmergencySection from '../src/Components/HospitalProfile/EmergencySection/EmergencySection'

import Hospital from './Pages/Hospitals/Hospital'

function App() {

  const [advSearch, setAdvSearch] = useState(true)




  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <section className=" search-bar-section">

        <div className='search-box '>
          <Search advanceSearch={false} />
        </div>

        <div className="advSearchToggle ">

          <p onClick={()=>{
            setAdvSearch(!advSearch)
            }} className=" advSearchBtn" >Advance Search</p>

          <div className={`search-box ${ advSearch ? " displayToggle" : "" }`} >
            <Search advanceSearch={true} />
          </div>

        </div>


      </section> */}

          <Route exact path="/basicInfo" element={<Hospital value={"basicInfo"} />}></Route>
          <Route exact path="/update" element={<Hospital value={"update"} />}></Route>
          <Route exact path="/facilities" element={<Hospital value={"facilities"} />}></Route>
          <Route exact path="/inventory" element={<Hospital value={"inventory"} />}></Route>
          <Route exact path="/rates" element={<Hospital value={"rates"} />}></Route>
          <Route exact path="/performanceReport" element={<Hospital value={"performanceReport"} />}></Route>
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
