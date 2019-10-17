/**
 * Represents a single task on a ToDo List
 */
var ToDoItem = /** @class */ (function () {
    function ToDoItem(task) {
        this.title = task;
    }
    return ToDoItem;
}());
var myItem = new ToDoItem("DO THE FUCKING THING");
