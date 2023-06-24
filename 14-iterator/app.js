"use strict";
class ObjectIterator {
    index = 0;
    items;
    constructor(items) {
        this.items = items;
    }
    next() {
        return this.items[this.index++];
    }
    hasNext() {
        return this.index < this.items.length;
    }
}
class ObjectCollection {
    items;
    constructor(items) {
        this.items = items;
    }
    getIterator() {
        return new ObjectIterator(this.items);
    }
    getIteratorById(id) {
        return new ObjectIterator(this.items.filter((item) => item.id === id));
    }
    getIteratorByDate(date) {
        return new ObjectIterator(this.items.filter((item) => item.date === date));
    }
}
let collection = new ObjectCollection([
    { id: 1, date: '01-01-2023', text: 'text 1' },
    { id: 2, date: '02-01-2023', text: 'text 2' },
    { id: 3, date: '03-01-2023', text: 'text 3' },
]);
// Пример использования итератора по id
let iteratorById = collection.getIteratorById(1);
while (iteratorById.hasNext()) {
    let item = iteratorById.next();
    console.log(item);
}
// Пример использования итератора по date
let iteratorByDate = collection.getIteratorByDate('01-01-2023');
while (iteratorByDate.hasNext()) {
    let item = iteratorByDate.next();
    console.log(item);
}
