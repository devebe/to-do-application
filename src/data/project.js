import ToDo from "./todo";

export default class Project {
    constructor(title) {
        this.title = title;
        this.list = [];
    };

    appendToList(toDo){
        this.list.push(toDo);
    };

    deleteFromList(toDoTitle){
        const toBeDeleted = this.getFromList(toDoTitle);
        this.list.splice((this.list.indexOf(toBeDeleted)),1);
    };

    getFromList(toDoTitle) {
        const targetToDo = this.list.find(item => item.title == toDoTitle);
        if (targetToDo) {
            return targetToDo;
        };
    };

    updateListItem(itemTitle, key, value){
        const toBeUpdated = this.getFromList(itemTitle)
        toBeUpdated[key] = value;
    };
};