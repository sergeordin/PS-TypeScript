"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class UserService2 {
    users = 1000;
    getUsersInDB() {
        throw new Error('Error');
    }
}
__decorate([
    Catch({ rethrow: true })
], UserService2.prototype, "getUsersInDB", null);
function Catch({ rethrow } = { rethrow: true }) {
    return (target, _, descriptor) => {
        const method = descriptor.value;
        descriptor.value = async (...args) => {
            try {
                return await method?.apply(target, args);
            }
            catch (error) {
                if (error instanceof Error) {
                    console.log(error.message);
                    if (rethrow) {
                        throw error;
                    }
                }
            }
        };
    };
}
console.log(new UserService2().getUsersInDB());
