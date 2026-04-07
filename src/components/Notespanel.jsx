import React, { useState } from "react";
import useNotes from "../utils/useNotes";

const NotesPanel = () => {
  const { notes, addNote, deleteNote } = useNotes();

  const [text, setText] = useState("");

  const handleAdd = () => {
    addNote(text);
    setText("");
  };

  return (
    <div className="p-3">
      {/* Title */}
      <h2 className="text-xl font-semibold mb-3">Notes</h2>

      {/* Text Area */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your notes here..."
        className="border-2 border-gray-300 rounded-md p-2 w-full h-28 outline-none"
      />

      {/* Button */}
      <button
        onClick={handleAdd}
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
      >
        Add
      </button>

      {/* Notes List */}
      <div className="mt-3 space-y-2">
        {notes.map((note, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-100 p-2 rounded"
          >
            <span>{note}</span>
            <button
              onClick={() => deleteNote(note)}
              className="text-red-500 text-sm"
            >
              
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesPanel;