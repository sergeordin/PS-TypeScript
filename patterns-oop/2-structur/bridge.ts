interface IProvider {
    sendMessage(message: string): void;
    connect(config: unknown): void;
    disconnect(): void;
}

class TelegramProvider implements IProvider {
    sendMessage(message: string): void {
        console.log(message);
    }
    connect(config: string): void {
        console.log(config);
    }
    disconnect(): void {
        console.log('Disconnected TG');
    }
}

class WhatsUpProvider implements IProvider {
    sendMessage(message: string): void {
        console.log(message);
    }
    connect(config: string): void {
        console.log(config);
    }
    disconnect(): void {
        console.log('Disconnected WU');
    }
}

class NotifSender {
    constructor(private provider: IProvider) {}

    send() {
        this.provider.connect('connect');
        this.provider.sendMessage('message');
        this.provider.disconnect();
    }
}

class DelayNotifSender extends NotifSender {
    constructor(provider: IProvider) {
        super(provider);
    }
    sendDelayd() {}
}

const sender = new NotifSender(new WhatsUpProvider());
sender.send();

const sender2 = new NotifSender(new TelegramProvider());
sender2.send();
