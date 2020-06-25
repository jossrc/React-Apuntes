import '@testing-library/jest-dom';

import { getHeroById, getHeroesByOwner } from '../../data/heroes-function';
import heroes from '../../data/heroes';

describe('Pruebas en las funciones del archivo 08-imp-exp', () => {
  test('getHeroById() : Debe retornar un Héroe por id', () => {
    const id = 1;
    const heroById = getHeroById(id);
    const heroData = heroes.find((hero) => hero.id === id);

    expect(heroById).toEqual(heroData);
  });

  test('getHeroById() : Debe retornar undefined si Héroe no existe', () => {
    const id = 40;
    const heroById = getHeroById(id);

    expect(heroById).toBe(undefined);
  });

  test('getHeroesByOwner() : Debe de retornar los Héroes por owner', () => {
    const owner = 'DC';
    const heroesByOwner = getHeroesByOwner(owner);

    const heroesData = heroes.filter((hero) => hero.owner === owner);

    expect(heroesByOwner).toEqual(heroesData);
  });

  test('getHeroesByOwner() : Debe retornar un arreglo con los Héroes de Marvel, cuya longitud sea 2', () => {
    const owner = 'Marvel';
    const heroesByOwner = getHeroesByOwner(owner);

    const lngHeroesByMarvel = heroesByOwner.length;

    expect(lngHeroesByMarvel).toBe(2);
  });
});
