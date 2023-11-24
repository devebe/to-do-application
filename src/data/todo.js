export default class ToDo {
    constructor(title, dueDate, description) {
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
        this.priority = 0;
        this.isComplete = false;
    };
};