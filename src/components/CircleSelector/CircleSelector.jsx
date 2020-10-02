import React from "react";
import "./CircleSelector.css";

export default function CircleSelector(props) {
  return (
    <div className="CircleSelector">
      <button
        className={props.selection[1]}
        onClick={() => props.handleOnClick(1)}
      >
        SELECT CIRCLE 1
      </button>
      <button
        className={props.selection[2]}
        onClick={() => props.handleOnClick(2)}
      >
        SELECT CIRCLE 2
      </button>
      <button
        className={props.selection[3]}
        onClick={() => props.handleOnClick(3)}
      >
        SELECT CIRCLE 3
      </button>
      <button
        className={props.selection[4]}
        onClick={() => props.handleOnClick(4)}
      >
        SELECT CIRCLE 4
      </button>
    </div>
  );
}
