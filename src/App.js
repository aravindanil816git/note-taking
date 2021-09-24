import { useState } from "react";

import NotesContainer from "./NotesContainer/NotesContainer";
import SideBar from "./SideBar/SideBar";
import "./styles.css";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [lastId, setLastId] = useState(0);

  const addNote = (color) => {
    const newNote = {
      id: lastId + 1,
      content: "New Note created",
      cdate: new Intl.DateTimeFormat("en-US").format(Date.now()),
      color: color
    };
    setNotes([...notes, newNote]);
    setLastId(lastId + 1);
  };

  const deleteNote = (id) => {
    const filteredArray = notes.filter((note) => note.id !== id);
    setNotes(filteredArray);
  };

  const updateNote = (id, content) => {
    console.log(id, content);
    const updateArray = notes.map((note) => {
      if (note.id === id) {
        return { ...note, content: content };
      }
      return note;
    });
    console.log(updateArray);
    setNotes(updateArray);
  };

  return (
    <div className="wrapper">
      <div className="App">
        <SideBar addNote={addNote} />
        <NotesContainer
          notesArr={notes}
          updateNote={updateNote}
          deleteNote={deleteNote}
        />
      </div>
    </div>
  );
}
