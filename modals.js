const dialog = document.querySelector("dialog");
const closeButton = document.querySelector(".close-btn");
const closeApp = () => {
  dialog.close();
};
closeButton.addEventListener("click", closeApp);

///closing created modal
const closeCreatedModal = () => {
  document.getElementById("trying-out").removeChild(document.getElementById("test-child"));
}

document.querySelector("#testing-btn").addEventListener("click", closeCreatedModal);
/// cannot open game app with this, but opening top test app works; only cannot close


const gameIconBox = document.getElementById("game");
const gameModal = document.getElementById("game-app");

const openGameApp = () => {
  gameModal.showModal();
};

gameIconBox.addEventListener("dblclick", openGameApp);


