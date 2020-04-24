import React, {useState, useEffect} from "react";
import "./App.css";
import Notes from "./components/notes";
import AddNote from "./components/add-note";
import UpdatePage from "./components/update-page";

function App() {
  const [loading, setLoading] = useState(false);

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    setLoading(true);
    const res = await fetch("/notes");
    const data = await res.json();

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

  const handleAddNote = async (newInput) => {
    try {
      setLoading(true);
      await fetch("/notes", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newInput),
      });
      getNotes();
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return <h4>Loading ...</h4>;
  } else {
    return (
      <div className="App">
        <UpdatePage getNotes={getNotes} />
        <Notes notes={notes} handleClick={handleClick} />
        <AddNote handleAddNote={handleAddNote} />
      </div>
    );
  }
}

export default App;
