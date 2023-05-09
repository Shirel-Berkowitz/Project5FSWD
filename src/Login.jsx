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
    //let link="https://jsonplaceholder.typicode.com/users/"+password;
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        const users=json;
        let found=-1;
        for(let i=0; i<users.length; i++){
          if(users[i].username==name && users[i].geo.lat.split(".")[1]==password){
            found=i;
          }
          if(found>-1){
            localStorage.setItem("user", users[i]);
            <Link to="/logged">go</Link>
            //go to logged page
          }
          else{
            alert("incorrect username or password");
          }
        }
      });
    
    
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
