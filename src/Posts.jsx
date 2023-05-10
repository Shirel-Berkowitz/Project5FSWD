import React, { useState, useEffect } from "react";
function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("ourUser"));
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {const userPosts = json.filter((post) => post.userId === user.id);
        setPosts(userPosts);})
  });

  function postPressed(pst){
    //choose post and make it bold
  }
  
  
  return (
    <>
    <h2>your posts:</h2>
    <ul>
    {posts.map(pst=>(
      <li>
        <button onclick={postPressed(pst)}>
        <h3>{pst.title}</h3>
        <p>{pst.body}</p>
        </button>  
      </li>
    )
      
    )}
    </ul>
  

    </>
  );
}

/**
 left to do:
 1.write the function for when the post is clicked
 2.have an option to view comments
 */
export default Posts;
