import { useContext } from "react";
import noteContext from "../contexts/notes/noteContext";
import NoteItem from "./NoteItem";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <>
      <h2>Your Notes</h2>
      <div className="row">
        {notes.map((note) => {
          return <NoteItem note={note} setNotes={setNotes} />;
        })}
      </div>
    </>
  );
};

export default Notes;
