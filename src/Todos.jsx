import React, { useState,  useEffect  } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("ourUser"));
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {const userTodos = json.filter((todo) => todo.userId === user.id);
        setTodos(userTodos);})
  });

 
  function setCheck(td){
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
    {todos.map(td=>(
      <li>
        {setCheck(td)}
      </li>
    )
      
    )}
    </ul>
  

    </>
  );
}
/**
 left to do:
 1.fix checkbox so it is possible to uncheck it
 2.have an option to sort the todos in different ways
 */
export default Todos;
