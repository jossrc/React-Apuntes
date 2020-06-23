import hola, { owners } from '../data/heroes';

console.log(owners);

const getHeroById = (id) => {
  return hola.find((hero) => id === hero.id);
};

const getHeroesByOwner = (owner) => {
  return hola.filter((hero) => owner === hero.owner);
};

console.log(getHeroById(2));
console.log(getHeroesByOwner('DC'));
