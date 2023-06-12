"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class User {
    age = 30;
}
__decorate([
    allowFunc((a) => a > 0)
], User.prototype, "age", void 0);
const person = new User();
console.log(person.age);
person.age = 0;
console.log(person.age);
person.age = 20;
console.log(person.age);
function allowFunc(checkFunc) {
    return function (target, propertyKey) {
        let value = target[propertyKey];
        const setter = function (newVal) {
            if (checkFunc(newVal)) {
                value = newVal;
            }
            else {
                console.log('Error');
            }
        };
        const getter = function () {
            return value;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    };
}
