import "./NoteCard.css";

function NoteCard() {
  return (
    <>
      <div className="card-container">
        <div className="inner-container">
          <div>
            <h3>Not Başlığı</h3>
          </div>
          <div className="note-div">
            <p>
              Buraya notlar koyulacak almak istediğimiz notları bu şekilde
              paragraf şeklinde yazmamız gerekecek buraya brum hojam font çok
              güzel nereden buldun ayol.
            </p>
            <h2> + </h2>
          </div>
          <div>
            <div className="button-div" >
              <button className="btn">
                Update
              </button>
              <button className="btn">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoteCard;

/*
<div class="card-container">
  <div class="upper-container">
    <div class="image-container">
      <img src="https://api.dicebear.com/7.x/thumbs/svg?seed=Alaina" alt="profile image" />
    </div>
  </div>

  <div class="lower-container">
    <div>
      <h3>Alaina Wick</h3>
      <h4>Front-end Developer</h4>
    </div>
    <div>
      <p>sodales accumsan ligula. Aenean sed diam tristique, fermentum mi nec, ornare arcu.</p>
    </div>
    <div>
      <a href="#" class="btn">View profile</a>
    </div>
  </div>
</div>
*/
