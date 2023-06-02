"use strict";
const obj = {
    a: 1,
    b: 2,
};
function swapKeysValues(obj) {
    const result = {};
    Object.entries(obj).forEach(([key, value]) => {
        result[value] = key;
    });
    return result;
}
const res = swapKeysValues(obj);
console.log(res);
