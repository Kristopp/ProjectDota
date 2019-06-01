import React from "react";

const List = props => {
  return (
    <ul>
      <li>
        <span>{props.id}</span>
      </li>
      <li>
          <span> {props.name}</span>
      </li>
    </ul>
  );
};

export default List;
