import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const [notes, setNotes] = useState([]);
  //fetch all notes operation.
  const fetchAll = async () => {
    const response = await fetch(
      "http://localhost:5000/api/notes/fetchallnotes",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const result = await response.json();
    setNotes(result);
  };

  //add note operation.
  const addNote = async (title, description, tag) => {
    //to do API CALL.
    const url = "http://localhost:5000/api/notes/createnote";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  };

  //delete note operation.
  const deleteNote = async (id) => {
    const url = `http://localhost:5000/api/notes/deletenote/${id}`;
    // eslint-disable-next-line
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // edit note operation.
  const editNote = async (id, title, description, tag) => {
    //api call
    const url = `http://localhost:5000/api/notes/updatenote/${id}`;
    // eslint-disable-next-line
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });

    //client site editing code.
    let newN = JSON.parse(JSON.stringify(notes));
    for (let i = 0; i < newN.length; i++) {
      if (newN[i]._id === id) {
        newN[i].title = title;
        newN[i].description = description;
        newN[i].tag = tag;
        break;
      }
    }
    setNotes(newN);
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, editNote, deleteNote, fetchAll }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
