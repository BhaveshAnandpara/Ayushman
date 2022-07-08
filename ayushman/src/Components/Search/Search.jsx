import React, { useEffect } from 'react'
import { useState } from 'react';
import Select from 'react-select';
import axios from 'axios'


import '../Search/Search.css'
import myJSON from '../../JsonFiles/stateAndDistrict.json'

export default function Search(props) {


  let tagCount = 1

  let selectedState = ""
  let selectedDistrict = ""
  let pincode = ""

  const State = []
  const District = []
  const Hospital = []

  function stateDropdown() {
    myJSON.states.forEach(element => {
      const state = element.state
      const obj = { label: state, value: state }
      State.push(obj)
    });
  }



  function districtDropdown() {


    myJSON.states.forEach(element => {

      if (element.state === selectedState) {
        District.length = 0 // Empty District Array Before Push so that if Other State is Selected Distrcits will be Overidden
        element.districts.forEach(district => {
          const obj = { label: district, value: district }
          District.push(obj)
        })
      }

    });
  }

  function setState(value) {
    selectedState = value
    districtDropdown()
  }

  function setDistrict(value) {
    selectedDistrict = value
    getHospital()
  }


  function setPincode() {
    console.log(document.querySelector(".pincode-input").value)
  }

  stateDropdown()

  const typeOfHospitals = [
    { label: 'Private Hospital', value: 'Private Hospital' },
    { label: 'Government Hospital', value: 'Government Hospital' },
    { label: 'Semi-Goverment Hospital', value: 'Semi-Goverment Hospital' },
    { label: 'Charitable Hospital', value: 'Charitable Hospital' },
  ]

  const selectedOptions = []

  const selectOption = (value) => {

    if (!selectedOptions.includes(value)) {
      selectedOptions.push(value)
      showTags(value)
    }

  }

  const showTags = (value) => {

    let tag = document.createElement("div")
    tag.setAttribute("class", "tag")
    tag.setAttribute("id", `${tagCount}`)



    let span = document.createElement("span")
    span.setAttribute("id", "tagText")
    span.appendChild(document.createTextNode(value))
    tag.appendChild(span)

    let cross = document.createElement("div")
    cross.setAttribute("class", "cross")
    cross.setAttribute("id", `${tagCount++}`)
    cross.onclick = deleteTag
    tag.appendChild(cross)

    let container = document.getElementsByClassName('tag-container')[0]
    container.appendChild(tag)

  }

  const deleteTag = (event) => {

    let tag = document.getElementById(event.target.id)
    let tagText = tag.firstChild.textContent
    tag.remove()

    let index = selectedOptions.indexOf(tagText)
    selectedOptions.splice(index, 1)
    console.log(selectedOptions)

  }

  const dashboardStyle = {
    width: "100%"
  }


  const customStyles = {
    input: (provided, state) => ({
      ...provided,
      padding: '0px',
      border: 'none',
      outline: 'none'
    }),

    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: '#0D4F8C',
      width: '36px',
      height: '36px'
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: 'none',
      border: 'none',
      boxShadow: 'none',
      "&:hover": {
        border: 'none !important',
      }
    }),
    container: (provided, state) => ({
      ...provided,
      "&:hover": {
        border: 'none',
      }
    }),
    menulist: (provided, state) => ({
      ...provided,
      color: "red"
    })
  }

  const hospSearch = {
    position: "absolute ! important"
  }

  function searchValues() {

    if (selectedState === "") {
      alert("Please Select State")
    }
    else if (selectedDistrict === "") {
      alert("Please Select District")
    }
    else {
      const searchData = [selectedState, selectedDistrict]
      return searchData
    }
  }

  function getHospital() {

    axios.get('http://localhost:8001/hospitalData/getHospList', {
      params: {
        state: selectedState,
        district: selectedDistrict
      }
    })
      .then(function (response) {
        const hospData = response.data[0]
        const hosp = response.data[0].hosp_name

        const obj = { label: hosp, value: hosp }
        Hospital.push(obj)
        console.log(Hospital);

      })
      .catch(function (error) {
        console.log(error);
      })



  }


  return (<>
    {
      (!props.stateAndDistrictOnly && !props.searchHospitalOnly) &&
      <div className='search-container '>

        {/* Normal Search */}


        {(!props.advanceSearch && !props.stateAndDistrictOnly && !props.searchHospitalOnly) &&
          <p className="container-title">Search Hospitals</p>
        }



        {(!props.advanceSearch && !props.stateAndDistrictOnly && !props.searchHospitalOnly) &&
          <div className="all-search-parameters ">
            <div className="search-parameters ">

              <div className="stateAndDistrict ">



                <div className=''>
                  <div className='search-input-conatainer'>
                    <Select styles={customStyles} options={State} className="search-input" onChange={opt => setState(opt.value)} id='state-input' placeholder="State" />
                  </div>
                </div>

                <div className=''>
                  <div className='search-input-conatainer'>
                    <Select styles={customStyles} options={District} className="search-input" onChange={opt => setDistrict(opt.value)} id='state-input' placeholder="District" />
                  </div>
                </div>


              </div>

              <div className="">
                <Select styles={customStyles} options={Hospital} className="search-input SearchByHospitalName" onChange={opt => console.log(opt.value)} id='state-input' placeholder="Search Hospital" />
              </div>

            </div>

            <button className="btn " type="button" onClick={() => props.getData(searchValues())} >Search</button>
          </div>

        }

        {
          props.advanceSearch &&
          <div className="all-search-parameters advSearch">
            <div className="search-parameters ">

              <div className="stateAndDistrict advSearch-stateAndDistrict">


                <div className=''>
                  <div className='search-input-conatainer'>
                    <Select styles={customStyles} options={State} className="search-input"
                      onChange={
                        opt => {
                          selectOption(opt.value)
                          setState(opt.value)
                        }
                      }


                      id='state-input' placeholder="State" value="State" />
                  </div>
                </div>

                <div className=''>
                  <div className='search-input-conatainer'>
                    <Select styles={customStyles} options={District} className="search-input"
                      onChange={
                        opt => {
                          selectOption(opt.value)
                          setDistrict(opt.value)
                        }
                      }
                      id='state-input' value="District" placeholder="District" />
                  </div>
                </div>

              </div>

              <div className="tag-container">

              </div>


              <p className="container-title" >Type of Hospitals</p>

              <div className="typeOfHosp-container">
                {
                  typeOfHospitals.map((ele) => {
                    return (
                      <span> <input type="checkbox" name="" id="search-checkbox" /> {ele.value} </span>
                    );
                  })
                }
              </div>

              <button className="btn-sm " type="button" > Save </button>
            </div>

          </div>

        }
      </div>
    }

    {props.stateAndDistrictOnly &&

      <div className="search-container-dashboard" style={dashboardStyle}>

        <div className="all-search-parameters ">
          <div className="search-parameters-dashboard " style={dashboardStyle} >

            <div className="stateAndDistrict-dashboard" style={dashboardStyle}>

              <div className=''>
                <div className='search-input-conatainer'>
                  <Select styles={customStyles} options={State} className="search-input dashboard-select-region" onChange={opt => setState(opt.value)} id='state-input' placeholder="State" />
                </div>
              </div>

              <div className=''>
                <div className='search-input-conatainer'>
                  <Select styles={customStyles} options={District} className="search-input dashboard-select-region" onChange={opt => setDistrict(opt.value)} id='state-input' placeholder="District" />
                </div>
              </div>

              <div className=''>
                <div className='search-input-conatainer'>
                  <input type="text" className='pincode-input' onBlur={() => {
                    setPincode()
                  }} placeholder='Pin code'></input>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>


    }

    {props.searchHospitalOnly &&

      <div className="search-container-dashboard" style={dashboardStyle}>

        <div className="all-search-parameters ">
          <div className="search-parameters-dashboard " style={dashboardStyle} >

            <div className="stateAndDistrict-dashboard" style={dashboardStyle}>

              <Select styles={customStyles} options={Hospital} className="search-input SearchByHospitalName" onChange={opt => props.getBranchData(opt.value)} id='state-input' placeholder="Search Hospital" />
            </div>

          </div>
        </div>
      </div>


    }

  </>

  )
}
