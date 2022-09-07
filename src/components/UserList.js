import React from "react";
import User from "./User";
import Users from "../data/Users";

import "./UserList.css";

function UserList() {
  return (
    <ul className="users-list">
      {Users.map((user) => (
        <User
          UserName={user["Display name"]}
          Title={user.Title}
          img={user["Display name"]}
        ></User>
      ))}
    </ul>
  );
}

export default UserList;
