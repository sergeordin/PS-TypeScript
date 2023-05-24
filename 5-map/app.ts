interface Buckets {
    id: number;
    hash: number;
    title: string[] | string;
}

class MyMap {
    buckets: Buckets[] = [];

    hash(id: number): number {
        const r: number = Math.floor(Math.random() * 10 + 1);
        return id * r;
    }

    set(id: number, title: string) {
        this.buckets.push({
            id,
            hash: this.hash(id),
            title,
        });
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

const m = new MyMap();
for (let i = 1; i <= 10; i++) {
    m.set(i, `test${i}`);
}

console.log('BUCKETS ', m.buckets);
console.log('GET ', m.get(2));
console.log('AFTER GET ', m.buckets);
m.delete(1);
console.log('AFTER DELETE ', m.buckets);
m.clear();
console.log('AFTER CLEAR ', m.buckets);
