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

//Test Code:
let myItem = new ToDoItem("Learn About Cookies=;"); 
myItem.isCompleted = false;
myItem.deadline = new Date(2019, 9, 29);  //October 29, 2019 (Month = 0-11)

//stringify converts object into JSON style string
let strData:string = JSON.stringify(myItem);
console.log(strData);

//Setting a cookie called "todoitems" that expires in 7 days
Cookies.set("todoitems", strData, {expires : 7})
Cookies.set("todoitems", strData, {expires : 7})



window.onload = function(){
    let addBtn:HTMLInputElement = document.querySelector("form > input[type=button]");
    addBtn.onclick = main;
}

function main():void{
    let item:ToDoItem = getItem();

    displayToDoItem(item);

    //Save todo
}

/**
 * Creates and returns ToDoItem object based on user input in the form
 */
function getItem():ToDoItem{
    let title:string = (<HTMLInputElement>document.getElementById("title")).value;
    let deadline:string = (<HTMLInputElement>document.getElementById("deadline")).value;

    let item = new ToDoItem(title);
    item.deadline = new Date(deadline);
    item.isCompleted = false;

    return item;
}

/**
 * Displays the given ToDoItem object on the webpage
 * @param item The ToDoList oject to be displayed
 */
function displayToDoItem(item:ToDoItem):void{
    //Create div to put the item in
    let div = document.createElement("div");

    //Moves clicked div into "Completed" div
    div.onclick = markAsComplete;

    //Adds an <input type="checkbox"> with the title of the item into the created div
    div.innerHTML = '<input type="checkbox">' + item.title;

    //Put new div into the ToDo div on the webpage
    let displayDiv = <HTMLDivElement>document.getElementById("todo");
    displayDiv.appendChild(div);

    console.log(div);
}

/**
 * Move selected item to the "Completed" div on webpage
 */
function markAsComplete():void{
    let currItem = <HTMLDivElement>this;
    let completedItems = document.getElementById("completed");
    completedItems.appendChild(currItem);
}