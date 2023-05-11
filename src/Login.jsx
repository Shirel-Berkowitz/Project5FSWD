import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    const user = users.find((user) => user.username === username);

    if (!user) {
      setError("Username does not exist.");
      return;
    }
    // password is the last 4 digits of "lat"
    const userPassword = user.address.geo.lat.slice(-4);

    if (user.username === username && userPassword === password) {
      console.log("successful login");
      localStorage.removeItem("ourUser");
      localStorage.setItem("ourUser", JSON.stringify(user));
      setError(<Link to="/logged">go to the next page</Link>);
    } else {
      setError("Incorrect password.");
    }
  };

  return (
    <div>
      <form>
        <h2>Please enter your name:</h2>
        <h4>username: Bret</h4>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <h2>Please enter your password:</h2>
        <h4>password: 3159</h4>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
