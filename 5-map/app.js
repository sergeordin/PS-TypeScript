"use strict";
class MyMap {
    buckets = [];
    hash(id) {
        const r = Math.floor(Math.random() * 10 + 1);
        return id * r;
    }
    set(id, title) {
        this.buckets.push({
            id,
            hash: this.hash(id),
            title,
        });
    }
    get(id) {
        return this.buckets.filter((i) => i.id === id);
    }
    delete(id) {
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
