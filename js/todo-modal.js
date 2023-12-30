//open from desktop

const toDoAppIcon = document.querySelector("#toDo");
const toDoModal = document.querySelector("#toDoApp");

toDoAppIcon.addEventListener("dblclick", () => {
  toDoModal.showModal();
})

const closeToDoButton = document.querySelector("#closeToDo");
closeToDoButton.addEventListener("click", () => {
  toDoModal.close();
})

//open from menu
document.querySelector("#toDoMenuItem").addEventListener("click", () => {
  document.querySelector("#menu").style.display = "none";
  toDoModal.showModal();
})

//add items to list
const addTaskButton = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");
const toDoInput = document.querySelector("#toDoInput");

addTaskButton.addEventListener("click", () => {
  const newListItem = document.createElement("li");
  newListItem.classList.add("tasklist-item");
  newListItem.innerText = toDoInput.value;
  taskList.appendChild(newListItem);
  toDoInput.value = "";

  newListItem.addEventListener("click", () => {
    newListItem.style.textDecoration = "line-through";
  })
  newListItem.addEventListener("dblclick", () => {
    taskList.removeChild(newListItem);
  })
})

//trigger function on keypress enter
toDoInput.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    addTaskButton.click();
  }
})