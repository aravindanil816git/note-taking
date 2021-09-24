import { useState } from "react";
import "./AddControl.css";
import ColorDot from "./ColorDots/ColorDot";

export default function AddControl(props) {
  const [isOpenMenu, toggleMenu] = useState(false);
  const colors = [
    "rgb(254, 201, 113)",
    "rgb(254, 155, 114)",
    "rgb(182, 147, 253)",
    "rgb(0, 212, 254)",
    "rgb(228, 239, 144)"
  ];

  const onClickColor = (evt) => {
    const color = evt.target.dataset["color"];
    if (color && colors.indexOf(color) !== -1) {
      props.addNote(color);
    }
  };

  return (
    <div>
      <button className="addBtn" onClick={() => toggleMenu(!isOpenMenu)}>
        {isOpenMenu ? "X" : "+"}
      </button>
      <div
        onClick={onClickColor}
        className={`colorpanel ${isOpenMenu ? "open" : "closed"}`}
      >
        {colors.map((color, index) => (
          <ColorDot key={index} color={color} />
        ))}
      </div>
    </div>
  );
}
