interface Mediator {
    notify(sender: string, event: string): void;
}

abstract class Mediated {
    mediator: Mediator;
    setMediator(mediator: Mediator) {
        this.mediator = mediator;
    }
}

class Notifications {
    send() {
        console.log('Sent notif');
    }
}

class LogMes {
    log(message: string) {
        console.log(message);
    }
}
class EventHandler extends Mediated {
    myEvent() {
        this.mediator.notify('EventHandler', 'myEvent');
    }
}

class NotificationMediator implements Mediator {
    constructor(
        public notifications: Notifications,
        public logger: LogMes,
        public handler: EventHandler
    ) {}

    notify(_: string, event: string): void {
        switch (event) {
            case 'myEvent':
                this.notifications.send();
                this.logger.log('Sent log');

                break;
        }
    }
}

const handler = new EventHandler();
const logg = new LogMes();
const notif = new Notifications();

const med = new NotificationMediator(notif, logg, handler);

handler.setMediator(med);
handler.myEvent();
