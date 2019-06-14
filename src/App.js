import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import axios from "axios";

import "./App.css";
import Store from './Store'
import Toolbar from "./components/Toolbar";
import Sidedraw from "./components/Sidedraw";
import Backdrop from "./components/Backdrop";

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
    <Provider store={Store}>
      <div style={{ height: "100%" }}>
        <Toolbar toggler={toggleButtonHandle} />
        <Sidedraw show={toggleSide} proMatchClick={proMatch} />
        {backDrop}
        <main style={{ marginTop: "64px" }} />
      </div>
    </Provider>
  );
}

export default App;
