import React from "react";
import { useParams } from "react-router-dom";
import Profile from "./Profile";

export default function ProfileParam() {
  let { topicId } = useParams();
  return (
    <div>
      <Profile id={topicId} />
    </div>
  );
}
