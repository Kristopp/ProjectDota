import React from "react";
import "../App.css";


const Leftbutton = props => {
  return (
    <button className="toggle-button" onClick={props.click}>
      <div className="toggle-button_line" />
      <div className="toggle-button_line" />
      <div className="toggle-button_line" />
    </button>
  );
};

export default Leftbutton;
