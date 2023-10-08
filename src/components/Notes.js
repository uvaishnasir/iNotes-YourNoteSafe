import { useContext, useEffect } from "react";
import noteContext from "../contexts/notes/noteContext";
import NoteItem from "./NoteItem";
import NewNote from "./NewNote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, fetchAll } = context;
  useEffect(() => {
    fetchAll();
  }, [fetchAll]);
  return (
    <>
      <NewNote />
      <h2 className="mt-3">Your Notes</h2>
      <div className="row">
        {notes.map((note) => {
          return <NoteItem key={note._id} note={note} />;
        })}
      </div>
    </>
  );
};

export default Notes;
