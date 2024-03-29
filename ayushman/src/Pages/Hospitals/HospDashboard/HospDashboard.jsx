import React from 'react'
import * as ReactDOM from 'react-dom';

import '../HospDashboard/HospDashboard.css'

import editIcon from '../../../Assets/Icons/camera.svg'
import HospIcon from '../../../Assets/Icons/HospIcon.svg'

import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import Search from '../../../Components/Search/Search'
import HospitalCards from '../../../Components/HospitalCards/HospitalCards';

export default function HospDashboard(props) {

  //------------------------------ Declarations ---------------------------------------

  const user = useSelector(state => state.User) // Logged In User Infp

  const keys = Object.keys(user.data) //Keys of User's data
  const values = Object.values(user.data) //values of User's data

  // console.log(keys)
  // console.log(values)

  let branch = ""
  let otherBranches = []

  const typeOfHospitals = [
    { label: 'Private Hospital', value: 'Private Hospital' },
    { label: 'Government Hospital', value: 'Government Hospital' },
    { label: 'Semi-Goverment Hospital', value: 'Semi-Goverment Hospital' },
    { label: 'Charitable Hospital', value: 'Charitable Hospital' },
  ]


  //----------------------------------- LocalStorage Related Functions --------------------------------


  // To get Value from Either LocalStorage or State
  function getValue(key, key2) {


    if (localStorage.getItem(`${key}`)) {
      if (key2) {
        let data = JSON.parse(localStorage.getItem(`${key}`))
        return data[key2]
      }
      else {
        return JSON.parse(localStorage.getItem(`${key}`))
      }
    }

    else {

      const value = values[keys.findIndex(ele => ele == key)]

      if (value) {
        if (key2) {
          console.log(value[key2])
          return value[key2]
        }
        else {
          return value
        }
      }
      else {
        return undefined
      }
    }

  }

  //Clear LocalStorage as clicked Saved
  function clearLocalStorage(){

    keys.forEach((key)=>{
      if( key !== 'persist:root'){
        localStorage.removeItem(`${key}`)
      }
    })

  }

  //To show Values in Localstorage
  function showLocalStorage() {

    let data = {}

    keys.forEach((key, index) => {
      console.log(`${key} = ` + JSON.parse(localStorage.getItem(`${key}`)))
      data[key] = JSON.parse(localStorage.getItem(`${key}`))
    })

    console.log("data = " + JSON.stringify(data))


  }



  //----------------------------------------- address data ----------------------------------

  function getAddressData(data) {
    let addressLine = document.getElementById('addressLine').value
    data["address_line1"] = addressLine
    console.log(data)
    localStorage.setItem('hosp_address', JSON.stringify(data))
  }


  // ---------------------------- Phone Number Logic -----------------------------------

  let phoneNoCount = 0
  let phoneNoArray = []

  if (localStorage.getItem('phone_no')) {
    phoneNoArray = (JSON.parse(localStorage.getItem('phone_no'))).slice(0,3)[0]
  }
  else {
    phoneNoArray = user.data.phone_no
  }

  // Showing All the Number Store in LocalStorage or State
  function setPhoneNo() {
    getValue('phone_no').forEach((ele,index) => {
      addPhoneInput(ele , index)
    })
  }
  
  // Function to add Phone No. input in Phone Container
  const addPhoneInput = (no = "" ,index = phoneNoCount) => {

    if( phoneNoCount <= 2 ){

    phoneNoCount++
    console.log(phoneNoCount)

    const phoneNo = document.createElement("input")
    phoneNo.type = "text"
    phoneNo.key = `${index}`
    phoneNo.id = `phoneNo`
    phoneNo.defaultValue = no
    phoneNo.placeholder = "Phone Number"
    phoneNo.onchange = (e) => {
      phoneNoArray.push(parseInt(e.target.value))
      localStorage.setItem(`phone_no${index}`, e.target.value)
      localStorage.setItem(`phone_no`, JSON.stringify(phoneNoArray))
      
      showLocalStorage()
    }
    const container = document.querySelector(".phoneNo-container")

    container.appendChild(phoneNo)

  }
  else{
    return
  }

  }

  //Use Effect to Call setPhoneNo
  useEffect(() => {
    setPhoneNo()
  }, [])


  //---------------------------------------- Update Data on Database ------------------------------------

  //Updates Data
  function updateData() {


    let upadateData = {}

    let keys = Object.keys(localStorage)
    let values = Object.values(localStorage)


    keys.forEach((key, index) => {

      if (key != "persist:root" && key != "phone_no0" && key != "phone_no1" && key != "phone_no2") {
        upadateData[key] = values[index]
      }

    })


    var axios = require('axios');
    var data = { hospID: getValue('hosp_id'), data: upadateData };

    var config = {
      method: 'post',
      url: 'http://localhost:8001/hospitalData/updateData',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        // console.log(response)
        alert(response.data);
        clearLocalStorage()

      })
      .catch(function (error) {
        console.log(error)
        alert(error.response.data);
      });


  }

 

  //-------------------------------------------- Other Branches Logic -----------------------------


  const selectBranch = () => {
    const branchContainer = document.querySelector(".selectHosp")
    const root = ReactDOM.createRoot(branchContainer)

    root.render(
      <Search searchHospitalOnly={true} getBranchData={getBranchData} />
    )

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
            <HospitalCards id={ele} isOtherBranch={true} />
          )
        })
      }
    </>
    )



  }

  // --------------------------------------------- Styles ---------------------------------------

  const titleStyle = {
    paddingLeft: "23px",
    margin: "10px 10px"
  }


  return (
    <>

      {props.page === 'basicInfo' &&

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

                    <span>{getValue('hosp_id')}</span>
                    <input type="text" className='hosp-name' placeholder='Hospital Name' defaultValue={getValue('hosp_name')} onChange={(e) => {
                      localStorage.setItem('hosp_name', JSON.stringify(e.target.value))
                    }} />

                    <div className='basicInfoPhoneNo '>
                      <div className="phoneNo-container ">
                      </div>

                      <span className="addBtn" onClick={() => {
                        if (phoneNoCount <= 2) {
                          addPhoneInput()
                        }
                      }}>+</span>
                    </div>



                  </div>
                </div>

                <div className='regionInput '>
                  <input type="text" className="addressLine" id='addressLine' placeholder='Address' value={getValue('hosp_address', 'address_line1')} />

                  <Search stateAndDistrictOnly={true} state={getValue('hosp_address', 'state')} district={getValue('hosp_address', 'district')} pincode={getValue('hosp_address', 'pincode')} getAddressData={getAddressData} />


                </div>

              </div>

            </div>

            <div className="typeOfHosp">

              <p className='container-title' style={titleStyle}>Type of Hospital</p>
              <div className="typeOfHosp-container">
                {

                  typeOfHospitals.map((ele) => {
                    return (
                      <span> <input type="radio" name="hospType" value={ele.value} id="search-checkbox" defaultChecked={ele.value === getValue('hosp_type') ? true : false} onChange={(e) => {
                        localStorage.setItem('hosp_type', JSON.stringify(e.target.value))
                      }} /> {ele.value} </span>
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

            <button className='btn saveBtn' onClick={() => {
              updateData()
            }} >Save</button>

          </div>

        </div>

      }


    </>
  )
}
