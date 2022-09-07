import React from "react";
import "./User.css";

function User(props) {
  return (
    <li className="user-item" id="1">
      <div className="card user-item__content">
        <a href="#" onClick={HandlerClick_Card}>
          <div className="user-item__image avatar">
            <img src={`./img/${props.img}.jpg`} alt={props.UserName} />
          </div>
          <div className="user-item__info">
            <h2>{props.Title}</h2>
            <h3>0</h3>
          </div>
        </a>
      </div>
    </li>
  );
}

function HandlerClick_Card(event) {
  const userInfoVisitas = event.currentTarget.children[1].children[1];
  userInfoVisitas.innerHTML = parseInt(userInfoVisitas.innerHTML) + 1;
}

export default User;
