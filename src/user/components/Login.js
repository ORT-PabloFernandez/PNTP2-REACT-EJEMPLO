import React, { useState, useEffect } from "react";

const url = "http://127.0.0.1:3001/users/login";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerSubmit = (event) => {
    event.preventDefault();
    const user = {
      email: email,
      password: password,
    };

    const request = new Request(url, {
      method: "POST",
      body: JSON.stringify(user),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    fetch(request)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        sessionStorage.setItem("Token", res.token);
      })
      .catch((error) => console.log(error));
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form onSubmit={handlerSubmit}>
      <label>
        Email:
        <input type="Text" onChange={handleEmailChange} />
      </label>
      <br></br>
      <label>
        Password:
        <input type="Password" onChange={handlePasswordChange} />
      </label>
      <br></br>
      <br></br>
      <button type="Submit">Login</button>
    </form>
  );
};

export default Login;
