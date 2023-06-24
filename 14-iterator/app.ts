interface Iterator<T> {
    next(): T;
    hasNext(): boolean;
}

class ObjectIterator implements Iterator<any> {
    private index: number = 0;
    private items: any[];

    constructor(items: any[]) {
        this.items = items;
    }

    public next(): any {
        return this.items[this.index++];
    }

    public hasNext(): boolean {
        return this.index < this.items.length;
    }
}

class ObjectCollection {
    private items: any[];

    constructor(items: any[]) {
        this.items = items;
    }

    public getIterator(): Iterator<any> {
        return new ObjectIterator(this.items);
    }

    public getIteratorById(id: number): Iterator<any> {
        return new ObjectIterator(this.items.filter((item) => item.id === id));
    }

    public getIteratorByDate(date: string): Iterator<any> {
        return new ObjectIterator(
            this.items.filter((item) => item.date === date)
        );
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
