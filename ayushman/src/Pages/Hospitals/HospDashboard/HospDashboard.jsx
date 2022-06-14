import React from 'react'
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import '../HospDashboard/HospDashboard.css'

import HospIcon from '../../../Assets/Icons/HospIcon.svg'
import editIcon from '../../../Assets/Icons/camera.svg'
import { createElement } from 'react';

import Search from '../../../Components/Search/Search'

export default function HospDashboard() {

  let phoneNoCount = 1

  const addPhoneInput = () => {

    const phoneNo = document.createElement("input")
    phoneNo.type = "text"
    phoneNo.id = "phoneNo"
    phoneNo.placeholder = "Phone Number"
    const container = document.querySelector(".phoneNo-container")

    container.appendChild(phoneNo)

  }

  const titleStyle = {
    paddingLeft: "23px",
    marginTop: "10px"
  }


  return (
    <>

      <div className="hosp-profile-section">

        <form action="">

          <div className="basicInfo ">

            <p className='container-title' style={titleStyle}>Basic Information</p>

            <div className="basicInfoContentForm ">

              <div className=''>

                <div className="hospImg ">

                  <img className='' src={HospIcon} alt="Hospital-Icon" />

                  <div className='editImg'>
                    <input type="file" />
                    <img src={editIcon} className="" alt="" />
                  </div>

                </div>

                <div className='basicInfoform'>

                  <span>MH1234</span>
                  <input type="text" className='hosp-name' placeholder='Hospital Name' />

                  <div className='basicInfoPhoneNo '>

                    <div className="phoneNo-container">
                      <input type="text" id='phoneNo' placeholder='Phone Number' />
                    </div>

                    <span className="addBtn" onClick={() => {
                      if (phoneNoCount <= 2) {
                        phoneNoCount++
                        addPhoneInput()
                      }

                    }}>+</span>
                  </div>

                  <input type="text" className="addressLine" placeholder='Address' />

                </div>
              </div>

              <div className='regionInput'>
                <Search stateAndDistrictOnly={true} />
              </div>

            </div>

          </div>

          <div className="typeOfHosdp">

            <p className='container-title' style={titleStyle}>Type of Hospital</p>

          </div>




        </form>

      </div>


    </>
  )
}
