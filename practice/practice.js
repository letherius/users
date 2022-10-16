//constructor
function Task(description,priority)
this.priority=priority;

//global variable
let inputPractice = document.getElementById('txtPractice'); //getting the html element
let selectPriority = document.getElementById('selPriority');
let task="";

function register(){
    let newTask = new Task();
    display();
    inputPractice.value=""; //clearing the input
    inputPractice.className="error";//adding the css class
}

function display(){
    let tasksSection = document.getElementById("tasks");//getting the HTML element
    //task += "<p class='task'>" + inputPractice.value + "</p>"; //create the task html element
    task+=`<li class="task">${inputPractice.value} - ${selPriority.value} <button>🗑️</button></li>`; 
    tasksSection.innerHTML=task;//injecting the task into the html
}