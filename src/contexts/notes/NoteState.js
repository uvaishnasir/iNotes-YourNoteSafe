import NoteContext from "./noteContext";

import { useState } from "react";

const NoteState = (props) => {
  const s1 = {
    name: "uv",
    course: "b.tech",
  };
  const [state, setState] = useState(s1);

  const update = () => {
    setTimeout(() => {
      setState({
        name: "Uvaish Nasir Hussain",
        course: "B.Tech",
      });
    }, 1500);
  };

  return (
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
