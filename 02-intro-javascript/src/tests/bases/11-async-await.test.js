import '@testing-library/jest-dom';

import { getImage } from '../../bases/11-async-await';

describe('Realizando pruebas en el archivo 11-async-await', () => {
  test('Debe de retornar el url de la imagen', async () => {
    const url = await getImage();

    expect(url.includes('https://')).toBe(true);
  });
});
