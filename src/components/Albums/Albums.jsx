import React, { useState, useEffect } from 'react';

function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function fetchAlbums() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        if (response.ok) {
          const data = await response.json();
          setAlbums(data);
        } else {
          console.log('error get albums');
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchAlbums();
  }, []);

  return (
    <div>
      <h2>Список альбомов</h2>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Albums;
