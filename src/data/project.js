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

    readToDo(title) {
        this.list.forEach(toDo => {
            if (toDo.title == title) {
                return toDo;
            };
        });
    }

    updateToDo(title, key, value) {
        this.list.forEach(toDo => {
            if (toDo.title == title) {
                let index = this.list.indexOf(toDo);
                this.list[index][key] = value;
            };
        });
    }

    deleteToDo(title) {
        this.list.forEach(toDo => {
            if (toDo.title == title) {
                this.list.splice((this.list.indexOf(toDo)), 1);
            };
        });
    };
};