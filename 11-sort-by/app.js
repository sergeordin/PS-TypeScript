import sortBy from 'sort-by';
const people = [
    { name: 'Alice', age: 32 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 45 },
];
// Сортировка по имени по возрастанию
people.sort(sortBy('name'));
// Сортировка по возрасту по убыванию
people.sort(sortBy('-age'));
// Сортировка по имени по возрастанию, затем по возрасту по убыванию
people.sort(sortBy(['name', '-age']));
