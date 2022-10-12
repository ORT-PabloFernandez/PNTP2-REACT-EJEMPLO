import React, { useState } from "react";

const url = "http://127.0.0.1:3001/users";
const NewUser = (props) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerSubmit = (event) => {
    event.preventDefault();
    const user = {
      name: userName,
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
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  const handleNameChange = (event) => {
    setUserName(event.target.value);
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
        Name:
        <input type="Text" onChange={handleNameChange} />
      </label>
      <br></br>
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
      <button type="Submit">Submit</button>
    </form>
  );
};

export default NewUser;
