import React from 'react'
import '../HospitalCards/HospitalCards.css'

export default function HospitalCards() {
  return (
    <div className="card ">
        <div className="card-img border"></div>

        <div className="card-info ">
            <div className='card-hosp-text'>
                <p className="card-hosp-name">ABC Hospital</p>
                <p className="card-address">Dummy Road Address, Nagpur, Maharashtra.</p>
            </div>
            <div className='card-info-box-container '>
                <div className="card-info-box border">
                    <img src="" alt="bed-icon" />
                </div>
                <div className="card-info-box border"></div>
                <div className="card-info-box border"></div>
                <div className="card-info-box border"></div>
            </div>
        </div>

    </div>
  )
}
