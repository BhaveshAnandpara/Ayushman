import React from 'react'
import '../HospitalCards/HospitalCards.css'
import bedIcon from '../../Assets/Icons/bed-icon.svg'

export default function HospitalCards() {
  return (
    <div className="card ">
        <div className="card-img ">
        </div>

        <div className="card-info ">
            <div className='card-hosp-text'>
                <p className="card-hosp-name">ABC Hospital</p>
                <p className="card-address">Dummy Road Address, Nagpur, Maharashtra.</p>
            </div>
            <div className='card-info-box-container '>
                <div className="card-info-box ">
                    <img className='bed-icon' src={bedIcon} alt="bed-icon" />
                    <span className='card-info-box-text'>Available Emergency Beds</span>
                    <p className=' card-info-box-text red' >15</p>
                </div>
                <div className="card-info-box border"></div>
                <div className="card-info-box border"></div>
                <div className="card-info-box border"></div>
            </div>
        </div>

    </div>
  )
}
