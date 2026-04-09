import React from 'react'
// import {usePlayers} from '../utilis/usePlayers'

// import { useState } from 'react';



const Hero_image = () => {


  return (
    <div>
      <div classname="hero-image" >

        <img src={month.image} alt={month.name} />

        <h2 className="text-3xl" style={{ fontFamily: "Great Vibes" }}>{month.name}</h2>

        {/* <button onClick={nextClick}>Next</button>
      <button onClick={prevClick}>prev</button> */}

      </div>
    </div>
  )
}

export default Hero_image
