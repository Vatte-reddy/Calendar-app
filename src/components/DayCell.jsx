import React from "react";
import { isSameDay, isAfter, isBefore } from "date-fns";

const DayCell = ({ day, range, selectDate }) => {

  const isStart = range.start && isSameDay(day, range.start);
  const isEnd = range.end && isSameDay(day, range.end);

  const isInRange =
    range.start &&
    range.end &&
    isAfter(day, range.start) &&
    isBefore(day, range.end);

  return (
    <div
      onClick={() => selectDate(day)}
      className={`h-10 flex items-center justify-center rounded cursor-pointer
        ${isStart || isEnd ? "bg-blue-500 text-white" : ""}
        ${isInRange ? "bg-blue-200" : ""}
        hover:bg-blue-100`}
    >
      {day.getDate()}
    </div>
  );
};

export default DayCell;