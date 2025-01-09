import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  //when logging in/out
  localStorage.removeItem("ourUser");
  localStorage.removeItem("todos");

  return (
    <div>
      <h1>hello, welcome to our app</h1>
      <button>
        <Link to="/login">Log in</Link>
      </button>
    </div>
  );
}

export default HomePage;
