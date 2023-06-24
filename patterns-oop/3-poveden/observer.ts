interface Observer {
    update(subject: Subject): void;
}

interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
}

class Lead {
    constructor(public name: string, public phone: string) {}
}

class NewLead implements Subject {
    private observers: Observer[] = [];
    public state: Lead;

    attach(observer: Observer): void {
        if (this.observers.includes(observer)) {
            return;
        }
        this.observers.push(observer);
    }

    detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex == -1) {
            return;
        }
        this.observers.splice(observerIndex, 1);
    }

    notify(): void {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}

class NotifServ implements Observer {
    update(subject: Subject): void {
        console.log('Notif');
        console.log(subject);
    }
}

class LeadServ implements Observer {
    update(subject: Subject): void {
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
