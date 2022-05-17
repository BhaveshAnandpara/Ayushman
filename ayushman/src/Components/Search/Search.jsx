import React from 'react'
import { useState } from 'react';
import Select from 'react-select';

import '../Search/Search.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Search(props) {

  let tagCount = 1

  const State = [
    { label: 'Maharashtra', value: 'Maharashtra' },
    { label: 'Gujrat', value: 'Gujrat' },
    { label: 'Rajasthan', value: 'Rajasthan' },
  ]

  const District = [
    { label: 'Akola', value: 'Akola' },
    { label: 'Amravati', value: 'Amravati' },
    { label: 'Nagpur', value: 'Nagpur' },
    { label: 'Wardha', value: 'Wardha' },
  ]

  const Hospitals = [
    { label: 'ABC Hospital', value: 'ABC Hospital' },
    { label: 'DEF Hospital', value: 'DEF Hospital' },
    { label: 'GHI Hopsital', value: 'GHI Hopsital' },
    { label: 'XYZ Hospital', value: 'XYZ Hospital' },
  ]

  const selectedOptions = []

  const selectOption = (value)=>{

    if( !selectedOptions.includes(value)){
      selectedOptions.push(value)
      console.log(selectedOptions)
      showTags(value)
    }

  }

  const showTags = ( value ) => {
    
    let tag = document.createElement("div")
    tag.setAttribute("class" , "tag")
    tag.setAttribute("id" , `${tagCount}`)

    

    let span = document.createElement("span")
    span.setAttribute("id" , "tagText")
    span.appendChild(document.createTextNode( value ) )
    tag.appendChild(span)

    let cross = document.createElement("div")
    cross.setAttribute("class" , "cross")
    cross.setAttribute("id" , `${tagCount++}`)
    cross.onclick = deleteTag
    tag.appendChild(cross)

    let container = document.getElementsByClassName('tag-container')[0]
    container.appendChild( tag )

  }

  const deleteTag = ( event )=>{

        let tag = document.getElementById(event.target.id)
        tag.remove()
        console.log(tag)
        selectedOptions.splice( event.target.id-1 , 1)
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
        <div className="search-parameters ">

          <div className="stateAndDistrict ">



            <div className=''>
              <div className='search-input-conatainer'>
                <Select styles={customStyles} options={State} className="search-input" onChange={opt => console.log(opt.value)} id='state-input' placeholder="State" />
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

        <button className="searchButton " type="button">Search</button>
      </div>

      {/* Advanced Search */}


      <div className="search-parameters ">

        <div className="stateAndDistrict ">


          <div className=''>
            <div className='search-input-conatainer'>
              <Select styles={customStyles}  options={State} className="search-input" onChange={opt => selectOption(opt.value)} id='state-input' placeholder="State" />
            </div>
          </div>

          <div className=''>
            <div className='search-input-conatainer'>
              <Select styles={customStyles} options={District} className="search-input" onChange={opt => selectOption(opt.value)} id='state-input' placeholder="District" />
            </div>
          </div>

        </div>

          <div className="tag-container">
            
          </div>

    
      <p className="container-title" >Type of Hospitals</p> 
          

      </div>



    </div>
  )
}
