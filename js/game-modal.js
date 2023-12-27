const gameIconBox = document.getElementById("game");
const gameModal = document.getElementById("gameApp");

const openGameApp = () => {
  gameModal.showModal();
};

gameIconBox.addEventListener("dblclick", openGameApp);

const closeButton = document.querySelector("#close-game");
const closeApp = () => {
  gameModal.close();
};
closeButton.addEventListener("click", closeApp);

//open from menu
document.querySelector("#gameMenuItem").addEventListener("click", () => {
  document.querySelector("#menu").style.display = "none";
  gameModal.showModal();
})