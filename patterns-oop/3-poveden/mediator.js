"use strict";
class Mediated {
    mediator;
    setMediator(mediator) {
        this.mediator = mediator;
    }
}
class Notifications {
    send() {
        console.log('Sent notif');
    }
}
class LogMes {
    log(message) {
        console.log(message);
    }
}
class EventHandler extends Mediated {
    myEvent() {
        this.mediator.notify('EventHandler', 'myEvent');
    }
}
class NotificationMediator {
    notifications;
    logger;
    handler;
    constructor(notifications, logger, handler) {
        this.notifications = notifications;
        this.logger = logger;
        this.handler = handler;
    }
    notify(_, event) {
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
