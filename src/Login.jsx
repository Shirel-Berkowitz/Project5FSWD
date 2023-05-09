import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); //??

  const handleLogin = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    const user = users.find((user) => user.username === username);

    if (!user) {
      setError("Username does not exist.");
      return;
    }

    if (user.username === username && user.email === password) {
      // successful login logic here
      // localStorage.setItem("user", users[i]);
      // <Link to="/logged">go</Link>;
      // go to logged page
    } else {
      setError("Incorrect username or password.");
    }
  };

  // const handleChangeName = (event) => {
  //   setName(event.target.value);
  // };
  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };
  // const changedName = (val) => {
  //   setName(val);
  // };
  // const changedPassword = (val) => {
  //   setPassword(val);
  // };
  // const log = () => {
  //   //let link="https://jsonplaceholder.typicode.com/users/"+password;
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       const users = json;
  //       let found = -1;
  //       for (let i = 0; i < users.length; i++) {
  //         if (
  //           users[i].username == name &&
  //           users[i].geo.lat.split(".")[1] == password
  //         ) {
  //           found = i;
  //         }
  //         if (found > -1) {
  //           localStorage.setItem("user", users[i]);
  //           <Link to="/logged">go</Link>;
  //           //go to logged page
  //         } else {
  //           alert("incorrect username or password");
  //         }
  //       }
  //     });
  // };
  return (
    <div>
      <form>
        <h2>Please enter your name:</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          // onChange={handleChangeName}
          // onChange={(e) => this.changedName(e.target.value)}
        ></input>
        <h2>Please enter your password:</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // onChange={handlePasswordChange}
          // onChange={(e) => this.changedPassword(e.target.value)}
        ></input>
        <button type="button" onClick={handleLogin}>
          Log in
        </button>
      </form>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}
export default Login;
