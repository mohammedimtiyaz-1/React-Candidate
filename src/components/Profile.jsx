import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Profile(props) {
  const [profile, setProfile] = useState();
  let history = useHistory();

  useEffect(() => {
    if (!JSON.parse(window.localStorage.getItem("employees"))) {
      console.log("No data");
    } else {
      const list = JSON.parse(window.localStorage.getItem("employees"));

      const prof = list.filter((e) => e.id === props.id);
      setProfile(prof[0]);
    }
  }, []);

  const shortlist = () => {
    console.log("shortlist");
    let list;
    if (!JSON.parse(window.localStorage.getItem("shortlist"))) {
      console.log("No data");
      list = [];
    } else {
      list = JSON.parse(window.localStorage.getItem("shortlist"));
      list.push(profile);
    }
    localStorage.setItem("shortlist", JSON.stringify(list));

    history.push("/");
  };
  const reject = () => {
    console.log("reject");
    let list;
    if (!JSON.parse(window.localStorage.getItem("reject"))) {
      console.log("No data");
      list = [];
    } else {
      list = JSON.parse(window.localStorage.getItem("reject"));
      list.push(profile);
    }
    localStorage.setItem("reject", JSON.stringify(list));

    history.push("/");
  };
  return (
    <div className="profile">
      {profile && (
        <div className="employee">
          <div className="picture">
            <img className="img-fluid" src={profile.Image} alt={profile.id} />
          </div>
          <div className="team-content">
            <h3 className="name">{profile.name}</h3>
          </div>

          <ul className="social">
            <li
              style={{ listStyleType: "none" }}
              key={"shortlist"}
              onClick={() => shortlist()}
            >
              <button
                style={{
                  margin: "10px",
                  fontSize: "20px",
                  boxShadow:
                    "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                }}
              >
                Shortlist
              </button>
            </li>
            <li
              style={{ listStyleType: "none" }}
              key={"reject"}
              onClick={() => reject()}
            >
              <button
                style={{
                  margin: "10px",
                  fontSize: "20px",
                  boxShadow:
                    "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                }}
              >
                Reject
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Profile;
