// trying to create dialog element with createElement and appendChild;

const tryButton = document.querySelector("#trying-out");

function makeModal() {
  let testModal = document.createElement('dialog');
  // testModal.setAttribute("open", "");
  testModal.id = "test-child"
  testModal.innerHTML = '<button class="close-btn" id="testing-btn">X</button><p>you can see me</p>';
  document.querySelector("#trying-out").appendChild(testModal);
  testModal.showModal();
}

tryButton.addEventListener("dblclick", () => {
  makeModal();
  //testModal.showModal();
});