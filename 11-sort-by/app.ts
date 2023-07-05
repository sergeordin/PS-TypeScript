import sortBy from './app.d';

interface Person {
    name: string;
    age: number;
}

const people: Person[] = [
    { name: 'Alice', age: 32 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 45 },
];

// Сортировка по имени по возрастанию
people.sort(sortBy('name'));

// Сортировка по возрасту по убыванию
people.sort(sortBy('-age'));
