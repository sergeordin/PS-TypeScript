"use strict";
class Lead {
    name;
    phone;
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
}
class NewLead {
    observers = [];
    state;
    attach(observer) {
        if (this.observers.includes(observer)) {
            return;
        }
        this.observers.push(observer);
    }
    detach(observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex == -1) {
            return;
        }
        this.observers.splice(observerIndex, 1);
    }
    notify() {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}
class NotifServ {
    update(subject) {
        console.log('Notif');
        console.log(subject);
    }
}
class LeadServ {
    update(subject) {
        console.log('Lead');
        console.log(subject);
    }
}
const sub = new NewLead();
sub.state = new Lead('Serge', '8800555');
const s1 = new NotifServ();
const s2 = new LeadServ();
sub.attach(s1);
sub.attach(s2);
sub.notify();
sub.detach(s1);
sub.notify();
