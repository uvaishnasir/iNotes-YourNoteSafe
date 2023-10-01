import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const initiaNotes = [
    {
      _id: "6517e6fd72308bced876c66",
      user: "65102e3136774446ffe0ea42",
      title: "This is my first note",
      description: "Note from the inotebook.",
      tag: "personal",
      date: "2023-09-30T09:14:37.231Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(initiaNotes);

  //add note operation.
  const addNote = (title, description, tag) => {
    //to do API CALL.
    console.log("adding a new note.......");
    const note = {
      _id: "6517e6fd72308bced876c6",
      user: "65102e3136774446ffe0ea42",
      title: title,
      description: description,
      tag: tag,
      date: "2023-09-30T09:14:37.231Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //delete note
  const deleteNote = () => {};

  // edit note
  const editNote = () => {};

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, editNote, deleteNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
