import ToDo from "./todo";

export default class Project {
    constructor(title) {
        this.title = title;
        this.list = [];
    };

    appendToList(item) {
        this.list.push(item);
    };

    deleteFromList(itemTitle){
        const toBeDeleted = this.getFromList(itemTitle);
        this.list.splice((this.list.indexOf(toBeDeleted)),1);
    };

    getFromList(itemTitle) {
        const targetItem = this.list.find(item => item.title == itemTitle);
        if (targetItem) {
            return targetItem;
        };
    };

    updateListItem(itemTitle, key, value){
        const toBeUpdated = this.getFromList(itemTitle)
        toBeUpdated[key] = value;
    };
};