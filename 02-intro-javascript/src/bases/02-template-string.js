const name = 'Jose';
const lastName = 'Robles';

const fullName = `${name} ${lastName}`;

export function getGreet(fullName = 'Carlos') {
  return `Bienvenido a React ${fullName} !`;
}

// console.log(`Este es un mensaje: ${getGreet(fullName)}`);
