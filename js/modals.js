


const gameIconBox = document.getElementById("game");
const gameModal = document.getElementById("game-app");

const openGameApp = () => {
  gameModal.showModal();
};

gameIconBox.addEventListener("dblclick", openGameApp);


//const dialog = document.querySelector("dialog");
const closeButton = document.querySelector("#close-game");
const closeApp = () => {
  gameModal.close();
};
closeButton.addEventListener("click", closeApp);