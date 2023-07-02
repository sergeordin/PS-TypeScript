class CollectionIterator implements IIterator<Object> {
    private idx: number = 0;
    private collection: Object[];

    constructor(collection: Object[]) {
        this.collection = collection;
    }

    current(): Object | undefined {
        return this.collection[this.idx];
    }

    next(): Object | undefined {
        this.idx += 1;

        if (this.idx >= this.collection.length) {
            return undefined;
        } else {
            return this.collection[this.idx];
        }
    }

    prev(): Object | undefined {
        this.idx -= 1;

        if (this.idx < 0) {
            return undefined;
        } else {
            return this.collection[this.idx];
        }
    }

    index(): number {
        return this.idx;
    }
}

const collection = [
    { id: 1, date: '01-01-2023', text: 'text 1' },
    { id: 2, date: '02-01-2023', text: 'text 2' },
    { id: 3, date: '03-01-2023', text: 'text 3' },
];

const iteratorById = new CollectionIterator(collection);
console.log(iteratorById.current());
console.log(iteratorById.next());
console.log(iteratorById.next());
console.log(iteratorById.prev());
console.log(iteratorById.index());

// Реализация итератора для поля date
class DateIterator implements IIterator<Object> {
    private idx: number = 0;
    private collection: Object[];

    constructor(collection: Object[]) {
        this.collection = collection.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);

            if (dateA > dateB) {
                return 1;
            } else if (dateA < dateB) {
                return -1;
            } else {
                return 0;
            }
        });
    }

    current(): Object | undefined {
        return this.collection[this.idx];
    }

    next(): Object | undefined {
        this.idx += 1;

        if (this.idx >= this.collection.length) {
            return undefined;
        } else {
            return this.collection[this.idx];
        }
    }

    prev(): Object | undefined {
        this.idx -= 1;

        if (this.idx < 0) {
            return undefined;
        } else {
            return this.collection[this.idx];
        }
    }

    index(): number {
        return this.idx;
    }
}

const iteratorByDate = new DateIterator(collection);
console.log(iteratorByDate.current());
console.log(iteratorByDate.next());
console.log(iteratorByDate.next());
console.log(iteratorByDate.prev());
console.log(iteratorByDate.index());
