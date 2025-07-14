import "./NoteCard.css";

function NoteCard({note, onEdit, onDelete}) {
  return (
    <>
      <div className="card-container">
        <div className="inner-container">
          <div>
            <h3>{note.title}</h3>
          </div>
          <div className="note-div">
            <p>
              {note.content}
            </p>
            <h2> + </h2>
          </div>
        </div>
      </div>
    </>
  );
}

//button type submit olacak işte eğer var olan bir note varsa
//update yoksa add note falan işte anlarsın ya

export default NoteCard;
