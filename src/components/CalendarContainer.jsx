import React, { useState, useEffect } from 'react';
import usePlayers from '../utils/usePlayers';
import CalendarPage from './CalendarPage';
import { addMonths, subMonths, isSameDay, startOfDay, format, parseISO } from 'date-fns';

const CalendarContainer = () => {
  // 1. Initial State from LocalStorage
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const [range, setRange] = useState(() => {
    const saved = localStorage.getItem('calendar_range');
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        start: parsed.start ? parseISO(parsed.start) : null,
        end: parsed.end ? parseISO(parsed.end) : null
      };
    }
    return { start: null, end: null };
  });

  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('calendar_notes');
    return saved ? JSON.parse(saved) : {};
  });

  const [monthlyNotes, setMonthlyNotes] = useState(() => {
    const saved = localStorage.getItem('calendar_monthly_memos');
    return saved ? JSON.parse(saved) : {}; // Store as { 'yyyy-MM': 'memo' }
  });

  // 2. Persistent Effects
  useEffect(() => {
    localStorage.setItem('calendar_range', JSON.stringify({
      start: range.start ? range.start.toISOString() : null,
      end: range.end ? range.end.toISOString() : null
    }));
  }, [range]);

  useEffect(() => {
    localStorage.setItem('calendar_notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('calendar_monthly_memos', JSON.stringify(monthlyNotes));
  }, [monthlyNotes]);

  // Derived Values
  const monthIndex = currentDate.getMonth();
  const monthKey = format(currentDate, 'yyyy-MM');
  const player = usePlayers(monthIndex);

  const handleDateClick = (date) => {
    const clickedDate = startOfDay(date);
    
    if (!range.start || (range.start && range.end)) {
      setRange({ start: clickedDate, end: null });
    } else {
      if (clickedDate < range.start) {
        setRange({ start: clickedDate, end: range.start });
      } else if (isSameDay(clickedDate, range.start)) {
        setRange({ start: null, end: null });
      } else {
        setRange({ ...range, end: clickedDate });
      }
    }
  };

  const nextMonth = () => setCurrentDate(prev => addMonths(prev, 1));
  const prevMonth = () => setCurrentDate(prev => subMonths(prev, 1));

  const updateNote = (dateKey, text) => {
    setNotes(prev => ({ ...prev, [dateKey]: text }));
  };

  const updateMonthlyMemo = (text) => {
    setMonthlyNotes(prev => ({ ...prev, [monthKey]: text }));
  };

  return (
    <div className="flex flex-col items-center w-full max-w-[1400px]">
      <CalendarPage 
        currentDate={currentDate} 
        player={player} 
        range={range}
        handleDateClick={handleDateClick}
        notes={notes}
        updateNote={updateNote}
        monthlyNotes={monthlyNotes[monthKey] || ''}
        setMonthlyNotes={updateMonthlyMemo}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
    </div>
  );
};

export default CalendarContainer;
