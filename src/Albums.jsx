import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";

function Albums() {
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("ourUser"));
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((json) => {
        const userAlbums = json.filter((album) => album.userId === user.id);
        setAlbums(userAlbums);
      });
  }, []);

  function albumPressed(albm) {
    //show all photos related to the clicked album
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => {
        const albumPhotos = json.filter((phtos) => phtos.albumId === albm.id);
        setPhotos(albumPhotos);
      });
  }

  return (
    <>
      <h2>Your albums:</h2>
      <ul>
        {albums.map((albm) => (
          <li key={albm.id}>
            <button onClick={() => albumPressed(albm)}>
              <h3>{albm.title}</h3>
              <p>{albm.body}</p>
            </button>
          </li>
        ))}
      </ul>

      <h2>Album photos:</h2>
      <ul>
        {photos.map((phtos) => (
          <li key={phtos.id}>
            <div>
              <h3>{phtos.title}</h3>
              <p>{phtos.url}</p>
              <p>{phtos.thumbnailUrl}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Albums;
