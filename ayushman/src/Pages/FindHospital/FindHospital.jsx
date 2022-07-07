import React from 'react'
import '../FindHospital/FindHospital.css'
import axios from 'axios'

import { useState } from 'react'

import Search from '../../Components/Search/Search'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'

export default function FindHospital() {

  const [advSearch, setAdvSearch] = useState(true)
  let  hospData 

  function getData(data) {
    console.log(data[0]);

    axios.get('http://localhost:8001/hospitalData/getHospList' , {
      params:{
        state:data[0]
      }
    })
      .then(function (response) {
        hospData = response
        console.log(response.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      })

    console.log(hospData);
  }



  return (
    <>
      <Header />
      <Navbar />


      <div className='search-box '>
        <Search advanceSearch={false} getData={getData} />
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
