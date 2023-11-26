/* this function gets the todo item from the input */
function get_todos(){

    /* this creates an array of inputed todos */
    let todos = new Array;

    /* this calls the data that was saved in the browser */
    let todo_str = localStorage.getItem("todo");

    /* if the input is not null then JSON.parse will communicate with the 
    web browser to make the task a javascript objects */
    if(todo_str !== null){
        todos = JSON.parse(todo_str);
    }
    return todos;
}

/* this function adds the iputted task to the get_todos function array */
function add(){

    /* this takes the inputed task and creates a variable of it */
    let task = document.getElementById("task").value;

    let todos = get_todos();

    /* this as new task to the end of the array */
    todos.push(task);

    /* this converts the task input into a JSOn string */
    localStorage.setItem("todo", JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

/* this function shows all the taks that were inputed */
function show(){

    /* this sets the task that was retrieved as a variable */
    let todos = get_todos();

    let html = "<ul>";

    /* this displays a task in the the list in the order that it was entered */
    for(let i = 0; i < todos.length; ++i){

        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };

    html += '</ul>';
    document.getElementById("todos").innerHTML = html;
}

// this function is for removing an item from the todo list
function remove(){

    let id = this.getAttribute('id');
    let todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem("todo", JSON.stringify(todos));
    show();

    return false;
}

document.getElementById("add").addEventListener("click", add);
show();

// this tells the browser how to display the array after an item
// has been removed
let buttons = document.getElementsByClassName("remove");
for(const element of buttons){
    element.addEventListener("click", remove);
};


