import React from 'react'
import '../Hospitals/Hospital.css'

import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import HospitalNavbar from './HospitalNavbar/HospitalNavbar'
import HospDashboard from './HospDashboard/HospDashboard'

export default function Hospital(value) {
  return (
    < section>
      <Header />
      <Navbar />

      <div className='hospContainer'>

        <div className='hosp-navbar' >
          <HospitalNavbar value={value.value}/>
        </div>

        <div className='hosp-dashboard border'>
          <HospDashboard/>
        </div>
        
      </div>
    </section>
  )
}
