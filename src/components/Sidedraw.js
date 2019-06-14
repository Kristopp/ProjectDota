import React from "react";
import Datalist from "./DataList";
import "../App.css";


const Sidedraw = props => {
  let drawClass = "sideDraw";
  if (props.show) {
    drawClass = "sideDraw open";
  }
  return (
    <div>
      <nav className={drawClass}>
        <ul>
          <li
            className="matches"
            onClick={() => console.log(props.proMatchClick)}
          >
            Pro matches
          </li>
          <li className="matches" onClick={() => console.log()}>
            Public mathes
          </li>
          <li className="matches">Players</li>
          <li className="matches">Teams</li>
        </ul>
      </nav>

      <Datalist list={props.proMatchClick} />
    </div>
  );
};

export default Sidedraw;
