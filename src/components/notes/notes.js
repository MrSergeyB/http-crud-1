import React from "react";
import "./notes.css";
import Note from "../note";

const Notes = ({notes, handleClick}) => {
  return (
    <div className="container">
      {notes.map((note) => {
        return <Note key={note.id} note={note} handleClick={handleClick} />;
      })}
    </div>
  );
};

export default Notes;
