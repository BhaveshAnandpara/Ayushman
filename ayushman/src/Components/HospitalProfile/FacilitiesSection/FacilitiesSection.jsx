import React from 'react'
import Header from '../../Header/Header'
import Navbar from '../../Navbar/Navbar'
import bedIcon from '../../../Assets/Icons/bed-icon.png'
import '../FacilitiesSection/FacilitiesSection.css'


export default function EmergencySection() {
return (
      <>
        <div className='facilities'>
        <fieldset>
          <legend><span className='section-title'>facilities</span></legend>
          <div className='facilities1'>
          <div className='ambulance'><div class="grid-item"><img className='bed-icon1' src={bedIcon} alt="bed-icon" /><span className='names1'>Ambulance</span>
              </div>
          </div>
          <div class="grid-item"><img className='bed-icon1' src={bedIcon} alt="bed-icon" /><span className='names1'>Laboratory</span>
              </div>
          <div class="grid-item"><img className='bed-icon1' src={bedIcon} alt="bed-icon" /><span className='names1'>ATM</span>
              </div>
          <div class="grid-item"><img className='bed-icon1' src={bedIcon} alt="bed-icon" /><span className='names1'>Waiting Launge</span>
              </div>
          <div class="grid-item"><img className='bed-icon1' src={bedIcon} alt="bed-icon" /><span className='names1'>Pharmacy</span>
              </div>
          <div class="grid-item"><img className='bed-icon1' src={bedIcon} alt="bed-icon" /><span className='names1'>Cafeteria</span>
              </div>
          <div class="grid-item"><img className='bed-icon1' src={bedIcon} alt="bed-icon" /><span className='names1'>Blood Bank</span>
              </div>
          <div class="grid-item"><img className='bed-icon1' src={bedIcon} alt="bed-icon" /><span className='names1'>Radiology</span>
              </div>
          <div class="grid-item"><img className='bed-icon1' src={bedIcon} alt="bed-icon" /><span className='names1'>Parking</span>
              </div>
            
            </div>

        </fieldset>
      </div>
    </>
  )
}
