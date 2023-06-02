"use strict";
/*
    Написать функцию получения нужных данных из объектов
*/
const user = {
    name: 'Vasiliy',
    age: 8,
    skills: ['typescript', 'javascript'],
};
function pickObjectKeys(obj, keys) {
    return keys.reduce((acc, key) => {
        if (obj.hasOwnProperty(key)) {
            acc[key] = obj[key];
        }
        return acc;
    }, {});
}
const result = pickObjectKeys(user, ['age', 'skills']);
console.log(result);
