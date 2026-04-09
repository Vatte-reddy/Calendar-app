import React from 'react'

const CalenderHeader = ({currentMonth,prevMonth,nextMonth}) => {

    const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];



  return (
    <div  className="flex justify-between items-center mb-4">
       <button
        onClick={prevMonth}
        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
      >
        ←
      </button>


       <h2 className="text-lg font-semibold">
        {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
      </h2>


       <button
        onClick={nextMonth}
        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
      >
        →
      </button>

    </div>
  )
}

export default CalenderHeader
