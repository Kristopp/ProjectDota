import React from "react";
import List from "./List";

const DataList = props => {

  return (
    <React.Fragment>
      {props.list.map(list => (
        <List key={list.match_id} 
        id={list.match_id} 
        nameRadiant={list.radiant_name} 
        radiantScore ={list.radiant_score}
        nameDire={list.dire_name} 
        direScore ={list.dire_score}
        durationMinutes={Math.floor(list.duration / 60)}
        durationSeconds={Math.floor(list.duration % 60 )}
        heroID={list.hero_id}
        />
      ))}
    </React.Fragment>
  );
};

export default DataList;
