"use strict";
class Notify {
    send(template, to) {
        console.log('Send ' + template + ' ' + to);
    }
}
class Log {
    log(message) {
        console.log(message);
    }
}
class Template {
    templates = [
        { name: 'other', template: '<h1>Template other</h1>' },
    ];
    getByname(name) {
        return this.templates.find((t) => name);
    }
}
class NotifFacade {
    notify;
    logger;
    template;
    constructor() {
        this.notify = new Notify();
        this.template = new Template();
        this.logger = new Log();
    }
    send(to, templateName) {
        const data = this.template.getByname(templateName);
        if (!data) {
            this.logger.log('Not found');
            return;
        }
        this.notify.send(data.template, to);
        this.logger.log('Sent');
    }
}
const s = new NotifFacade();
s.send('hello', 'other');
