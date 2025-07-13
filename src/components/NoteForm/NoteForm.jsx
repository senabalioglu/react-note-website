import "./NoteForm.css";
import { useState } from "react";

function NoteForm({ onSubmit, existingNote, onCancel }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {};

  return (
    <>
      <div className="form-div">
        <form className="note-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Title" />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button> {existingNote ? "Update" : "Add"} </button>
        </form>
      </div>
    </>
  );
}

export default NoteForm;
