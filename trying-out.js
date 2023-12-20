// trying to create dialog element with createElement and appendChild;

const tryButton = document.querySelector("#trying-out");

function makeModal() {
  let testModal = document.createElement('dialog');
  // testModal.setAttribute("open", "");
  testModal.id = "test-child"
  testModal.innerHTML = '<button class="close-btn" id="testing-btn">X</button><p>you can see me</p><button id="newb">M</button>';
  document.querySelector("#trying-out").appendChild(testModal);
  testModal.showModal();
  tryButton.removeEventListener("dblclick", makeModal)
}

tryButton.addEventListener("dblclick", makeModal);

///////////closing dialog // seems to be no interaction with rendered elements
const exitButton = document.querySelector("#newb");

exitButton.addEventListener("click", () => {
  alert ("click")
})