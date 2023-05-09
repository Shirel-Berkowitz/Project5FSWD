import React, { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Logged from "./Logged";
import Posts from "./Posts";

function HomePage() {
  //make a constructor that wipes the local storage clean
  return (
    <div>
      <h1>hello, welcome to our app</h1>
      <button>
        <Link to="/login">Log in</Link>
      </button>
      <button>
        <Link to="/logged">go</Link>
      </button>
    </div>
  );
}

export default HomePage;
