"use strict";
class Task {
    priority;
    constructor(priority) {
        this.priority = priority;
    }
}
class TaskList {
    tasks = [];
    sortByPriority() {
        this.tasks = this.tasks.sort((a, b) => {
            if (a.priority > b.priority) {
                return 1;
            }
            else if (a.priority > b.priority) {
                return 0;
            }
            else {
                return -1;
            }
        });
    }
    addTask(task) {
        this.tasks.push(task);
    }
    getTask() {
        return this.tasks;
    }
    count() {
        return this.tasks.length;
    }
    getIterator() {
        return new PriorityIterator(this);
    }
}
class PriorityIterator {
    idx = 0;
    taskList;
    constructor(taskList) {
        taskList.sortByPriority();
        this.taskList = taskList;
    }
    current() {
        return this.taskList.getTask()[this.idx];
    }
    next() {
        this.idx += 1;
        return this.taskList.getTask()[this.idx];
    }
    prev() {
        this.idx -= 1;
        return this.taskList.getTask()[this.idx];
    }
    index() {
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
