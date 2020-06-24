import '@testing-library/jest-dom';

import { getGreet } from '../../bases/02-template-string';

describe('Pruebas en 02-template-string ', () => {
  test('getGreet() : Debe retornar Bienvenido a React José !', () => {
    const name = 'José';
    const greeting = getGreet(name);

    expect(greeting).toBe(`Bienvenido a React ${name} !`);
  });

  test('getGreet() : Debe de retornar Bienvenido a React Carlos ! si no hay argumento nombre', () => {
    const greeting2 = getGreet();

    expect(greeting2).toBe('Bienvenido a React Carlos !');
  });
});
