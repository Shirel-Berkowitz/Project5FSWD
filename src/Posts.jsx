import React, { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [comments, setComments] = useState([]);
  //const [show, setShow]=useState([]);
  //const show

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
    //show all comments related to the clicked post
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => {
        const postComments = json.filter((cmnts) => cmnts.postId === pst.id);
        setComments(postComments);
      });
  }
  /* function selectComments(pst){
    setShow(show.push(pst));
  } */
  function showComments(pst){
    console.log("my brains are fried");
    /* let comments=[];
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => {
        comments = json.filter((cmnts) => cmnts.postId === pst.id);
      }); */
    if(pst=selectedPost){
      return 
      <>
      <h3>comments:</h3>
      <ul>
        {comments.map((cmnts) => (
          <li key={cmnts.id}>
            <div className="commentsDiv">
              <h3>{cmnts.name}</h3>
              <h4>{cmnts.email}</h4>
              <p>{cmnts.body}</p>
            </div>
          </li>
        ))}
      </ul>
      </>;
    }
    else{
      return <></>;
    }
   
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
            
            {showComments(pst)}
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
