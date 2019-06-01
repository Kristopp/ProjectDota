import React from "react";
import "../App.css";

const Backdrop = props => {
  return <div className="backdrop" onClick={props.backClick} />;
};

export default Backdrop;
