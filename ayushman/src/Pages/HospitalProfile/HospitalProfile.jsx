import React from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Breadcrum from '../../Components/Breadcrum/Breadcrum'
import { useEffect, useState } from 'react'

export default function HospitalProfile(props) {

  const [hosp, setHosp] = useState()

  let  breadcrumData = []

  let hospID = (window.location.href).split('?')[1]

  useEffect(() => {

    if(!hosp){


    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'http://localhost:8001/hospitalData/getHosp',
      params: {
         id : hospID
      }
    };

    axios(config)
      .then(function (response) {
        setHosp(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });

    }


  }, [])


  if(hosp){
    breadcrumData = [{ label: 'Home', value: 'findhospital' }, { label: 'Findhospital', value: 'findhospital' } , { label: hosp.hosp_name , value:hosp._id }]
  }


  return (
    <>
      <Header />
      <Navbar />
      <section className='hospProfile section' >

        <Breadcrum data={breadcrumData} />

      </section>
    </>
  )
}
