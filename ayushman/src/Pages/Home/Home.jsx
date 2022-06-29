import React from 'react'
import { useState } from 'react'

import Search from '../../Components/Search/Search'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'


export default function Home() {

  const [advSearch, setAdvSearch] = useState(true)

  return (
<>
    <Header/>
    <Navbar/>
    <section className=" search-bar-section">

      <div className='search-box '>
        <Search advanceSearch={false} />
      </div>

      <div className="advSearchToggle ">

        <p onClick={() => {
          setAdvSearch(!advSearch)
        }} className=" advSearchBtn" >Advance Search</p>

        <div className={`search-box ${advSearch ? " displayToggle" : ""}`} >
          <Search advanceSearch={true} />
        </div>

      </div>


    </section>
    </>
  )
}
