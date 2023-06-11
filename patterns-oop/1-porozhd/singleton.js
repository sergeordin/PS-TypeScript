"use strict";
class MyMap {
    static instance;
    map = new Map();
    constructor() { }
    clean() {
        this.map = new Map();
    }
    static get() {
        if (!MyMap.instance) {
            return (MyMap.instance = new MyMap());
        }
        else {
            return MyMap.instance;
        }
    }
}
// Use
class Service1 {
    addMap(key, value) {
        const myMap = MyMap.get();
        myMap.map.set(key, value);
    }
}
class Service2 {
    getKeys(key) {
        const myMap = MyMap.get();
        console.log(myMap.map.get(key));
        myMap.clean();
        console.log(myMap.map.get(key));
    }
}
new Service1().addMap(1, 'Work');
new Service2().getKeys(1);
