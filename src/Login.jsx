import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const changedName = (val) => {
    setName(val);
  };
  const changedPassword = (val) => {
    setPassword(val);
  };
  const log = () => {
    //check that everything works
    //save to storage
    //go to logged page
  };
  return (
    <div>
      <h2>Please enter your name:</h2>
      <input
        type="text"
        value={name}
        onChange={handleChangeName}
        // onChange={(e) => this.changedName(e.target.value)}
      ></input>
      <h2>Please enter your password:</h2>
      <input
        value={password}
        onChange={handlePasswordChange}
        // onChange={(e) => this.changedPassword(e.target.value)}
      ></input>
      <button onClick={log}>log in</button>
    </div>
  );
}
export default Login;
