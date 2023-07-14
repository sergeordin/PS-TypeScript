"use strict";
function difference(a, b) {
    const keysToRemove = Object.keys(b);
    const filteredKeys = Object.keys(a).filter((key) => !keysToRemove.includes(key));
    return filteredKeys.reduce((obj, key) => {
        obj[key] = a[key];
        return obj;
    }, {});
}
const a = { a: 5, b: '' };
const b = { a: 10, c: true };
const diffObj = difference(a, b);
console.log(diffObj); // { b: '' }
