import React, { useState } from 'react';

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    'One Punch-Man',
    'Samurai X',
    'Dragon Ball',
  ]);

  const handleAdd = () => {
    // Método 1
    // setCategories(['HunterXHunter', ...categories]);

    // Método 2
    setCategories((categs) => [...categs, 'FullMetal Alchemist']);
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr /> <br />
      <button onClick={handleAdd}>Agregar</button>
      <ol>
        {categories.map((anime) => (
          <li key={anime}>{anime}</li>
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
