import React, {useState} from "react";
import "./add-note.css";
import {v1 as uuidv1} from "uuid";
uuidv1();

const AddNote = ({handleAddNote}) => {
  const [input, setInput] = useState(" ");

  const newNote = () => {
    if (input.trim()) {
      let newInput = {
        id: uuidv1(),
        content: input,
      };

      handleAddNote(newInput);

      setInput("");
    } else {
      alert("Should not be empty");
    }
  };

  return (
    <div className="add-note-box">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <a href="!#" onClick={newNote}>
        Добавить запись
      </a>
    </div>
  );
};

export default AddNote;
