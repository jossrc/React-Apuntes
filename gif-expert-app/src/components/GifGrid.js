import React, { useEffect, useState } from 'react';
import GifGridItem from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  /* 
   Tendremos una advertencia en el useEffect, ya que React tiene el
   pensamiento que si nuestro category cambia, tendremos que volver
   a recargar el useEffect y para eso dentro de los corchetes
   se le pasa ese dato para evitarlo.  
  */

  useEffect(() => {
    getGifs(category).then( setImages );
  }, [category]);

  return (
    <>
      <h3>{category}</h3>
      <div className='card-grid'>
        {images.map((img) => (
          /* Realizando desestructuración */
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
