import NoteCard from "./components/NoteCard/NoteCard";
import NoteForm from "./components/NoteForm/NoteForm";
import { useEffect, useState } from "react";

function Notes() {
  // useEffect getItem
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });
  const [editingNote, setEditingNote] = useState(null);

  const handleFormSubmit = (note) => {
    let updatedNotes;

    const isEdit = notes.find((n) => n.id === note.id);
    if (isEdit) {
      updatedNotes = notes.map((n) => (n.id === note.id ? note : n));
    } else {
      updatedNotes = [...notes, note];
    }

    setNotes(updatedNotes);

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const handleDeleteNote = (id) => {
    const newNoteList = notes.filter((note) => note.id != id);
    setNotes(newNoteList);
    localStorage.setItem("notes", JSON.stringify(newNoteList));
  };

  const handleEditNote = (id) => {
    const noteToEdit = notes.find((note) => note.id === id);
    setEditingNote(noteToEdit);
  };

  return (
    <>
      <div
        style={{
          marginBottom: 10,
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NoteForm
          onSubmit={handleFormSubmit}
          existingNote={editingNote}
          onCancel={() => setEditingNote(null)}
        />
      </div>
      <div className="notes-div">
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            onEdit={() => handleEditNote(note.id)}
            onDelete={() => handleDeleteNote(note.id)}
          />
        ))}
      </div>
    </>
  );
}

export default Notes;
