import '@testing-library/jest-dom';
import { returnArray } from '../../bases/07-deses-arr';

describe('Pruebas en el archivo 07-deses-arr', () => {
  test('returnArray() : Debe de retornar un string y un número', () => {
    const [letters, numbers] = returnArray(); // ['ABC', 123]

    expect(typeof letters).toBe('string');
    expect(letters).toEqual('ABC');

    expect(typeof numbers).toBe('number');
    expect(numbers).toEqual(123);
  });
});
