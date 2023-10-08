import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const initiaNotes = [];
  const [notes, setNotes] = useState(initiaNotes);

  //fetch all notes operation.
  const fetchAll = async () => {
    const url = "http://localhost:5000/api/notes/fetchallnotes";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyMzA2NWRmNmU2ODZjNDVhZmUzMTc5In0sImlhdCI6MTY5Njc5NDI2NX0.q47Atd8XGcUCykKnTSC69OfrgNAFFE6FhIwuVEWNz-o",
      },
    });
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
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyMzA2NWRmNmU2ODZjNDVhZmUzMTc5In0sImlhdCI6MTY5Njc5NDI2NX0.q47Atd8XGcUCykKnTSC69OfrgNAFFE6FhIwuVEWNz-o",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    console.log("adding a new note.......");
    const result = await response.json();
    console.log(result);
  };

  //delete note operation.
  const deleteNote = async (id) => {
    console.log("Deleting a note......");
    const url = `http://localhost:5000/api/notes/deletenote/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyMzA2NWRmNmU2ODZjNDVhZmUzMTc5In0sImlhdCI6MTY5Njc5NDI2NX0.q47Atd8XGcUCykKnTSC69OfrgNAFFE6FhIwuVEWNz-o",
      },
    });
    const res = await response.json();
    console.log(res);
  };

  // edit note operation.
  const editNote = async (id, title, description, tag) => {

    //api call
    console.log("Editing a note......");
    const url = `http://localhost:5000/api/notes/updatenote/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyMzA2NWRmNmU2ODZjNDVhZmUzMTc5In0sImlhdCI6MTY5Njc5NDI2NX0.q47Atd8XGcUCykKnTSC69OfrgNAFFE6FhIwuVEWNz-o",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const res = await response.json();
    console.log(res);
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
