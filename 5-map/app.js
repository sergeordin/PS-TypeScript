"use strict";
class MyMap {
    id;
    title;
    price;
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
    buckets = [{}];
    set() { }
    delete() { }
    get() { }
    clear() { }
}
