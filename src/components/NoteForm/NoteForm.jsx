import "./NoteForm.css";
import { useEffect, useState } from "react";

function NoteForm({ onSubmit, existingNote, onCancel }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const MAX_TITLE_LENGTH = 100;

  useEffect(() => {
    if (existingNote && existingNote.title.length <= MAX_TITLE_LENGTH) {
      setTitle(existingNote.title);
      setContent(existingNote.content);
    }
  }, [existingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() != "" && content.trim() != "" && title.length <= MAX_TITLE_LENGTH) {
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
          <div>
            <button type="submit"> {existingNote ? "Update" : "Add"} </button>
            {existingNote && (
              <button
                type="button"
                onClick={() => {
                  setTitle("");
                  setContent("");
                  onCancel(); // Bu Notes.js içinde editingNote'u null yapacak
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default NoteForm;
