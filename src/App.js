import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Shortlist from "./components/Shortlist";
import Rejected from "./components/Reject";
import Home from "./components/Home.jsx";
import ProfileParam from "./components/ProfileParam.jsx";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <div className="Navbar">
          <ul className="navbaritems">
            <li className="items" key={"/"}>
              <NavLink to="/" className="items">
                HOME
              </NavLink>
            </li>
            <li className="items" key={"/1"}>
              <NavLink to="/shortlist" className="items">
                SHORTLIST
              </NavLink>
            </li>
            <li className="items" key={"/2"}>
              <NavLink to="/rejected" className="items">
                REJECT
              </NavLink>
            </li>
          </ul>
        </div>

        <Switch>
          <Route exact path="/shortlist">
            <Shortlist />
          </Route>
          <Route exact path="/profile/:topicId">
            <ProfileParam />
          </Route>
          <Route exact path="/rejected">
            <Rejected />
          </Route>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}
