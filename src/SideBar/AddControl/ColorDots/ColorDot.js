import "./ColorDot.css";
export default function ColorDot(props) {
  return (
    <div
      className="colordots"
      style={{ backgroundColor: props.color }}
      data-color={props.color}
    ></div>
  );
}
