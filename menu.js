document.querySelector("#menu").style.display = "none";

//shows menu
document.querySelector("#menuButton").addEventListener("click", () => {
  document.querySelector("#menu").style.display = "inline";
})

// defining menu

const menu = document.querySelector("#menu");

// closes menu
document.querySelector("#menuContainer").addEventListener("click", () => {
  menu.style.display = "none";
})


//if (menu.style.display === "inline") {};