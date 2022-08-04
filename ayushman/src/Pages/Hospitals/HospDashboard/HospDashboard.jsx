import React from 'react'
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import '../HospDashboard/HospDashboard.css'

import HospIcon from '../../../Assets/Icons/HospIcon.svg'
import editIcon from '../../../Assets/Icons/camera.svg'
import { createElement } from 'react';
import { useSelector } from 'react-redux';

import Search from '../../../Components/Search/Search'
import { useState  , useEffect } from 'react';
import HospitalCards from '../../../Components/HospitalCards/HospitalCards';

export default function HospDashboard(props) {

  const user = useSelector(state=>state.User)
  console.log(user)

  let branch = ""
  let otherBranches = []

  let phoneNoCount = 1

  const typeOfHospitals = [
    { label: 'Private Hospital', value: 'Private Hospital' },
    { label: 'Government Hospital', value: 'Government Hospital' },
    { label: 'Semi-Goverment Hospital', value: 'Semi-Goverment Hospital' },
    { label: 'Charitable Hospital', value: 'Charitable Hospital' },
  ]


  const addPhoneInput = () => {

    const phoneNo = document.createElement("input")
    phoneNo.type = "text"
    phoneNo.id = "phoneNo"
    phoneNo.placeholder = "Phone Number"
    const container = document.querySelector(".phoneNo-container")

    container.appendChild(phoneNo)

  }


  const getBranchData = (childData) => {
    branch = childData

    {
      !otherBranches.includes(branch) &&
      otherBranches.push(branch)
    }
    addBranch()
  }

  const addBranch = () => {

    const branchContainer = document.querySelector(".otherBranch-container");
    const selectHosp = document.querySelector(".selectHosp");

    const root = ReactDOM.createRoot(branchContainer);
    const selectRoot = ReactDOM.createRoot(selectHosp);
    console.log(otherBranches)

    selectRoot.render(
      <></>
    )

    root.render(<>
      {
        
        otherBranches.map((ele) => {
          return (
            <HospitalCards name={ele}  isOtherBranch={true} />
          )
        })
      }
    </>
    )



  }

  const selectBranch = () => {
    const branchContainer = document.querySelector(".selectHosp")
    const root = ReactDOM.createRoot(branchContainer)

    root.render(
      <Search searchHospitalOnly={true} getBranchData={getBranchData} />
    )

  }

  const titleStyle = {
    paddingLeft: "23px",
    margin: "10px 10px"
  }

  function saveInfo(){
    // setBasicInfo(localStorage.getItem('data'))
  }

  function saveInfo(){
    // console.log(basicInfo)

    // console.log(localStorage.getItem('name') )
  }


  return (
    <>

  { props.page === 'basicInfo' &&

      <div className="hosp-profile-section">

        <div >

          <div className="basicInfo ">

            <p className='container-title ' style={titleStyle}>Basic Information</p>

            <div className="basicInfoContentForm ">

              <div className=''>

                <div className="hospImg ">

                  <img className='' src={HospIcon} alt="Hospital-Icon" />

                  <div className='editImg'>
                    <input type="file" />
                    <img src={editIcon} className="" alt="" />
                  </div>

                </div>

                <div className='basicInfoform '>

                  <span>{user.hosp_id}</span>
                  <input type="text" className='hosp-name' placeholder='Hospital Name'  onChange={(e)=>{  //value={ basicInfo.name? basicInfo.name : null } 
                      // localStorage.setItem('name',e.target.value)
                  }} />

                  <div className='basicInfoPhoneNo '>

                    <div className="phoneNo-container ">
                      <input type="text" id='phoneNo' placeholder='Phone Number' />
                    </div>

                    <span className="addBtn" onClick={() => {
                      if (phoneNoCount <= 2) {
                        phoneNoCount++
                        addPhoneInput()
                      }

                    }}>+</span>
                  </div>



                </div>
              </div>

              <div className='regionInput '>
              <input type="text" className="addressLine" placeholder='Address'  /> 
              {/* value={ basicInfo.address? basicInfo.address : "" } */}
              
                <Search stateAndDistrictOnly={true}  />  
                {/* state={basicInfo.state} district={basicInfo.district} pincode={basicInfo.pincode} */}
                
              </div>

            </div>

          </div>

          <div className="typeOfHosp">

            <p className='container-title' style={titleStyle}>Type of Hospital</p>
            <div className="typeOfHosp-container">
              {
                
                typeOfHospitals.map((ele) => {
                  return (
                    <span> <input type="radio" name="hospType"   value={ele.value} id="search-checkbox" /> {ele.value} </span>
                    // defaultChecked={ ele.value === basicInfo.typeOfHosp? true : false }
                    
                  );
                })
              }
            </div>
          </div>

          <div className="otherBranches-container">

            <p className='container-title' style={titleStyle}>Other Branches</p>

            <div className='otherBranches '>
              <div className="otherBranch-container ">

              </div>
              <div className="selectHosp ">

              </div>
              <span className="addBtn" onClick={() => {
                selectBranch()
              }}>+</span>
            </div>

          </div>

          <button className='btn saveBtn' onClick={()=>{
            saveInfo()
          }} >Save</button>

        </div>

      </div>

  }


    </>
  )
}
