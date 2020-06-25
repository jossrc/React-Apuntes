import { getHeroById } from '../data/heroes-function';

// Promesas

export const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);

      if (hero) {
        resolve(hero);
      } else {
        reject(new Error('Heroe no encontrado'));
      }

    }, 1500);
  });
};

/* 
getHeroByIdAsync(4)
  .then(console.log)
  .catch(console.warn);
 */