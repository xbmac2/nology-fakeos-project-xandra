const toDoIcon = document.querySelector("#todo");
const openToDoApp = () => {
  let toDoApp = document.createElement('div');
  toDoApp.className = 'modal';
  toDoApp.id = 'todo-app';
  toDoApp.innerHTML = '<button class="close-btn" id="close-btn">X</button><p id="todelete">To Do App contents here</p><button id="sec">M</button>';
  document.querySelector("#todo").appendChild(toDoApp);
  toDoIcon.removeEventListener("dblclick", openToDoApp)
};

toDoIcon.addEventListener("dblclick", openToDoApp)


const closeToDoApp = () => {
  // const parent = document.querySelector("#todo");
  // const child = document.querySelector("#todelete");
  // parent.removeChild(child);
  //document.querySelector("todo-app").hidden = true;
  alert ("click");
}

const closeButton = document.querySelector("#sec");
closeButton.addEventListener("click", closeToDoApp);
