import React, {useState, useEffect} from "react";
import "./notes.css";
import Note from "../note";

const Notes = () => {
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    setLoading(true);
    const res = await fetch("/notes");
    const data = await res.json();
    console.log(data);
    setNotes(data);
    setLoading(false);
  };

  const handleClick = async (id) => {
    try {
      setLoading(true);
      await fetch(`/notes/${id}`, {
        method: "DELETE",
      });
      getNotes();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <h4>Loading ...</h4>;
  } else {
    return (
      <div className="container">
        {notes.map((note) => {
          return <Note key={note.id} note={note} handleClick={handleClick} />;
        })}
      </div>
    );
  }
};

export default Notes;
