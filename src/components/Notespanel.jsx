import React from 'react';
import { format } from 'date-fns';

const NotesPanel = ({ range, notes, updateNote, monthlyNotes, setMonthlyNotes, currentMonthName }) => {
  const selectedDateKey = range.start ? format(range.start, 'yyyy-MM-dd') : null;
  const isRange = range.start && range.end;

  return (
    <div className="notes-panel flex flex-col h-full border border-slate-100 rounded-3xl p-5 shadow-sm bg-slate-50/30 overflow-y-auto custom-scrollbar">
      {/* Monthly Memos - Fixed Height to prevent any shift */}
      <div className="flex-none h-[35%] flex flex-col min-h-[120px] border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
          <h3 className="text-[0.6rem] font-black uppercase tracking-widest text-slate-400">
            {currentMonthName} Memos
          </h3>
        </div>
        <textarea
          className="memo-area w-full bg-transparent border-none focus:ring-0 text-xl font-medium resize-none flex-1"
          placeholder="Jot down monthly goals..."
          value={monthlyNotes}
          onChange={(e) => setMonthlyNotes(e.target.value)}
        />
      </div>

      {/* Selected Date Area - Improved Flex Layout */}
      <div className="flex-1 flex flex-col pt-4 min-h-0">
        <div className="flex items-center gap-2 mb-2">
          <div className={`w-1.5 h-1.5 rounded-full ${range.start ? 'bg-sky-500' : 'bg-slate-200'}`} />
          <h3 className="text-[0.6rem] font-black uppercase tracking-widest text-slate-400">
            {isRange ? 'Selection Range' : 'Selection Date'}
          </h3>
        </div>

        <div className="flex-1 flex flex-col min-h-0 bg-white/50 rounded-2xl border border-slate-100 p-1 overflow-hidden">
          {range.start ? (
            <div className="flex-1 flex flex-col animate-fade-in p-3 h-full">
              <div className="mb-2">
                <span className="text-[0.65rem] font-black text-slate-900 bg-white shadow-sm px-3 py-1.5 rounded-lg border border-slate-100">
                  {format(range.start, 'MMM d')}
                  {range.end && ` — ${format(range.end, 'MMM d')}`}
                </span>
              </div>
              <textarea
                className="memo-area w-full bg-transparent border-none focus:ring-0 text-xl font-medium resize-none flex-1 mt-2"
                placeholder={isRange ? "Add notes for this period..." : "Add a reminder for this date..."}
                value={notes[selectedDateKey] || ''}
                onChange={(e) => updateNote(selectedDateKey, e.target.value)}
              />
            </div>
          ) : (
            <div className="memo-area flex-1 flex items-center justify-center p-6 h-full">
              <p className="text-lg text-slate-300 font-medium text-center leading-relaxed italic opacity-80">
                Select a date on the grid to add reminders or ranges.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotesPanel;