/**
 * Represents a single task on a ToDo List
 */
var ToDoItem = /** @class */ (function () {
    function ToDoItem(task) {
        this.title = task;
    }
    return ToDoItem;
}());
//Test Code:
var myItem = new ToDoItem("Learn About Cookies=;");
myItem.isCompleted = false;
myItem.deadline = new Date(2019, 9, 29); //October 29, 2019 (Month = 0-11)
//stringify converts object into JSON style string
var strData = JSON.stringify(myItem);
console.log(strData);
//COOKIE TESTS\\
var cookieKey = "todoitems";
//Setting a cookie called "todoitems" that expires in 7 days
Cookies.set(cookieKey, strData, { expires: 7 });
//Reading ToDoItem from Cookie
var cookieItem = JSON.parse(Cookies.get(cookieKey));
console.log("Read Cookie data");
console.log(cookieItem.title + " " + cookieItem.deadline);
//STORE TODO ITEM USING HTML WEB STORAGE
var storageKey = "Task";
if (typeof (Storage) != undefined) {
    localStorage.setItem(storageKey, strData);
    var storageStr = localStorage.getItem(storageKey);
    var storageItem = JSON.parse(storageStr);
    console.log("Reading Sotrage Data");
    console.log(storageItem.title);
}
//END TEST CODE\\
window.onload = function () {
    var addBtn = document.querySelector("form > input[type=button]");
    addBtn.onclick = main;
};
function main() {
    var item = getItem();
    displayToDoItem(item);
    //Save todo
    var allItems = readToDoItems();
    allItems.push(item);
    saveToDoItems(allItems);
    for (var i = 0; i < allItems.length; i++) {
        alert(allItems[i].title);
    }
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
var theStorageKey = "MyItems";
function saveToDoItems(items) {
    var stringData = JSON.stringify(items);
    localStorage.setItem(theStorageKey, stringData);
}
function readToDoItems() {
    var stringData = localStorage.getItem(theStorageKey);
    if (stringData == null) {
        return new Array();
    }
    var itemArray = JSON.parse(stringData);
    return itemArray;
}
