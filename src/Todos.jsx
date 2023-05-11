import React, { useState, useEffect } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("ourUser"));
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        const userTodos = json.filter((todo) => todo.userId === user.id);
        setTodos(userTodos);
      });
  }, []); // Add an empty dependency array to execute the effect only once

  function handleCheckChange(event, td) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === td.id) {
        return {
          ...todo,
          completed: event.target.checked,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function setCheck(td) {
    return (
      <>
        <input
          type="checkbox"
          name={td.id}
          checked={td.completed}
          onChange={(event) => handleCheckChange(event, td)}
        ></input>
        <label htmlFor={td.id}>{td.title}</label>
      </>
    );
  }

  return (
    <>
      <h2>your todos:</h2>
      <ul>
        {todos.map((td) => (
          <li>{setCheck(td)}</li>
        ))}
      </ul>
    </>
  );
}
/**
 left to do:
 have an option to sort the todos in different ways
 */
export default Todos;
