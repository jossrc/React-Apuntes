
const people = {
    name: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        city: 'New York',
        zip: 555321321,
        lat: 14.3232,
        lng: 34.923321
    }
}

console.table(people);

const people2 = {...people};
people2.name = 'Peter'

console.log({people,people2});

