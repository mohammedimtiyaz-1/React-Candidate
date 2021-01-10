import { useState, useEffect } from "react";
import Employees from "./Employees";

function Home() {
  const [employees, setEmployees] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!JSON.parse(window.localStorage.getItem("employees"))) {
      console.log("FEtching data from API");
      fetch(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          window.localStorage.setItem("employees", JSON.stringify(res));
          window.localStorage.setItem("shortlist", JSON.stringify([]));
          window.localStorage.setItem("reject", JSON.stringify([]));
        });
    }
    const short = JSON.parse(localStorage.getItem("shortlist"))
      ? JSON.parse(localStorage.getItem("shortlist"))
      : [];
    const reject = JSON.parse(localStorage.getItem("reject"))
      ? JSON.parse(localStorage.getItem("reject"))
      : [];
    const toExclute = [...short, ...reject];
    const list = JSON.parse(localStorage.getItem("employees"));
    const actaulList = list.filter(
      (e) => toExclute.findIndex((ele) => ele.id === e.id) === -1
    );
    setEmployees(actaulList);
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
    <div>
      <h3 style={{ textAlign: "center", color: "Blue" }}>Candidates</h3>
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
      <Employees key="employees" list={employees} showProfile={true} />
    </div>
  );
}

export default Home;
