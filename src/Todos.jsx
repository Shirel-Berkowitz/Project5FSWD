import React, { Component } from "react";

function Todos() {
  const [todos, setTodos] = useState("");

  const handleLogin = async () => {
    let user = JSON.parse(localStorage.getItem("user"));
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    const userTodos = todos.filter((todo) => todo.userId === user.id);
  }
  
  function setTodo(td){
    if(td.completed){
      return <><input type="checkbox" name={td.id} checked></input>
                <label for={td.id}>{td.title}</label></>
    }
    else{
      return <><input type="checkbox" name={td.id} ></input>
                <label for={td.id}>{td.title}</label></>
    }
    
  }
  return (
    <>
      <h2>your todos:</h2>
      <ul>
        {todos.map(td=>(<il>
          {this.setTodo()}
          </il>))}
      </ul>
    </>
  );
}
//NOT FINISHED THIS PAGE
//DOESNT WORK YET
export default Todos;
