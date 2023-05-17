import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";

function Albums() {
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [displayedPhotos, setDisplayedPhotos] = useState([]);
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(10);

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
        setDisplayedPhotos(albumPhotos.slice(start, start + limit));
      });
  }

  function loadMorePhotos() {
    setStart(start + limit);
    setDisplayedPhotos(photos.slice(start + limit, start + 2 * limit));
  }

  return (
    <>
      <h2>Your albums:</h2>
      <ul>
        {albums.map((albm) => (
          <li className="Album" key={albm.id}>
            <button className="AlbumBtn" onClick={() => albumPressed(albm)}>
              <h3>{albm.title}</h3>
              <p>{albm.body}</p>
            </button>
          </li>
        ))}
      </ul>

      <ul className="photosUl">
        {displayedPhotos.map((phtos) => (
          <li key={phtos.id}>
            <div>
              <h3>{phtos.title}</h3>
              <img src={phtos.thumbnailUrl} alt={phtos.title} />
            </div>
          </li>
        ))}
      </ul>

      {photos.length > displayedPhotos.length && (
        <button onClick={loadMorePhotos}>Load More</button>
      )}
    </>
  );
}

export default Albums;
