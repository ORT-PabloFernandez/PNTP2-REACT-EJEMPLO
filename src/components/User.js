import React, { useState } from "react";
import "./User.css";

const User = (props) => {
  const [count, setCount] = useState(0);

  function HandlerClick_Card(event) {
    // const userInfoVisitas = event.currentTarget.children[1].children[2];
    // userInfoVisitas.innerHTML = parseInt(userInfoVisitas.innerHTML) + 1;
    setCount(count + 1);
  }

  return (
    <li className="user-item" id="1">
      <div className="card user-item__content">
        <a href="#" onClick={HandlerClick_Card}>
          <div className="user-item__image avatar">
            <img src={`./img/${props.img}.jpg`} alt={props.UserName} />
          </div>
          <div className="user-item__info">
            <h2>{props.UserName}</h2>
            <h2>{props.Title}</h2>
            <h3>{count}</h3>
          </div>
        </a>
      </div>
    </li>
  );
};

export default User;
