import React from 'react'
import { Link } from 'react-router-dom'
import '../Breadcrum/Breadcrum.css'
import FeatherIcon from 'feather-icons-react';


export default function Breadcrum(props) {


    let breadcrumItems = []

    props.data.forEach((ele, index) => {

        if (index == props.data.length - 1) {
            breadcrumItems.push(
                <div className='breadcrumItem-container'>
                <Link className='link'  to={'/hospitalprofile?' + ele.value} > <span className='breadcrumItem active-breadcrumItem' > {ele.label} </span> </Link>
            </div>
            )
        }
        else {
            breadcrumItems.push(
                <div className='breadcrumItem-container'>
                    <Link className='link'  to={'/' + ele.value} > <span className='breadcrumItem' > {ele.label} </span> </Link>
                    <FeatherIcon icon='chevron-right' />
                </div>
            )
        }

    })


    return (
        <>

            <div className="breadcrum-container"  >
                {
                    breadcrumItems
                }
            </div>


        </>
    )
}
