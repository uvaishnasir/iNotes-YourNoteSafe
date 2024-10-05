import { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../contexts/notes/noteContext";
import NoteItem from "./NoteItem";
import { useNavigate } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, fetchAll, editNote, updateNotesOrder } = context;
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchAll();
    } else navigate("/login");
  }, [fetchAll, navigate]);

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

  // Handle drag end
  // const onDragEnd = async (result) => {
  //   console.log(result);
  //   if (!result.destination) return;

  //   const reorderedNotes = Array.from(notes);
  //   const [removed] = reorderedNotes.splice(result.source.index, 1);
  //   reorderedNotes.splice(result.destination.index, 0, removed);

  //   console.log(reorderedNotes);
  //   updateNotesOrder(reorderedNotes); // Update the local state

  //   // Call API to update the order in the database
  //   await fetch("http://localhost:5000/api/notes/updateOrder", {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "auth-token": localStorage.getItem("token"),
  //     },
  //     body: JSON.stringify({ orderedNotes: reorderedNotes }),
  //   });
  // };

  return (
    <>
      <div>
        <button
          ref={ref}
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        ></button>
        {/* Modal for editing notes */}
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
      {/* <DragDropContext
        onDragStart={() => {
          document.body.style.overflow = "hidden"; // Disable scrolling during drag
        }}
        onDragEnd={async (result) => {
          document.body.style.overflow = "auto"; // Re-enable scrolling after drop

          // Handle drag end logic
          if (!result.destination) return;

          const reorderedNotes = Array.from(notes);
          const [removed] = reorderedNotes.splice(result.source.index, 1);
          reorderedNotes.splice(result.destination.index, 0, removed);

          updateNotesOrder(reorderedNotes);

          // Call API to update the order in the database
          await fetch("http://localhost:5000/api/notes/updateOrder", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({ orderedNotes: reorderedNotes }),
          });
        }}
      >
        <Droppable droppableId="droppable-notes">
          {(provided) => (
            // Only apply d-flex and flex-wrap to the container holding Draggable items
            <div
              className="d-flex flex-wrap"
              style={{ gap: "20px" }} // Define space between items
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {notes.map((note, index) => (
                <Draggable key={note._id} draggableId={note._id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <NoteItem updateNote={updateNote} note={note} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext> */}
      <DragDropContext
        onDragStart={() => {
          document.body.style.overflow = "hidden"; // Disable scrolling during drag
        }}
        onDragEnd={async (result) => {
          // Re-enable scrolling after drop
          document.body.style.overflow = "auto";
          window.scrollTo(0, 0); // Ensure the scroll position stays at the top

          // Prevent unintended scroll behavior
          if (!result.destination) return;

          const reorderedNotes = Array.from(notes);
          const [removed] = reorderedNotes.splice(result.source.index, 1);
          reorderedNotes.splice(result.destination.index, 0, removed);

          updateNotesOrder(reorderedNotes);

          // Call API to update the order in the database
          await fetch("http://localhost:5000/api/notes/updateOrder", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({ orderedNotes: reorderedNotes }),
          });
        }}
      >
        <Droppable droppableId="droppable-notes">
          {(provided) => (
            <div
              className="d-flex flex-wrap"
              style={{ gap: "20px" }} // Space between items
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {notes.map((note, index) => (
                <Draggable key={note._id} draggableId={note._id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <NoteItem updateNote={updateNote} note={note} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default Notes;
