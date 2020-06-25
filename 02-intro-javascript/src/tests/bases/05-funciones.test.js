import '@testing-library/jest-dom';
import { getUser, getActiveUser } from '../../bases/05-funciones';

describe('Pruebas en 05-funciones', () => {
  test('getUser() : Debe de retornar un objeto', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'raijinjr',
    };

    const user = getUser();

    expect(userTest).toEqual(user); // toStrictEqual
  });

  test('getActiveUser() : Debe de retornar un objeto', () => {
    const userName = 'joss';
    const userTest = {
      uid: 'ABC567',
      userName,
    };

    const activeUser = getActiveUser(userName);

    expect(userTest).toEqual(activeUser);

  });
});
