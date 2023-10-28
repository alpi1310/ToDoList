// Selector
let todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");
let todoOption = document.querySelector(".filter-todo");
let yourNme = document.querySelector("h1");
let alertMsg = document.querySelector(".msg");


// Evant Listeners
document.addEventListener("DOMContentLoaded", getTodos);
// document.addEventListener("DOMContentLoaded", nameYour);
todoInput.addEventListener("click", rmAlert);
todoButton.addEventListener("click", check);
todoList.addEventListener("click", deleteCheck);
todoOption.addEventListener("click", filterOption);


// function
function check(e) {
  e.preventDefault();
  if (todoInput.value === "" || todoInput.value === null) {

    createAlert(e);
  } else {
    addTodo(e);
  }
}
// create eliments for alert when user click on the add button whithout type anything
function createAlert(e) {

  // .......................................<h5>tag cration
  const hfive = document.createElement("h5");
  // ......................................class cration for h5
  hfive.classList.add("hfive");
  // ..................................text creation for h5
  const txtofalert = document.createTextNode(
    "Type Some Thing You Didnot Type Anything Yet!!"
  );
  hfive.appendChild(txtofalert); //append text in the <h5>tag
  alertMsg.appendChild(hfive); // append <h5>tag in the div which contains class of (.mesg)

}
// when user click on the add button they show alert msg and when they click in the input form alert msg will  removed.
function rmAlert(e) {
  for (let x = 0; x < alertMsg.children.length;) {
    if (alertMsg.children[x].classList.contains("hfive")) {
      for (let i = 0; i < alertMsg.children.length; i++) {
        alertMsg.children[i].remove();

      }
    }

  }


}


// change new todo
function addTodo(e) {
  //  prevent form from submitting
  e.preventDefault();
  //     todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  todoDiv.classList.add("uncompleted");
  // create Li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  //   console.log(newTodo);
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  // ADD TODO TO LOCALSTORAGE
  saveLocalTodo(todoInput.value);
  //   CHECK BUTTON
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //   TRAS BUTTON
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  // append todoList to todoDive
  todoList.appendChild(todoDiv);

  //   clear todo input value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;

  //  Delete button Action

  if (item.classList[0] === "trash-btn") {
    const rmTodo = item.parentElement;
    // Animation
    rmTodo.classList.add("fall");
    removeLocalTodos(rmTodo);
    // remove wait for animation
    rmTodo.addEventListener("transitionend", function () {
      rmTodo.remove();
    });
    // rmTodo.remove();
  }
  // checked button Action
  if (item.classList[0] === "complete-btn") {
    const chTodo = item.parentElement;
    chTodo.classList.toggle("completed");
    if (chTodo.classList[1] !== "completed") {
      chTodo.classList.remove("uncompleted");
    }
  }
}
// filter todo Function for filtering todo's

function filterOption(e) {
  const todos = todoList.childNodes;
  // console.log("hello");
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";

        break;
      case "Completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "Uncompleted":
        if (todo.classList.contains("uncompleted")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
  // console.log(e.target.value);
}

// Save on Local storage

function saveLocalTodo(todo) {
  // check ---do i already have things there

  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  // check ---do i already have things there
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  // console.log(todo);

  todos.forEach(function (todo) {
    //     todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    todoDiv.classList.add("uncompleted");

    // create Li
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;

    //   console.log(newTodo);
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //   CHECK BUTTON
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //   TRAS BUTTON
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // append todoList to todoDive
    todoList.appendChild(todoDiv);
  });
}

function removeLocalTodos(todo) {
  // check ---do i already have things there
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  // set to the local storage
  localStorage.setItem("todos", JSON.stringify(todos));
}
