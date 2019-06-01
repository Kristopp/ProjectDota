import React from "react";
import List from "./List";

const DataList = props => {
  console.log(props.list);
  return (
    <div>
      <ul>
        {props.list.map(list => (
          <List
            key={list.match_id}
            id={list.match_id}
            name={list.radiant_name}
          />
        ))}
      </ul>
    </div>
  );
};

export default DataList;
