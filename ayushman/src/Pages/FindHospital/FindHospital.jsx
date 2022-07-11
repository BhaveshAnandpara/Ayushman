import React from 'react'
import '../FindHospital/FindHospital.css'
import axios from 'axios'
import * as ReactDOMClient from 'react-dom/client';
import { useState, useEffect , useRef } from 'react'

import Search from '../../Components/Search/Search'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import HospitalCards from '../../Components/HospitalCards/HospitalCards'

export default function FindHospital() {

  const [advSearch, setAdvSearch] = useState(true)
  const [List, setList] = useState([])
  const [isListPresent, setIsListPresent] = useState(false)

  let arr = []

  let cards = []

  const cardSection = useRef()

  function getData(data) {
    setList(data)
  }

  useEffect(() => {
    try{
      let root = ReactDOMClient.createRoot( cardSection.current )
      let HospList = []
      console.log(List)
      List.map( ele=>{
        HospList.push(<HospitalCards hospdata={ele} key={HospList.length} />)
      })
      root.render(HospList)
    }catch(err){
      console.log(err)
    }
}, [List])   


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

      <section className='hospCardContainer ' ref={cardSection} >
      </section>

    </>
  )

}
