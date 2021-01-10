import React, { useState, useEffect } from "react";
import Employees from "./Employees";

function Reject() {
  const [employees, setEmployees] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!JSON.parse(window.localStorage.getItem("reject"))) {
      setEmployees([]);
    }
    setEmployees(JSON.parse(localStorage.getItem("reject")));
  }, []);

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };
  const searchList = () => {
    setEmployees([
      ...employees.filter((e) => e.name.toLowerCase().includes(search)),
    ]);
  };

  return (
    <>
      <h3 style={{ textAlign: "center", color: "Red" }}>Rejected Candidates</h3>
      <div style={{ margin: "20px" }}>
        <div className="search">
          <input
            type="Search"
            className="search"
            placeholder="candidate..."
            onChange={(e) => changeHandler(e)}
          ></input>
          <button type="submit" onClick={() => searchList()}>
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
      <Employees list={employees} showProfile={false} />
    </>
  );
}

export default Reject;
