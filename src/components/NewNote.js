import { useContext, useState } from "react";
import noteContext from "../contexts/notes/noteContext";

const NewNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  };
  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            name="title"
            type="text"
            className="form-control"
            id="title"
            onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            name="description"
            type="text"
            className="form-control"
            id="description"
            onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            name="tag"
            type="text"
            className="form-control"
            id="tag"
            onChange={onchange}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Add Note
        </button>
      </form>
    </div>
  );
};

export default NewNote;
