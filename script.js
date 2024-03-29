const inputTask = document.getElementById("input-task");
const addTaskBtn = document.getElementById("add-task-btn");
const taskContainer = document.getElementById("task-container");

let taskList = document.createElement("ul");
taskList.classList.add("task-list");
taskContainer.append(taskList);

addTaskBtn.addEventListener("click", checkInput);

function checkInput() {
  if (inputTask.value === "") {
    alert("Please entet your task");
  } else {
    addTask();
  }
}

function addTask() {
  let task = document.createElement("li");
  let taskText = document.createElement("p");
  taskText.innerText = inputTask.value;
  inputTask.value = "";
  taskList.append(task);
  task.append(taskText);

  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  task.append(checkBox);
}
