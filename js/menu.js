document.querySelector("#menu").style.display = "none";

//toggles menu with icon click
document.querySelector("#menuButton").addEventListener("click", () => {
  if (document.querySelector("#menu").style.display === "none") {
    document.querySelector("#menu").style.display = "inline";
  } else if (document.querySelector("#menu").style.display === "inline") {
    document.querySelector("#menu").style.display = "none";
  }
  
})

//closes menu
document.addEventListener("click", e => {
  if (!document.querySelector("#menu").contains(e.target) && e.target !== document.querySelector("#menuButton") && e.target !== document.querySelector("#menuImage")) {
    document.querySelector("#menu").style.display = "none";
  }
})
