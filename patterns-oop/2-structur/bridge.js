"use strict";
class TelegramProvider {
    sendMessage(message) {
        console.log(message);
    }
    connect(config) {
        console.log(config);
    }
    disconnect() {
        console.log('Disconnected TG');
    }
}
class WhatsUpProvider {
    sendMessage(message) {
        console.log(message);
    }
    connect(config) {
        console.log(config);
    }
    disconnect() {
        console.log('Disconnected WU');
    }
}
class NotifSender {
    provider;
    constructor(provider) {
        this.provider = provider;
    }
    send() {
        this.provider.connect('connect');
        this.provider.sendMessage('message');
        this.provider.disconnect();
    }
}
class DelayNotifSender extends NotifSender {
    constructor(provider) {
        super(provider);
    }
    sendDelayd() { }
}
const sender = new NotifSender(new WhatsUpProvider());
sender.send();
const sender2 = new NotifSender(new TelegramProvider());
sender2.send();
