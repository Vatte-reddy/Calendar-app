import React from 'react'
// import {usePlayers} from '../utilis/usePlayers'

// import { useState } from 'react';



const Hero_image = () => {
  // const player = usePlayers(0); // Replace 0 with the desired month
  // const getMonthName = new Date().getMonth()
// const [month, setMonth] = useState(getMonthName);


  // const nextClick = (month) => {
  //   // Handle next button click event here
  //   console.log("Next button clicked for player:", player.name);
  //   setMonth((month) => (month + 1) % 12); // Increment month and wrap around after December
  // };

  // const prevClick = () => {
  //   // Handle previous button click event here
  //   console.log("Previous button clicked for player:", player.name);
  //   setMonth((month) => (month - 1 + 12) % 12); // Decrement month and wrap around before January
  // };

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
