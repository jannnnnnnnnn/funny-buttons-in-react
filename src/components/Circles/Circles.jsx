import React from "react";
import "./Circles.css";

export default function Circles(props) {
  return (
    <div className="Circles">
      <div
        className={props.selection[1]}
        onClick={() => props.handleOnClick(1)}
      >
        1
      </div>
      <div
        className={props.selection[2]}
        onClick={() => props.handleOnClick(2)}
      >
        2
      </div>
      <div
        className={props.selection[3]}
        onClick={() => props.handleOnClick(3)}
      >
        3
      </div>
      <div
        className={props.selection[4]}
        onClick={() => props.handleOnClick(4)}
      >
        4
      </div>
    </div>
  );
}
