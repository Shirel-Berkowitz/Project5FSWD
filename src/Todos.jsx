import React, { useState } from "react";

function Todos() {
 // const [todos, setTodos] = useState("");
/*
  const handleLogin = async () => {
    let user = JSON.parse(localStorage.getItem("user"));
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const tt = await response.json();
    const userTodos = tt.filter((todo) => todo.userId === user.id);
    setTodos(userTodos);
    console.log(todos[0].title)
  }*/
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
  const setTodo= async ()=>{
    let user = JSON.parse(localStorage.getItem("user"));
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const tt = await response.json();
    console.log("hi");
    let userTodos=[];
    for(let i=0; i<tt.length; i++){
      if(tt[i].userId==user.id){
        userTodos.push(tt[i]);
      }
      
    }
    //const userTodos = tt.filter((todo) => todo.userId === user.id);

 
    return <ul>
      {userTodos.map(td=>(
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
      {setTodo()}
    </>
  );
}
//NOT FINISHED THIS PAGE
//DOESNT WORK YET
export default Todos;
