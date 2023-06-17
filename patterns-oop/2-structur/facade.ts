class Notify {
    send(template: string, to: string) {
        console.log('Send ' + template + ' ' + to);
    }
}

class Log {
    log(message: string) {
        console.log(message);
    }
}

class Template {
    private templates = [
        { name: 'other', template: '<h1>Template other</h1>' },
    ];

    getByname(name: string) {
        return this.templates.find((t) => name);
    }
}

class NotifFacade {
    private notify: Notify;
    private logger: Log;
    private template: Template;

    constructor() {
        this.notify = new Notify();
        this.template = new Template();
        this.logger = new Log();
    }

    send(to: string, templateName: string) {
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
