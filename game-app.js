

// function createGameApp() {
//   const gameModal = document.createElement("dialog");
//   gameModal.id = "game-app";
//   gameModal.innerHTML = '<button class="close-btn">X</button><p>you can see me</p>';

//   document.querySelector("#game").appendChild(gameModal);
// }

// const gameIconBox = document.getElementById("game");
// const gameModal = document.getElementById("game-app");

// const openGameApp = () => {
//   gameModal.showModal();
// };

// gameIconBox.addEventListener("dblclick", () => {
//   createGameApp();
//   openGameApp();
// })


function create() {
  const testCreate = document.createElement('div');
  testCreate.className = "icon-container";
  testCreate.innerHTML = '<img id="top" class ="app-icon"  src="icons8-idea-64.png" alt=""><p class="icon-name">Ideas App</p>';

  document.querySelector('#desktop').appendChild(testCreate);
}

const testButton = document.querySelector("#test");
testButton.addEventListener("click", create);