import React from "react";


const List = props => {
  
  return (
    <div className="container fluid rounded">
      <div className="row">
        <div className="col-md-2 id">
          <span className="align-middle">{`ID: ${props.id}`}</span>
        </div>
        <div className="col-md-3 name">
          <span className="align-middle radiant">{props.nameRadiant}</span>
        </div>
        <div className="col-md-auto">VS</div>
        <div className="col-md-3">{props.nameDire}</div>
        <div className="col-md-auto">replay: {}</div>
      </div>
      <div className="row">
        <div className="col-md-2 radiantScore">
          <span className="align-middle">{`Radiant Score: ${
            props.radiantScore
          }`}</span>
        </div>
        <div className="col-md-2 Winner">
          <span className="align-middle Winner">Winner</span>
        </div>
        <div className="col-md-3 duration">
          <span className="align-middle duration">{`
        Duration min: ${props.durationMinutes} 
        sec: ${props.durationSeconds}`}</span>
        </div>
        <div className="col-md-auto">Looser</div>
        <div className="col-md-2">{`Dire Score:  ${props.direScore}`}</div>
      </div>
    </div>
  );
};

export default List;
