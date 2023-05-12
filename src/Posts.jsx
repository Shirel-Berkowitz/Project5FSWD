import React, { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null); // New state variable

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("ourUser"));
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        const userPosts = json.filter((post) => post.userId === user.id);
        setPosts(userPosts);
      });
  }, []);

  function postPressed(pst) {
    setSelectedPost(pst); // Update selected post
  }

  return (
    <>
      <h2>your posts:</h2>
      <ul>
        {posts.map((pst) => (
          <li key={pst.id}>
            <button
              onClick={() => postPressed(pst)}
              className={selectedPost === pst ? "selectedPost" : ""}
            >
              <h3>{pst.title}</h3>
              <p>{pst.body}</p>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Posts;

/**
 left to do:
 have an option to view comments
 */
