import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const initiaNotes = [
    {
      _id: "6517e6fd7e2308bced876c66",
      user: "65102e3136774446ffe0ea42",
      title: "This is my first note",
      description: "Note from the inotebook.",
      tag: "personal",
      date: "2023-09-30T09:14:37.231Z",
      __v: 0,
    },
    {
      _id: "6517e7037e2308bced876c68",
      user: "65102e3136774446ffe0ea42",
      title: "This is my second",
      description: "Note from the inotebook.",
      tag: "personal",
      date: "2023-09-30T09:14:43.857Z",
      __v: 0,
    },
    {
      _id: "6517e7087e2308bced876c6a",
      user: "65102e3136774446ffe0ea42",
      title: "This is my third note",
      description: "Note from the inotebook.",
      tag: "personal",
      date: "2023-09-30T09:14:48.913Z",
      __v: 0,
    },
    {
      _id: "6517e7087e2308bced876c6a",
      user: "65102e3136774446ffe0ea42",
      title: "This is my third note",
      description: "Note from the inotebook.",
      tag: "personal",
      date: "2023-09-30T09:14:48.913Z",
      __v: 0,
    },
    {
      _id: "6517e7087e2308bced876c6a",
      user: "65102e3136774446ffe0ea42",
      title: "This is my third note",
      description: "Note from the inotebook.",
      tag: "personal",
      date: "2023-09-30T09:14:48.913Z",
      __v: 0,
    },
    {
      _id: "6517e7087e2308bced876c6a",
      user: "65102e3136774446ffe0ea42",
      title: "This is my third note",
      description: "Note from the inotebook.",
      tag: "personal",
      date: "2023-09-30T09:14:48.913Z",
      __v: 0,
    },
    {
      _id: "6517e7087e2308bced876c6a",
      user: "65102e3136774446ffe0ea42",
      title: "This is my third note",
      description: "Note from the inotebook.",
      tag: "personal",
      date: "2023-09-30T09:14:48.913Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(initiaNotes);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
