const characters = ['Goku', 'Vegeta', 'Trunks'];

const [p1, , trunks] = characters;
// console.log(p1, trunks);

export const returnArray = () => {
  return ['ABC', 123];
};

// const [letters] = returnArray();

// console.log(letters);

// Tarea
// 1. El primer valor del arr se llamará name
// 2. El segundo valor del arr se llamará setName

/* 
const useState = (value) => {
  return [
    value,
    () => {
      console.log('Hello World');
    },
  ];
};

const arr = useState('Goku');
console.log(arr);
 */

const useState = (value) => {
  return [
    value,
    () => {
      console.log('Hello World');
    },
  ];
};

/* 
const [name, setName] = useState('Goku');
console.log(name);
setName();
 */