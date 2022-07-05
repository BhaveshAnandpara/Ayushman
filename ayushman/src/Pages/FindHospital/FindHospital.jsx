import React from 'react'
import '../FindHospital/FindHospital.css'

import { useState } from 'react'

import Search from '../../Components/Search/Search'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'

export default function FindHospital() {

    const [advSearch, setAdvSearch] = useState(true)

  return (
<>
    <Header/>
    <Navbar/>


      <div className='search-box '>
        <Search advanceSearch={false} />
      </div>

      <div className="advSearchToggle ">

        <p onClick={() => {
          setAdvSearch(!advSearch)
        }} className=" advSearchBtn" >Advance Search</p>

        <div className={`search-box ${advSearch ? " displayToggle" : ""}`} >
          <Search advanceSearch={true} />
        </div>

      </div>

    </>
    )

}
