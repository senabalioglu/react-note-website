import "./NoteForm.css";
import { useEffect, useState } from "react";

function NoteForm({ onSubmit, existingNote, onCancel }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() != "" && content.trim() != "") {
      const noteData = {
        title,
        content,
        date: new Date().toLocaleString(),
        id: existingNote?.id || crypto.randomUUID(),
      };

      onSubmit(noteData);
      setTitle("");
      setContent("");
    }
  };

  return (
    <>
      <div className="form-div">
        <form className="note-form" onSubmit={handleSubmit}>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title"
            value={title}
          />
          <textarea
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            value={content}
          />
          <button type="submit"> {existingNote ? "Update" : "Add"} </button>
          {existingNote && <button onClick={onCancel}>Cancel</button>}
        </form>
      </div>
    </>
  );
}

export default NoteForm;
