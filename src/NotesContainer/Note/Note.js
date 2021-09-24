import { useState } from "react";
import "./Note.css";

export default function Notes(props) {
  const [content, setContent] = useState(props.note.content);

  const updateContent = (evt) => {
    const text = evt.target.value;
    setContent(text);
    props.updateNote(props.note.id, text);
  };

  return (
    <div
      data-id={props.note.id}
      className="note"
      style={{ backgroundColor: props.note.color }}
    >
      <textarea
        ex
        className="textBox"
        type="text"
        value={content}
        onChange={(evt) => updateContent(evt)}
      />
      <div className="footer">
        <div>{props.note.cdate}</div>
        <div
          className="deleteBtn"
          onClick={() => props.deleteNote(props.note.id)}
        >
          Delete
        </div>
      </div>
    </div>
  );
}
