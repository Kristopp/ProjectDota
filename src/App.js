import React, { useState, useEffect } from "react";

import "./App.css";
import Toolbar from "./components/Toolbar";
import Sidedraw from "./components/Sidedraw";
import Backdrop from "./components/Backdrop";
import axios from "axios";

function App() {
  
  const [toggleSide, setToggleSide] = useState(false);
  const [proMatch, setproMatch] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const result = await axios("https://api.opendota.com/api/proMatches");
      setproMatch(result.data);
    };

    fetch();
  }, []);

  const toggleButtonHandle = () => {
    setToggleSide(() => {
      return setToggleSide(!toggleSide);
    });
  };

  const backDropClick = () => {
    setToggleSide(!toggleSide);
  };

  let backDrop;

  if (toggleSide) {
    backDrop = <Backdrop backClick={backDropClick} />;
  }
  return (
    <div style={{ height: "100%" }}>
      <Toolbar toggler={toggleButtonHandle} />
      <Sidedraw show={toggleSide} proMatchClick={proMatch} />
      {backDrop}
      <main style={{ marginTop: "64px" }} />
    </div>
  );
}

export default App;
