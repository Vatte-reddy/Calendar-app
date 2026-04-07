import React from 'react'
import {usePlayers} from '../utilis/usePlayers'

import { useState } from 'react';
import Hero_image from './Hero_image';

const CalendarContainer = () => {

     const player = usePlayers(0); // Replace 0 with the desired month
      const getMonthName = new Date().getMonth()
    const [month, setMonth] = useState(getMonthName);

     const nextClick = () => {
    // Handle next button click event here
    console.log("Next button clicked for player:", player.name);
    setMonth((month) => (month + 1) % 12); // Increment month and wrap around after December
  };

  const prevClick = () => {
    // Handle previous button click event here
    console.log("Previous button clicked for player:", player.name);
    setMonth((month) => (month - 1 + 12) % 12); // Decrement month and wrap around before January
  };

  return (
    <div> 
        <Hero_image month={month} />

      <button onClick={nextClick}>Next</button>
      <button onClick={prevClick}>prev</button>
    </div>
  )
}

export default CalendarContainer
