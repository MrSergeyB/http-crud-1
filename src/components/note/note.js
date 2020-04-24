import React from "react";
import "./note.css";

const Note = ({note, handleClick}) => {
  return (
    <div className="note-box">
      <div>
        <p>{note.content}</p>
      </div>
      <div className="delete-btn">
        {" "}
        <a href="!#" id={note.id} onClick={(e) => handleClick(e.target.id)}>
          x
        </a>
      </div>
    </div>
  );
};

export default Note;
