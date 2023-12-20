const dialog = document.querySelector("dialog");
const closeButton = document.querySelector(".close-btn");
const closeApp = () => {
  dialog.close();
};
closeButton.addEventListener("click", closeApp);


const gameIconBox = document.getElementById("game");
const gameModal = document.getElementById("game-app");

const openGameApp = () => {
  gameModal.showModal();
};

gameIconBox.addEventListener("dblclick", openGameApp);


