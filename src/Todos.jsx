import React, { useState } from "react";

function Todos() {
  const [todos, setTodos] = useState("");

  const handleLogin = async () => {
    console.log("ok ok ok")
    let user = JSON.parse(localStorage.getItem("ourUser"));
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const tt = await response.json();
    const userTodos = tt.filter((todo) => todo.userId === user.id);
    setTodos(userTodos);
    console.log(todos[0].title)
  }
  handleLogin()
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
  
   
    //const userTodos = tt.filter((todo) => todo.userId === user.id);
  function func(){
    setTimeout(() => {
      
    }, 3000);
    return <ul>
    {todos.map(td=>(
      <li>
        {setCheck(td)}
      </li>
    )
      
    )}
    </ul>
  }
    
    
  
  return (
    <>
    <h2>your todos:</h2>
    
  {func()}
   
    </>
  );
}
//NOT FINISHED THIS PAGE
//DOESNT WORK YET
export default Todos;
