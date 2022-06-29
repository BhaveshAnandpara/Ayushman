import React from 'react'
import { Link } from "react-router-dom";
import '../HospitalNavbar/HospitalNavbar.css'


export default function HospitalNavbar(navItem) {

  return (


    <div className=' hospNavbar'>

      <Link to="/hospitalDashboard/basicInfo" className={`hosp-nav-item ${ navItem.value==="basicInfo" ? " active-nav" : "" }`}>
        <p>Basic Info</p>
      </Link>

      <Link to="/hospitalDashboard/Update" className={`hosp-nav-item ${ navItem.value=="update" ? " active-nav" : "" }`}>
        <p>Update</p>
      </Link>

      <Link to="/hospitalDashboard/Facilities" className={`hosp-nav-item ${ navItem.value=="facilities" ? " active-nav" : "" }`}>
        <p>Facilities</p>
      </Link>

      <Link to="/hospitalDashboard/Inventory" className={`hosp-nav-item ${ navItem.value=="inventory" ? " active-nav" : "" }`}>
        <p>Inventory</p>
      </Link>

      <Link to="/hospitalDashboard/Rates" className={`hosp-nav-item ${ navItem.value=="rates" ? " active-nav" : "" }`}>
        <p>Rates</p>
      </Link>

      <Link to="/hospitalDashboard/performanceReport" className={`hosp-nav-item ${ navItem.value=="performanceReport" ? " active-nav" : "" }`}>
        <p>Performance Report</p>
      </Link>

    </div>

  )
}
