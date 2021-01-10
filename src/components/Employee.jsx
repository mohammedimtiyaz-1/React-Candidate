import React from "react";
import { NavLink } from "react-router-dom";

function Employee(props) {
  return (
    // <div className="card">
    //   <img src={props.data.Image} alt={props.data.id}></img>
    //   <p>{props.data.Image}</p>
    // </div>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="employee">
        <div className="picture">
          <img
            className="img-fluid"
            src={props.data.Image}
            alt={props.data.id}
          />
        </div>
        <div className="team-content">
          <h3 className="name">{props.data.name}</h3>
        </div>
        {props.showProfile && (
          <NavLink to={`/profile/${props.data.id}`}>See profile</NavLink>
        )}
      </div>
    </div>
  );
}

export default Employee;
