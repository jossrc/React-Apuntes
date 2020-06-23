// Desestructuración
// Asignación desestructurante

const people = {
  name: 'Tony',
  age: 45,
  key: 'Ironman',
};

const { name: theName, key } = people;

console.log(theName, key);

const useContext = ({ key, name, age, rank = 'Líder' }) => {
  console.log(name, age, rank);
  return {
    keyName: key,
    age,
    latlng: {
      lat: 14.1232,
      lng: -12.3232,
    },
  };
};

const {
  keyName,
  age,
  latlng: { lat, lng },
} = useContext(people);

console.log(keyName, age, lat, lng);
