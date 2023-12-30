//open from desktop
const gameIconBox = document.getElementById("game");
const gameModal = document.getElementById("gameApp");

const openGameApp = () => {
  gameModal.showModal();
};

gameIconBox.addEventListener("dblclick", openGameApp);

const closeButton = document.querySelector("#closeGame");
const closeApp = () => {
  if (document.querySelector(".confirmation").textContent === "Successfully subscribed!") {
    location.reload();
  }
  gameModal.close();
};
closeButton.addEventListener("click", closeApp);

//open from menu
document.querySelector("#gameMenuItem").addEventListener("click", () => {
  document.querySelector("#menu").style.display = "none";
  gameModal.showModal();
})

//form 
const form = document.querySelector("#form")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector(".confirmation").textContent = "Successfully subscribed!";
})