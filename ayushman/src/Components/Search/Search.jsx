import React from 'react'
import '../Search/Search.css'

export default function Search() {
  return (
    <div className='search-container '>

      <p className="container-title">Search Hospitals</p>

<div className="all-search-parameters ">
      <div className="search-parameters ">

        <div className="stateAndDistrict">
          <input className="search-input" type="text" placeholder="State" />
          <input className="search-input" type="text" placeholder="District" />
        </div>

      <div className="">
        <input className='SearchByHospitalName search-input  ' type="text" placeholder="Hospital Name" />
      </div>

      </div>

          <button className="searchButton " type="button">Search</button>
</div>
    </div>
  )
}
