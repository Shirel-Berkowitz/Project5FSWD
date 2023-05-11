import React, { useState, useEffect } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("ourUser"));
    let ttt = JSON.parse(localStorage.getItem("todos"));
    if (ttt) {
      setTodos(ttt);
    } else {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => {
          const userTodos = json.filter((todo) => todo.userId === user.id);
          setTodos(userTodos);
        });
    }
  }, []); // Add an empty dependency array to execute the effect only once (to save unnecessary API requests and re-rendering of the component.)

  // //save the updated todo to local storage --> DIDN'T DO ANYTHING
  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

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
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
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

  // function setCheck(td) {
  //   if (td.completed) {
  //     return (
  //       <>
  //         <input type="checkbox" name={td.id} checked></input>
  //         <label for={td.id}>{td.title}</label>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <input type="checkbox" name={td.id}></input>
  //         <label for={td.id}>{td.title}</label>
  //       </>
  //     );
  //   }
  // }

  return (
    <>
      <h2>your todos:</h2>
      <ul>
        {todos.map((td) => (
          <li key={td.id}>{setCheck(td)}</li>
        ))}
      </ul>
    </>
  );
}
/**
 left to do:
 1. save the todos in localStorage
 2. have an option to sort the todos in different ways
 */
export default Todos;
