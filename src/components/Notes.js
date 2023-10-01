import { useContext } from "react";
import noteContext from "../contexts/notes/noteContext";
import NoteItem from "./NoteItem";
import NewNote from "./NewNote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes } = context;
  return (
    <>
      <NewNote />
      <h2 className="mt-3">Your Notes</h2>
      <div className="row">
        {notes.map((note) => {
          return <NoteItem note={note} />;
        })}
      </div>
    </>
  );
};

export default Notes;
