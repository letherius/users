let listTasks = [];// empty array
//constructor
function Task(description,priority){
    this.title=description;// this is the problem ***
    this.priority=priority;
}

//global variable
let inputPractice = document.getElementById('txtPractice'); //getting the html element
let selectPriority = document.getElementById('selPriority');
let task="";

function register(){
    let newTask = new Task(inputPractice.value, selectPriority.value);
    listTasks.push(newTask);
    display(newTask);
    inputPractice.value=""; //clearing the input
    inputPractice.className="error";//adding the css class
}

function display(aTask){
    let tasksSection = document.getElementById("tasks");//getting the HTML element
    //task += "<p class='task'>" + inputPractice.value + "</p>"; //create the task html element
    task+=`<li class="task">${aTask.title} --- ${aTask.priority} <button>🗑️</button></li>`; 
    tasksSection.innerHTML=task;//injecting the task into the html
}