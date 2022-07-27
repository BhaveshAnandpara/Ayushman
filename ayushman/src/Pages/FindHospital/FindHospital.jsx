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

  const [advSearch, setAdvSearch] = useState(true)
  const [listOfDistricts, setListOfDistricts] = useState([])
  const [chosedDistrict, setChosedDistrict] = useState("")
  const [List, setList] = useState([])
  const [hospList, setHospList] = useState([])


  const cardSection = useRef()

  function getData(data) {
    setChosedDistrict(data)
  }

  function getAdvSearchParams(data) {
    setListOfDistricts(data)
  }

  useEffect(() => {
    if (chosedDistrict != '') {

      let newList = [chosedDistrict]
      listOfDistricts.forEach(element => {
        newList.push(element)
      })      
      setList(newList)
    }
  }, [chosedDistrict , listOfDistricts])



  useEffect(() => {

    let data = ""
    List.forEach(ele=>{
      data = data + "_" + ele
    })

    let list = []

    try {

      axios.get(`http://localhost:8001/hospitalData/getHospList?district=${data}`)
        .then(function (response) {

          for (var ele of response.data) {
            list.push(ele)
          }

          setHospList(list)

        })
        .catch(function (error) {
          console.log(error);
        })
    } catch (err) {
      console.log(err)
    }
  }, [List])

  
  useEffect(() => {
    
    console.log(hospList)
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
