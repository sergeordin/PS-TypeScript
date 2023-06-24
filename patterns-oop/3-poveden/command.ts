class Userr {
    constructor(public userId: number) {}
}

class CommandHistory {
    public commands: Command[] = [];

    push(command: Command) {
        this.commands.push(command);
    }

    remove(command: Command) {
        this.commands = this.commands.filter(
            (c) => c.commandId !== command.commandId
        );
    }
}

abstract class Command {
    public commandId: number;

    abstract exec(): void;

    constructor(public history: CommandHistory) {
        this.commandId = Math.random();
    }
}

class AddUserCommand extends Command {
    constructor(
        private user: Userr,
        private receiver: UserrService,
        history: CommandHistory
    ) {
        super(history);
    }
    exec(): void {
        this.receiver.saveUser(this.user);
        this.history.push(this);
    }

    undo() {
        this.receiver.deleteUser(this.user.userId);
        this.history.remove(this);
    }
}

class UserrService {
    saveUser(user: Userr) {
        console.log('Saving user id ' + user.userId);
    }

    deleteUser(userId: number) {
        console.log('Deleting user ' + userId);
    }
}

class Controllerr {
    receiver: UserrService;
    history: CommandHistory = new CommandHistory();

    addReceiver(receiver: UserrService) {
        this.receiver = receiver;
    }
    run() {
        const addUserCommand = new AddUserCommand(
            new Userr(1),
            this.receiver,
            this.history
        );

        addUserCommand.exec();
        console.log(addUserCommand.history);
        addUserCommand.undo();
        console.log(addUserCommand.history);
    }
}

const control = new Controllerr();
control.addReceiver(new UserrService());
control.run();
