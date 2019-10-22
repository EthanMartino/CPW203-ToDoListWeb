/**
 * Represents a single task on a ToDo List
 */
var ToDoItem = /** @class */ (function () {
    function ToDoItem(task) {
        this.title = task;
    }
    return ToDoItem;
}());
var myItem = new ToDoItem("Finish Class");
window.onload = function () {
    var addBtn = document.querySelector("form > input[type=button]");
    addBtn.onclick = main;
};
function main() {
    var item = getItem();
    displayToDoItem(item);
    //Save todo
}
/**
 * Creates and returns ToDoItem object based on user input in the form
 */
function getItem() {
    var title = document.getElementById("title").value;
    var deadline = document.getElementById("deadline").value;
    var item = new ToDoItem(title);
    item.deadline = new Date(deadline);
    item.isCompleted = false;
    return item;
}
/**
 * Displays the given ToDoItem object on the webpage
 * @param item The ToDoList oject to be displayed
 */
function displayToDoItem(item) {
    //Create div to put the item in
    var div = document.createElement("div");
    //Moves clicked div into "Completed" div
    div.onclick = markAsComplete;
    //Adds an <input type="checkbox"> with the title of the item into the created div
    div.innerHTML = '<input type="checkbox">' + item.title;
    //Put new div into the ToDo div on the webpage
    var displayDiv = document.getElementById("todo");
    displayDiv.appendChild(div);
    console.log(div);
}
/**
 * Move selected item to the "Completed" div on webpage
 */
function markAsComplete() {
    var currItem = this;
    var completedItems = document.getElementById("completed");
    completedItems.appendChild(currItem);
}
