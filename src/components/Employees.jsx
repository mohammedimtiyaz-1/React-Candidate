import React from "react";
import Employee from "./Employee";

function Employees(props) {
  return (
    <div>
      {props.list &&
        props.list.map((ele) => (
          <Employee key={ele.id} data={ele} showProfile={props.showProfile} />
        ))}
    </div>
  );
}

export default Employees;
