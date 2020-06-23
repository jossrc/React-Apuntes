const name = 'Jose';
const lastName = 'Robles';

const fullName = `${name} ${lastName}`;

function getGreet(fullName) {
  return `Bienvenido a React ${fullName}`;
}

console.log(`Este es un mensaje: ${getGreet(fullName)}`);
