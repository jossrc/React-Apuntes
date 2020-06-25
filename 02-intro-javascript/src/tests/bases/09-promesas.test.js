import '@testing-library/jest-dom';

import { getHeroByIdAsync } from '../../bases/09-promesas.js';
import heroes from '../../data/heroes';

describe('Pruebas en el archivo 09-promesas', () => {
  test('getHeroByIdAsync() : Debe de retornar un Héroe de manera asíncrona', (done) => {
    const id = 1;
    getHeroByIdAsync(id).then((hero) => {
      expect(hero).toBe(heroes[0]);
      done();
    });
  });

  test('getHeroByIdAsync() : Debe de retornar un error si el Héroe por id no existe', (done) => {
    const id = 10;
    getHeroByIdAsync(id).catch((error) => {
        expect(error.message).toBe('Heroe no encontrado');
        done();
    })
  })

});
