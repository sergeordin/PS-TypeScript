"use strict";
function difference(a, b) {
    const keysToRemove = Object.keys(b);
    const filteredKeys = Object.keys(a).filter((key) => !keysToRemove.includes(key));
    return filteredKeys.reduce((obj, key) => {
        obj[key] = a[key];
        return obj;
    }, {});
}
let a = { a: 5, b: '' };
let b = { a: 10, c: true };
let v0 = difference(a, b);
console.log(v0); // { b: '' }
