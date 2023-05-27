interface Buckets {
    rate: number;
    city: string;
    id: number;
}

interface Group<T> {
    [key: string]: T[];
}

type key = string | number | symbol;

class MyMap {
    buckets = []; // Здесь не понимаю как типизировать

    //Сет перенес из следующего упражнения
    set<T extends Record<key, any>>(array: T[], key: keyof T): Group<T> {
        return array.reduce<Group<T>>((map: Group<T>, item) => {
            const itemKey = item[key];
            let curEl = map[itemKey];
            if (Array.isArray(curEl)) {
                curEl.push(item);
            } else {
                curEl = [item];
            }
            map[itemKey] = curEl;
            this.buckets = map;
        }, {});
    }

    get(id: number) {
        return this.buckets.filter((i) => i.id === id);
    }
    delete(id: number) {
        this.buckets = this.buckets.filter((i) => i.id !== id);
        return this.buckets;
    }
    clear() {
        this.buckets = [];
    }
}

const mapData: Buckets[] = [
    { rate: 5, city: 'Moscow', id: 1 },
    { rate: 5, city: 'Kazan', id: 2 },
    { rate: 4, city: 'Saint-P', id: 3 },
    { rate: 4, city: 'NNovgorod', id: 4 },
    { rate: 3, city: 'Omsk', id: 5 },
];

const m = new MyMap();
m.set(mapData, 'rate');
console.log('BUCKETS ', m.buckets);
console.log('GET ', m.get(2));
console.log('AFTER GET ', m.buckets);
m.delete(1);
console.log('AFTER DELETE ', m.buckets);
m.clear();
console.log('AFTER CLEAR ', m.buckets);
