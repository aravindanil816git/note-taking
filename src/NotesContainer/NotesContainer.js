import Notes from "./Note/Note";
import "./NotesContainer.css";

export default function NotesContainer(props) {
  return (
    <div className="notes-container">
      <div className="title">Notes</div>
      <div className="notes-section">
        {props.notesArr.map((note, index) => (
          <Notes
            key={index}
            note={note}
            updateNote={props.updateNote}
            deleteNote={props.deleteNote}
          />
        ))}
      </div>
    </div>
  );
}
