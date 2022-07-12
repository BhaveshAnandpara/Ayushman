import React from 'react'
import Header from '../../Header/Header'
import Navbar from '../../Navbar/Navbar'
import bedIcon from '../../../Assets/Icons/bed-icon.png'
import '../EmergencySection/EmergencySection.css'
import hosplmage from '../../../Assets/Images/hospImage.png'


export default function EmergencySection() {
          // pagetrack(pages)

          // let pages=["Home","Find Hospitals","ABC Hospital"]

          function pagetrack(pages){
            
            console.log("Nice");

            }
             
            pagetrack()

  return (
    <>
      <Header />
      <Navbar />
      <div className='page-path '>

        <div className="path-items">
          <span> Home </span>
          <span> Find Hospital </span>
          <span> ABC Hospital </span>
        </div>
      </div>

      <div className='hospital-info-container'>
        <div className='.hos_con_img'>
        <div className='hospital-img'>
          <img className='hospitals-img' />
        </div>

        <div className='hospital-info'>
          <p className='heading'>ABC Hospital</p>
          <p className='add'>Dummy road,wardha,maharasthra</p>
          <div className='types-hos'>
            <div className='type1'>
              <p>pravite</p>
            </div>
            <div className='type2'>
              <p>Multi-speciality</p>
            </div>
          </div>
          <div className='phoneNumber'>
            <p>+91-000000000000</p>
          </div>
        </div>
        </div>
        <div className='hospital-img'>
          <img className='hospitals-img'  />
        </div>

      </div >



       <section className='main-EmergencySection'>
        <div className='EmergencySection'>
          <fieldset>
            <legend> <span className='section-title'>Emergency </span></legend>
            <p>Availability of beds</p>
            <div className='EmergencySection1'>

              <div class="grid-item"><img className='bed-icon1' src={bedIcon} alt="bed-icon" /><p className='names'>Total beds</p>
                <p className='count'>542</p></div>
              <div class="grid-item"><img className='bed-icon1' src={bedIcon} alt="bed-icon" /><p className='names'>Emergency beds</p>
                <p className='count'>52</p></div>
              <div class="grid-item"><img className='bed-icon1' src={bedIcon} alt="bed-icon" /><p className='names'>Available Emergency beds</p>
                <p className='count'>15</p></div>
              <div class="grid-item"><img className='bed-icon1' src={bedIcon} alt="bed-icon" /><p className='names'>Available beds with Oxygen</p>
                <p className='count'>5</p></div>
              <div class="grid-item"><img className='bed-icon1' src={bedIcon} alt="bed-icon" /><p className='names'>Available beds with Ventilator</p>
                <p className='count'>6</p></div>
              <div class="grid-item"><img className='bed-icon1' src={bedIcon} alt="bed-icon" /><p className='names'>Oxygen Available</p>
                <p className='count'>20 Days</p></div>



            </div>
            <p>Ambulance Service</p>
            <div className='EmergencySection2'>

              <div class="grid-item"><img className='bed-icon1' src={bedIcon} alt="bed-icon" />
                <p className='names'>Total Ambulance</p>
                <p className='count'>10</p></div>
              <div class="grid-item"><img className='bed-icon1' src={bedIcon} alt="bed-icon" /><p className='names'>Cardiac Ambulance</p>
                <p className='count'>25/- per km</p></div>
              <div class="grid-item"><img className='bed-icon1' src={bedIcon} alt="bed-icon" /><p className='names'>Basic Life Support</p>
                <p className='count'>15/- per km</p></div>
              <div class="grid-item"><img className='bed-icon1' src={bedIcon} alt="bed-icon" /><p className='names'>Hearse Van</p>
                <p className='count'>12/- per km</p></div>
              <div class="grid-item"><img className='bed-icon1' src={bedIcon} alt="bed-icon" /><p className='names'>Doctor Charges</p>
                <p className='count'>550/- per visit</p></div>
              <div class="grid-item"><img className='bed-icon1' src={bedIcon} alt="bed-icon" /><p className='names'>Nursing Staff Charges</p>
                <p className='count'>330/- per visit</p></div>
              <div class="grid-item"><img className='bed-icon1' src={bedIcon} alt="bed-icon" /><p className='names'>Attendent Charges</p>
                <p className='count'>250/- per visit</p></div>
            </div>
          </fieldset>
        </div>
      </section> 



    </>
  )
}
