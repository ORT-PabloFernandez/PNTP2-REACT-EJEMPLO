import React from "react";
import User from "./User";

import "./UserList.css";

function UserList(props) {
  return (
    <ul className="users-list">
      {props.items.map((user) => (
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
