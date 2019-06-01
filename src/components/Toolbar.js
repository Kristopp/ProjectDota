import React from "react";
import ToggleButton from "./ToggleButton";
import Dota2Logo from "../img/Dota2Logo.png";

const SearchBar = props => {
  return (
    <header className="toolbar">
      <nav className="toolbar_navigation">
        <div>
          <ToggleButton click={props.toggler} />
        </div>
        <div className="toolbar_logo">
          <img className="img" src={Dota2Logo} alt="" />
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            <li />
          </ul>
        </div>
      </nav>
    </header>
  );
};
/*const c1style = {
  background: "black"
}; */

export default SearchBar;
