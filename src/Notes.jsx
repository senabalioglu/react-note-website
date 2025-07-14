import NoteCard from "./components/NoteCard/NoteCard";
import NoteForm from "./components/NoteForm/NoteForm";
import { useEffect, useState } from "react";

function Notes() {
  // useEffect getItem
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  const handleFormSubmit = (note) => {
    let updatedNotes;

    const isEdit = notes.find((n) => n.id === note.id);
    if(isEdit){
        updatedNotes = notes.map((n) => (n.id === note.id ? note : n));
    }else{
        updatedNotes = [...notes, note];
    }

    setNotes(updatedNotes);

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const handleDeleteNote = (id) => {
     const newNoteList = notes.filter((note) => note.id != id);
     setNotes(newNoteList);
     localStorage.setItem("notes", JSON.stringify(newNoteList));
  }

  return (
    <>
      <NoteForm onSubmit={handleFormSubmit} />
      {notes.map((note) => (
        <>
        <div className="notes-div" >
            <NoteCard key={note.id} note={note} onEdit={null} onDelete={() => handleDeleteNote(note.id)} />
        </div>
        </>
      ))}
    </>
  );
}

export default Notes;
