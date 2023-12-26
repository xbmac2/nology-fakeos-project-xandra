// let gamesApp = document.getElementById("game");


// function openGame(){
//   document.getElementById("game").appendChild(dialogue);
// }

// gamesApp.addEventListener("dblclick", openGame)

function timeDateClock() {
  const timeNow = new Date();
  const clockDisplay = timeNow.toLocaleString().replace(",", ""); //slice?? to remove ms
  document.querySelector('#clock').textContent = clockDisplay;
}

timeDateClock();
setInterval(timeDateClock, 1000);