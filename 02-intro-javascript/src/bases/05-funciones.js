// Funciones en JS

const greet = (name) => `Hola, ${name}`;

const getUser = () => ({
  uid: 'ABC123',
  username: 'raijinjr',
});

console.log(greet('Goku'));
console.log(getUser());

// Tarea
// 1. Transformar a una funcion de Flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas

/* 
function getActiveUser(name) {
    return {
        uid: 'ABC567',
        userName: name,
    }
}

const activeUser = getActiveUser('Joss');
console.log(activeUser);
 */

const getActiveUser = (userName) => ({
  uid: 'ABC567',
  userName,
});

const activeUser = getActiveUser('Joss');
console.log(activeUser);
