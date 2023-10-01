import React from "react";

const NoteItem = (props) => {
  const { note, setNotes } = props;

//   setNotes([]);
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quasi recusandae</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
