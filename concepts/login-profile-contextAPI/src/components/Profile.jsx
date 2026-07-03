import React from "react";
import { useProfile } from "../contexts";

export const Profile = () => {
  const { userName } = useProfile();
  return (
    <div>
      <h3>User is: {userName} </h3>
    </div>
  );
};
