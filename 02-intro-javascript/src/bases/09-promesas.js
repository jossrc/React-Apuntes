import { getHeroById } from '../data/heroes-function';

// Promesas

const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);

      if (hero) {
        resolve(hero);
      }

      reject(new Error('Heroe no encontrado'));
    }, 2000);
  });
};

getHeroByIdAsync(4)
  .then(console.log)
  .catch(console.warn);
