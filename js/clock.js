function timeDateClock() {
  const timeNow = new Date();
  const clockDisplay = timeNow.toLocaleString().replace(",", "");
  document.querySelector('#clock').textContent = clockDisplay;
}

timeDateClock();
setInterval(timeDateClock, 1000);