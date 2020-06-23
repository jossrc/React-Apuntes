import heroes from './heroes';

const getHeroById = (id) => {
  return heroes.find((hero) => id === hero.id);
};

const getHeroesByOwner = (owner) => {
  return heroes.filter((hero) => owner === hero.owner);
};

export {
    getHeroById,
    getHeroesByOwner
}