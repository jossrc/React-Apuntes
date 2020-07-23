import React, { useEffect, useState } from 'react';

const GifGrid = ({ category }) => {
  /* 
        Cada vez que se realiza un cambio (useState) React actualiza
        todo el componente, y si trabajamos con peticiones, las vuelve a traer.
        Y si estuvieramos trabajando con un setFunction entrariamos en un ciclo
        infinito.
        Por eso se recomienda trabajar con useEffect
    */

  const [count, setCount] = useState(0);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=One Piece&limit=10&api_key=TU_API_KEY`;

    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    console.log(gifs);
  };

  return (
    <div>
      <h3>{category}</h3>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <p>{count}</p>
    </div>
  );
};

export default GifGrid;
