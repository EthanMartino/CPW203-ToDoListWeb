/**
 * Represents a single task on a ToDo List
 */
class ToDoItem{
    title:string;
    deadline:Date;
    isCompleted:boolean;

    constructor(task:string){
        this.title = task;
    }
}

let myItem = new ToDoItem("DO THE FUCKING THING"); 