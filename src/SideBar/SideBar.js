import AddControl from "./AddControl/AddControl";
import "./SideBar.css";

export default function SideBar(props) {
  return (
    <div className="sidebar">
      <AddControl addNote={props.addNote} />
    </div>
  );
}
