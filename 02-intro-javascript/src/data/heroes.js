const heroes = [
  {
    id: 1,
    name: 'Batman',
    owner: 'DC',
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: 'Marvel',
  },
  {
    id: 3,
    name: 'Superman',
    owner: 'DC',
  },
  {
    id: 4,
    name: 'Flash',
    owner: 'DC',
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: 'Marvel',
  },
];

export const owners = ['Marvel', 'DC'];
// La exportación se realiza como si se estuviera desestructurando

export default heroes;
// La importación se realiza sin llaves, podemos establecer cualquier nombre

/* 
Otra forma : 

  export {
    heroes as default,
    owners
  }

*/
