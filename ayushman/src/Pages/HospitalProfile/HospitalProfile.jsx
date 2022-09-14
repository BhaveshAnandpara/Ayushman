import React from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Breadcrum from '../../Components/Breadcrum/Breadcrum'
import { useEffect, useState, useRef } from 'react'
import '../HospitalProfile/HospitalProfile.css'
import FeatherIcon from 'feather-icons-react';


export default function HospitalProfile(props) {

  const [hosp, setHosp] = useState()


  let breadcrumData = []

  let hospID = (window.location.href).split('?')[1]

  useEffect(() => {

    if (!hosp) {


      var axios = require('axios');

      var config = {
        method: 'get',
        url: 'http://localhost:8001/hospitalData/getHosp',
        params: {
          id: hospID
        }
      };

      axios(config)
        .then(function (response) {
          console.log(response.data);
          setHosp(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });

    }


  }, [])


  if (hosp) {
    breadcrumData = [{ label: 'Home', value: 'findhospital' }, { label: 'Findhospital', value: 'findhospital' }, { label: hosp.hosp_name, value: hosp._id }]
  }




  return (
    <>
      <Header />
      <Navbar />
      <section className='hospProfile section' >

        <Breadcrum data={breadcrumData} />

        <div className="hospp-basicInfo  ">

          <div className="hospp-info-section ">

            <div className="hospp-img border"> </div>

            {hosp &&
              <div className="hospp-info ">
                <p>{hosp.hosp_name}</p>
                <p>{hosp.hosp_address.address_line1 + ", " + hosp.hosp_address.state + ", " + hosp.hosp_address.district}</p>
                <span className="btn-inverse hospp-tag">{hosp.hosp_type}</span>
                <p className='hospp-phoneNo' >
                  <span>{hosp.phone_no[0] ? <FeatherIcon icon="phone"/> : ""} { hosp.phone_no[0] }</span>
                  <span>{hosp.phone_no[1] ? <FeatherIcon icon="phone"/> : ""} { hosp.phone_no[1] }</span>
                  <span>{hosp.phone_no[2] ? <FeatherIcon icon="phone"/> : ""} { hosp.phone_no[2] }</span>
                </p>
              </div>
            }

          </div>

          <div className="maps ">
              <div className="map-box border"></div>
              <span className="map-label btn-inverse ">Directions</span>
          </div>

          </div>

      </section>
    </>
  )
}
