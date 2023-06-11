"use strict";
class UserHistory {
    email;
    name;
    createdAt;
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.createdAt = new Date();
    }
    clone() {
        let target = new UserHistory(this.email, this.name);
        target.createdAt = this.createdAt;
        return target;
    }
}
let user1 = new UserHistory('a@a.ru', 'Sergey');
console.log(user1);
const user2 = user1.clone();
console.log(user2);
