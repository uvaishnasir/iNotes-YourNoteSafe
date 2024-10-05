import { useContext } from "react";
import noteContext from "../contexts/notes/noteContext";

const NoteItem = (props) => {
  const { note, updateNote } = props;
  const context = useContext(noteContext);
  const { deleteNote } = context;

  return (
    <>
      <div className="note-item" style={{ width: "200px", margin: "10px" }}>
        <div className="card" style={{ height: "100%", padding: "10px" }}>
          <span className="badge text-light bg-dark">{note.tag}</span>
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>
            <i
              className="fa-solid fa-trash mx-2"
              onClick={(e) => {
                e.preventDefault();
                deleteNote(note._id);
              }}
            ></i>
            <i
              className="fa-solid fa-pen-to-square mx-2"
              onClick={(e) => {
                e.preventDefault();
                updateNote(note);
              }}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteItem;
