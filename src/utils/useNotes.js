
import { useState } from "react";

export default function useNotes() {

  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
   

   setNotes([...notes, note]);

   

  };

  const deleteNote = (note) => {
    setNotes(notes.filter((n) => n !== note));
  };

  


  return { 

    notes, setNotes, addNote, deleteNote

};
}
