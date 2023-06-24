"use strict";
class Form {
    name;
    constructor(name) {
        this.name = name;
    }
}
class SaveForm {
    save(form) {
        const res = this.fill(form);
        this.log(res);
        this.send(res);
    }
    log(data) {
        console.log(data);
    }
    send(data) { }
}
class FirstAPI extends SaveForm {
    fill(form) {
        return form.name;
    }
    send(data) {
        console.log(data + ' send');
    }
}
class SecondAPI extends SaveForm {
    fill(form) {
        return { fio: form.name };
    }
    send(data) {
        console.log(data + ' send');
    }
}
const form1 = new FirstAPI();
form1.save(new Form('Vasya'));
const form2 = new SecondAPI();
form2.save(new Form('Vasya'));
