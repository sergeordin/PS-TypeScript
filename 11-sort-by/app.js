import sortBy from 'sort-by';
const people = [
    { name: 'Alice', age: 32 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 45 },
];
const result = sortBy(people, 'age', true);
console.log(result);
