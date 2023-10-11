import { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../contexts/notes/noteContext";
import NoteItem from "./NoteItem";
import NewNote from "./NewNote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, fetchAll, editNote } = context;
  useEffect(() => {
    fetchAll();
    //eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({ t: "", d: "", tg: "" });

  const updateNote = (currNote) => {
    ref.current.click();
    setNote({
      id: currNote._id,
      t: currNote.title,
      d: currNote.description,
      tg: currNote.tag,
    });
  };

  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    editNote(note.id, note.t, note.d, note.tg);
    refClose.current.click();
  };
  return (
    <>
      <NewNote />
      <div>
        <button
          ref={ref}
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        ></button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Note
                </h5>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      name="t"
                      type="text"
                      className="form-control"
                      id="t"
                      onChange={onchange}
                      value={note.t}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <input
                      name="d"
                      type="text"
                      className="form-control"
                      id="d"
                      onChange={onchange}
                      value={note.d}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="tag" className="form-label">
                      Tag
                    </label>
                    <input
                      name="tg"
                      type="text"
                      className="form-control"
                      id="tg"
                      onChange={onchange}
                      value={note.tg}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  ref={refClose}
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  disabled={note.t.length < 5 || note.d.length < 5}
                  type="button"
                  className="btn btn-primary"
                  onClick={handleClick}
                >
                  Update Note
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="my-3">Your Notes</h2>
      <div className="row">
        <div className="container">
          {notes.length === 0 && "Nothing to display. Please! add a note"}
        </div>
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} updateNote={updateNote} note={note} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
