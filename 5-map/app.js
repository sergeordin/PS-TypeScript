"use strict";
class MyMap {
    static getHash(value) {
        return value.length.toString();
    }
    values = {};
    set(key, value) {
        const hash = MyMap.getHash(key);
        if (this.values[hash]) {
            this.values[hash][key] = value;
        }
        else {
            this.values[hash] = {
                [key]: value,
            };
        }
    }
    get(key) {
        const hash = MyMap.getHash(key);
        return Object.values(this.values[hash]).find((item) => item.hasOwnProperty(key));
    }
    delete(key) {
        const hash = MyMap.getHash(key);
        if (this.values[hash] && this.values[hash].hasOwnProperty(key)) {
            delete this.values[hash][key];
        }
    }
    clear() {
        this.values = {};
    }
}
const mapData = [
    { rate: 5, city: 'Moscow' },
    { rate: 5, city: 'Kazan' },
    { rate: 4, city: 'Saint-P' },
    { rate: 4, city: 'NNovgorod' },
    { rate: 3, city: 'Omsk' },
];
const m = new MyMap();
mapData.forEach((item) => {
    m.set(item.city, item.rate);
});
console.log(m);
