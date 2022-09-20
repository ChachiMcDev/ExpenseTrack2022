
const person = {
    name: 'chuck',
    age: 100,
    location: {
        city: 'Seattle',
        temp: 90
    }
}


// const { name, age } = person;
// //const { city, temp: temperature } = person.location;

// console.log(`${name} is ${age} yrs old`)

// console.log(`${name} lives in ${city} where it's ${temperature} degrees`)



const book = {
    title: 'ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'penguin'
    }
};


const { name: publisherName = 'self published' } = book.publisher;


console.log(publisherName);

const address = ['1299 S Juniper Stree', 'Philadelphia', 'Pennsylvania', '19417'];

const [street, city, state, zip] = address;

console.log(`you are in${city}, ${state}`)

const item = ['coffee', '$2.00', '$2.50', '$2.75']

const [itemName, , medPrice,] = item;

console.log(`a medium ${itemName} is ${medPrice}`)