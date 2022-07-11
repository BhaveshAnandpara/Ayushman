import React from 'react'
import '../HospitalCards/HospitalCards.css'
import bedIcon from '../../Assets/Icons/bed-icon.svg'
import oxygenIcon from '../../Assets/Icons/oxygen-icon.svg'
import Navbar from '../Navbar/Navbar'

export default function HospitalCards(props) {

    function randomNum(){
        return Math.floor(Math.random() * 50)
    }


    const branchTags = [
        { label: 'Private Hospital', value: 'Private Hospital' },
        { label: 'Multi-Speciality', value: 'Multi-Speciality' }
      ]

  return (
    <>
   {  !props.isOtherBranch && 
    <div className="card ">
        <div className="card-img ">
        </div>

        <div className="card-info ">

            <div className='card-hosp-text'>
                <p className="card-hosp-name">{props.hospdata.hosp_name}</p>
                <p className="card-address">{props.hospdata.hosp_address.address_line1 + ", " + props.hospdata.hosp_address.district  + ", " + props.hospdata.hosp_address.state}</p>
            </div>

            <div className='card-info-box-container '>

                <div className="card-info-box ">
                    <img className='bed-icon' src={bedIcon} alt="bed-icon" />
                    <span className='card-info-box-text'>Available Emergency Beds</span>
                    <p className=' card-info-box-text red' >{randomNum()}</p>
                </div>

                <div className="card-info-box ">
                    <img className='bed-icon' src={bedIcon} alt="bed-icon" />
                    <span className='card-info-box-text'>Available Beds with Oxygen</span>
                    <p className=' card-info-box-text red' >{randomNum()}</p>
                </div>

                <div className="card-info-box ">
                    <img className='bed-icon' src={bedIcon} alt="bed-icon" />
                    <span className='card-info-box-text'>Available Beds with Ventilator</span>
                    <p className=' card-info-box-text red' >{randomNum()}</p>
                </div>

                <div className="card-info-box ">
                    <img className='bed-icon' src={oxygenIcon} alt="oxygen-icon" />
                    <span className='card-info-box-text'>Oxygen Available</span>
                    <p className=' card-info-box-text green' >{randomNum()} Days</p>
                </div>
            </div>

        </div>

    </div>

}
{  props.isOtherBranch &&

    <div className="branch-card ">
        <div className="branch-card-img ">
        </div>

        <div className="card-info ">

            <div className='card-hosp-text'>
                <p className="branch-card-hosp-name">{props.name}</p>
                <p className="branch-card-address">Dummy Road Address, Nagpur, Maharashtra.</p>
            </div>

            <div className="branchTags">
            {
                branchTags.map((ele) => {
                  return (
                    <span className='tag branch-tags'  value={ele.value}>{ele.value}</span>
                  );
                })
              }
            </div>


        </div>

    </div>
}

    </>
  )
}
