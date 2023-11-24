import ToDo from "./todo";

export default class Project {
    constructor(title) {
        this.title = title;
        this.list = [];
    };

    createToDo(title, ...args) {
        let toDo = new ToDo(title);
        toDo.dueDate = new Date(args[0]).toLocaleString().split(',')[0];
        toDo.description = args[1];
        toDo.priority = args[2];
        toDo.notes = args[3];
        this.list.push(toDo);
    };

    updateToDo(title, key, value) {
        this.list.forEach(todo => {
            if (todo.title == title) {
                let index = this.list.indexOf(todo);
                this.list[index][key] = value;
            };
        });
    }

    deleteToDo(title) {
        this.list.forEach(todo => {
            if (todo.title == title) {
                this.list.splice((this.list.indexOf(todo)), 1);
            };
        });
    };
};