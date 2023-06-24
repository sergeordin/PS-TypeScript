"use strict";
class Userr {
    userId;
    constructor(userId) {
        this.userId = userId;
    }
}
class CommandHistory {
    commands = [];
    push(command) {
        this.commands.push(command);
    }
    remove(command) {
        this.commands = this.commands.filter((c) => c.commandId !== command.commandId);
    }
}
class Command {
    history;
    commandId;
    constructor(history) {
        this.history = history;
        this.commandId = Math.random();
    }
}
class AddUserCommand extends Command {
    user;
    receiver;
    constructor(user, receiver, history) {
        super(history);
        this.user = user;
        this.receiver = receiver;
    }
    exec() {
        this.receiver.saveUser(this.user);
        this.history.push(this);
    }
    undo() {
        this.receiver.deleteUser(this.user.userId);
        this.history.remove(this);
    }
}
class UserrService {
    saveUser(user) {
        console.log('Saving user id ' + user.userId);
    }
    deleteUser(userId) {
        console.log('Deleting user ' + userId);
    }
}
class Controllerr {
    receiver;
    history = new CommandHistory();
    addReceiver(receiver) {
        this.receiver = receiver;
    }
    run() {
        const addUserCommand = new AddUserCommand(new Userr(1), this.receiver, this.history);
        addUserCommand.exec();
        console.log(addUserCommand.history);
        addUserCommand.undo();
        console.log(addUserCommand.history);
    }
}
const control = new Controllerr();
control.addReceiver(new UserrService());
control.run();
