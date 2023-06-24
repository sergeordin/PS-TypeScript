class Task {
    constructor(public priority: number) {}
}

class TaskList {
    private tasks: Task[] = [];

    public sortByPriority() {
        this.tasks = this.tasks.sort((a, b) => {
            if (a.priority > b.priority) {
                return 1;
            } else if (a.priority > b.priority) {
                return 0;
            } else {
                return -1;
            }
        });
    }

    public addTask(task: Task) {
        this.tasks.push(task);
    }

    public getTask() {
        return this.tasks;
    }

    public count() {
        return this.tasks.length;
    }

    public getIterator() {
        return new PriorityIterator(this);
    }
}

interface IIterator<T> {
    current(): T | undefined;
    next(): T | undefined;
    prev(): T | undefined;
    index(): number;
}

class PriorityIterator implements IIterator<Task> {
    private idx: number = 0;
    private taskList: TaskList;

    constructor(taskList: TaskList) {
        taskList.sortByPriority();
        this.taskList = taskList;
    }

    current(): Task | undefined {
        return this.taskList.getTask()[this.idx];
    }
    next(): Task | undefined {
        this.idx += 1;
        return this.taskList.getTask()[this.idx];
    }
    prev(): Task | undefined {
        this.idx -= 1;
        return this.taskList.getTask()[this.idx];
    }
    index(): number {
        return this.idx;
    }
}

const taskList = new TaskList();
taskList.addTask(new Task(8));
taskList.addTask(new Task(1));
taskList.addTask(new Task(3));

const iterator = taskList.getIterator();
console.log(iterator.current());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.prev());
console.log(iterator.index());
