import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, startOfWeek, endOfWeek, isSameMonth, isWithinInterval, isSameDay } from 'date-fns';
import NotesPanel from './NotesPanel';

const CalendarPage = ({
  currentDate,
  player,
  range,
  handleDateClick,
  notes,
  updateNote,
  monthlyNotes,
  setMonthlyNotes,
  prevMonth,
  nextMonth
}) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

  const calendarDays = eachDayOfInterval({ start: startDate, end: endDate });
  const year = format(currentDate, 'yyyy');
  const monthName = format(currentDate, 'MMMM');

  const spirals = Array.from({ length: 22 });

  const getDayClass = (date) => {
    const isStart = range.start && isSameDay(date, range.start);
    const isEnd = range.end && isSameDay(date, range.end);
    const inRange = range.start && range.end && isWithinInterval(date, { start: range.start, end: range.end });
    const isToday = isSameDay(date, new Date());
    const isCurrentMonth = isSameMonth(date, currentDate);
    const isSunday = date.getDay() === 0;

    let classes = "day-cell select-none cursor-pointer duration-200 relative transition-all ";
    if (!isCurrentMonth) classes += "text-gray-200 opacity-0 "; // Completely hide outside days for stability
    else if (isStart) classes += "bg-slate-900 text-white z-20 border-2 border-slate-900 shadow-xl ";
    else if (isEnd) classes += "bg-sky-500 text-white z-20 border-2 border-sky-500 shadow-xl ";
    else if (inRange) classes += "bg-sky-50 text-sky-900 font-bold ";
    else if (isToday) classes += "text-sky-600 bg-sky-50 font-black ring-1 ring-inset ring-sky-200 ";
    else if (isSunday) classes += "text-red-500 hover:bg-red-50 font-bold ";
    else classes += "text-slate-800 hover:bg-slate-50 font-bold ";

    return classes;
  };

  const WaveSvg = ({ className = "", fillClass = "wavy-path", pathData = "M0,100 C150,200 350,0 500,100 L500,200 L0,200 Z" }) => (
    <svg className={className} viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
      <path d={pathData} className={fillClass}></path>
    </svg>
  );

  return (
    <div className="relative">
      <div className="wall-nail"></div>
      <div className="hanging-thread"></div>

      <div className="calendar-page">
        <div className="spiral-container">
          {spirals.map((_, i) => <div key={i} className="spiral-ring"></div>)}
        </div>

        {/* Hero Section */}
        <div className="hero-section">
          <img src={player?.image || '/assets/sachin.png'} alt={player?.name} className="hero-image" />
          <div className="hero-overlay" />

          {player?.name && (
            <div className="player-signature animate-fade-in" key={player.name}>
              {player.name}
            </div>
          )}

          <div className="year-month-display">
            <div className="year-text">{year}</div>
            <div className="month-text">{monthName}</div>

            <div className="flex gap-2 justify-end mt-4">
              <button onClick={prevMonth} className="nav-btn transition-transform active:scale-95">←</button>
              <button onClick={nextMonth} className="nav-btn transition-transform active:scale-95">→</button>
            </div>
          </div>
        </div>

        <div className="calendar-content">
          <div className="notes-container h-full">
            <NotesPanel
              range={range}
              notes={notes}
              updateNote={updateNote}
              monthlyNotes={monthlyNotes}
              setMonthlyNotes={setMonthlyNotes}
              currentMonthName={monthName}
            />
          </div>

          <div className="calendar-grid-section flex flex-col pt-2">
            <div className="grid grid-cols-7 mb-6">
              {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day, i) => (
                <div key={day} className={`text-center font-black text-[0.65rem] tracking-tight ${i === 6 ? 'text-red-500' : 'text-slate-300'}`}>
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1 lg:gap-2">
              {calendarDays.map((date, i) => (
                <div key={date.toString()} onClick={() => handleDateClick(date)} className={getDayClass(date)}>
                  <div className="text-xs lg:text-lg">{format(date, 'd')}</div>
                  {notes[format(date, 'yyyy-MM-dd')] && (
                    <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full border border-white" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wavy Footer */}
        <div className="wavy-footer">
          <WaveSvg className="absolute bottom-4 left-0 h-[100px] opacity-20" fillClass="accent-path-light" />
          <WaveSvg className="absolute bottom-0 left-0 h-[140px]" fillClass="accent-path-dark" />
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
