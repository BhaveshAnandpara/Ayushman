import React from 'react'
import { useState } from 'react';
import Select from 'react-select';

import '../Search/Search.css'
import myJSON from '../../JsonFiles/stateAndDistrict.json'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Search(props) {

  let tagCount = 1

  const [selectedState, setSelectedState] = useState()

  const State = [ ]
  const District = [ ]

  function stateDropdown() {
    myJSON.states.forEach(element => {
      const state = element.state
      const obj = { label: state, value: state }
      State.push(obj)
    });
  }

  function districtDropdown() {

    myJSON.states.forEach(element => {
      const state = element.state
      const obj = { label: state, value: state }
      State.push(obj)
    });
  }

  function setState( value ){

    setSelectedState( value )
    console.log( selectedState)
  }

  stateDropdown()



  const Hospitals = [
    { label: 'ABC Hospital', value: 'ABC Hospital' },
    { label: 'DEF Hospital', value: 'DEF Hospital' },
    { label: 'GHI Hopsital', value: 'GHI Hopsital' },
    { label: 'XYZ Hospital', value: 'XYZ Hospital' },
  ]

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
      console.log(
         ( myJSON.states[0].state)
        )
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
    })
  }

  return (
    <div className='search-container '>

      {/* Normal Search */}

      <p className="container-title">Search Hospitals</p>

      <div className="all-search-parameters ">

        {!props.advanceSearch &&

          <div className="search-parameters ">

            <div className="stateAndDistrict ">



              <div className=''>
                <div className='search-input-conatainer'>
                  <Select styles={customStyles} options={State} className="search-input" onChange={opt => setState(opt.value)} id='state-input' placeholder="State"  />
                </div>
              </div>

              <div className=''>
                <div className='search-input-conatainer'>
                  <Select styles={customStyles} options={District} className="search-input" onChange={opt => console.log(opt.value)} id='state-input' placeholder="District" />
                </div>
              </div>


            </div>

            <div className="">
              <Select styles={customStyles} options={Hospitals} className="search-input SearchByHospitalName" onChange={opt => console.log(opt.value)} id='state-input' placeholder="Search Hospital" />
            </div>

          </div>

        }

        {

          props.advanceSearch &&



          <div className="search-parameters ">

            <div className="stateAndDistrict ">


              <div className=''>
                <div className='search-input-conatainer'>
                  <Select styles={customStyles} options={State} className="search-input" onChange={opt => selectOption(opt.value)} id='state-input' placeholder="State" value="State" />
                </div>
              </div>

              <div className=''>
                <div className='search-input-conatainer'>
                  <Select styles={customStyles} options={District} className="search-input" onChange={opt => selectOption(opt.value)} id='state-input' value="District" placeholder="District" />
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

          </div>

        }


        {/* Advanced Search */}



        <button className="searchButton " type="button">Search</button>
      </div>


    </div>
  )
}
