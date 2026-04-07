import { useState } from "react";

export default function useDateRange() {
  const [range, setRange] = useState({ start: null, end: null });

  const selectDate = (day) => {
    if (!range.start || (range.start && range.end)) {
      setRange({ start: day, end: null });
    } else {
      if (day < range.start) {
        setRange({ start: day, end: range.start });
      } else {
        setRange({ start: range.start, end: day });
      }
    }
  };

  return { range, selectDate };
}