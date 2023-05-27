"use strict";
/*
    Необходимо написать функцию toString, которая принимает любой тип и возвращает его строковое представление. Если не может, то возвращает undefined
*/
function toString(data) {
    if (Array.isArray(data)) {
        return data.toString();
    }
    switch (typeof data) {
        case 'string':
            return data;
        case 'number':
        case 'symbol':
        case 'bigint':
        case 'boolean':
        case 'function':
            return data.toString();
        case 'object':
            return JSON.stringify(data);
        default:
            return undefined;
    }
}
console.log(toString(3));
console.log(toString(true));
console.log(toString(['a', 'b']));
console.log(toString({ a: 1 }));
