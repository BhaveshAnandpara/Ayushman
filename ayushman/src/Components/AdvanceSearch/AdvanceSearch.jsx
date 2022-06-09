import React from 'react'
import { useState } from 'react';
import Select from 'react-select';

import '../Search/Search.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Search() {

    const State = [
        { label: 'Maharashtra', value: 'Maharashtra' },
        { label: 'Gujrat', value: 'Gujrat' },
        { label: 'Rajasthan', value: 'Rajasthan' },
    ]

    const District = [
        { label: 'Akola', value: 'Akola' },
        { label: 'Amravati', value: 'Amravati' },
        { label: 'Nagpur', value: 'Nagpur' },
        { label: 'Wardha', value: 'Wardha' },
    ]

    const Hospitals = [
        { label: 'ABC Hospital', value: 'ABC Hospital' },
        { label: 'DEF Hospital', value: 'DEF Hospital' },
        { label: 'GHI Hopsital', value: 'GHI Hopsital' },
        { label: 'XYZ Hospital', value: 'XYZ Hospital' },
    ]

    const customStyles = {
        input: (provided, state) => ({
            ...provided,
            padding: '0px',
            border: 'none',
            outline: 'none'
        }),
        dropdownIndicator: (provided, state) => ({
            ...provided,
            color: '#0D4F8C',
            width: '36px',
            height: '36px'
        }),
        control: (provided, state) => ({
            ...provided,
            backgroundColor: 'none',
            border: 'none',
            boxShadow: 'none',
            "&:hover": {
                border: 'none !important',
            }
        }),
        container: (provided, state) => ({
            ...provided,
            "&:hover": {
                border: 'none',
            }
        })
    }

    return (
        <div className='search-container '>

            <p className="container-title">Search Hospitals</p>

            <div className="all-search-parameters ">
                <div className="search-parameters ">

                    <div className="stateAndDistrict ">



                        <div className=''>
                            <div className='search-input-conatainer'>
                                <Select styles={customStyles} options={State} className="search-input" onChange={opt => console.log(opt.value)} id='state-input' placeholder="State" />
                            </div>
                        </div>

                        <div className=''>
                            <div className='search-input-conatainer'>
                                <Select styles={customStyles} options={District} className="search-input" onChange={opt => console.log(opt.value)} id='state-input' placeholder="District" />
                            </div>
                        </div>



                    </div>

                    <div className="">
                        <Select options={Hospitals}  styles={customStyles} className="search-input SearchByHospitalName" onChange={opt => console.log(opt.value)} id='state-input' placeholder="Search Hospital " />
                    </div>

                </div>

                <button className="searchButton " type="button">Search</button>
            </div>
        </div>
    )
}
