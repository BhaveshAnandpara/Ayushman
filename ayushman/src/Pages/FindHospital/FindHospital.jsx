import React from 'react'
import '../FindHospital/FindHospital.css'
import axios from 'axios'
import * as ReactDOMClient from 'react-dom/client';
import { useState, useEffect, useRef } from 'react'

import Search from '../../Components/Search/Search'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import HospitalCards from '../../Components/HospitalCards/HospitalCards'

export default function FindHospital() {

  //--------------------------------------------- Declaration of Variables -----------------------------------------------

  const [advSearch, setAdvSearch] = useState(true)
  const [listOfDistricts, setListOfDistricts] = useState([])
  const [chosedDistrict, setChosedDistrict] = useState("")
  const [List, setList] = useState([])
  const [hospList, setHospList] = useState([])
  

  //--------------------------------------------- References ---------------------------------------------------

  const cardSection = useRef()

 //------------------------------------ Functions to Recieve Data ----------------------------------------------

 // function to recieve Data from Basic Search

  function getData(data) {
    setChosedDistrict(data)
  }

 // function to recieve Data from Advanced Search

  function getAdvSearchParams(data) {
    setListOfDistricts(data)
  }

 //--------------------------------------------- UseEffects ---------------------------------------------------


  useEffect(() => {

    if (chosedDistrict != '') {  
      let newList = [chosedDistrict]
      listOfDistricts.forEach(element => {
        newList.push(element)
      })      
      setList(newList) //Update List of Districts
    }
  }, [chosedDistrict , listOfDistricts])


  useEffect(() => {

    let data = ""
    let list = []

    List.forEach(ele=>{
      data = data + "_" + ele //Data for Parameters
    })

    try {
      axios.get(`http://localhost:8001/hospitalData/getHospList?district=${data}`)
        .then(function (response) {

          for (var ele of response.data) {
            list.push(ele)
          }

          setHospList(list) //Update List Of Hospitals

        })
        .catch(function (error) {
          console.log(error);
        })
    } catch (err) {
      console.log(err)
    }
  }, [List])

  
  useEffect(() => {
  
    // console.log(hospList)

    try {
      let root = ReactDOMClient.createRoot(cardSection.current)
      let HospList = []
      hospList.map(ele => {
        HospList.push(<HospitalCards hospdata={ele} key={HospList.length} />)
      })
      root.render(HospList)
    } catch (err) {
      console.log("err")
    }
  }, [hospList])


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
          <Search advanceSearch={true} getAdvSearchParams={getAdvSearchParams} />
        </div>

      </div>

      <section className='hospCardContainer ' ref={cardSection} >
      </section>

    </>
  )

}
