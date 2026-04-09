import React from "react";
import DayCell from "./DayCell";
import { startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";

const CalendarGrid = ({ currentMonth, range, selectDate }) => {
  
  const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);

  const dates = eachDayOfInterval({
    start: monthStart,
    end: monthEnd
  });

  return (
    <div>

      {/* Day Names */}
      <div className="grid grid-cols-7 text-sm text-gray-500 mb-2">
        {days.map((d) => (
          <div key={d} className="text-center">{d}</div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-2">
        {dates.map((day) => (
          <DayCell
            key={day}
            day={day}
            range={range}
            selectDate={selectDate}
          />
        ))}
      </div>

    </div>
  );
};

export default CalendarGrid;