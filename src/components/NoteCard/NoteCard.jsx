import "./NoteCard.css";
import { FiTrash } from "react-icons/fi";

function NoteCard({ note, onEdit, onDelete }) {
  return (
    <>
      <div className="card-container">
        <FiTrash style={{ fontSize: 20, margin: 15 }} onClick={onDelete} />
        <div className="inner-container">
          <div>
            <h3>{note.title}</h3>
          </div>
          <div className="note-div">
            <p className="truncate-title" >{note.content}</p>
          </div>
          <button className="btn" onClick={onEdit} >Edit</button>
        </div>
      </div>
    </>
  );
}

//button type submit olacak işte eğer var olan bir note varsa
//update yoksa add note falan işte anlarsın ya

export default NoteCard;
