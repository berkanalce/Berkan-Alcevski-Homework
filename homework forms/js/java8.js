let timerId;
let elapsedTime = 0;
function formattedTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
  return `{formattedMinutes}:{formattedSeconds}`;
}

document.getElementById("kopcestart").addEventListener("click", () => {
  if (!timerId) {
    startTimer();
  }
});
document.getElementById("kopceoauza").addEventListener("click", () => {
  if (timerId) {
    pauseTimer();
  }
});
document.getElementById("kopcestop").addEventListener("click", () => {
  stopTimer();
});

function startTimer() {
  timerId = setInterval(updateTimer, 1000);
}
function pauseTimer() {
  clearInterval(timerId);
  timerId = null;
}

function stopTimer() {
  clearInterval(timerId);
  timerId = null;
  elapsedTime = 0;
  console.log("Time stoped");
}

function updateTimer() {
  elapsedTime++;

  console.log(elapsedTime);
}

let timeoutId;

function delayedStart(zakasnuvanje, brojac) {
  let count = 0;
  timeoutId = setTimeout(function click() {
    console.log(count);
    count++;
    if (count <= brojac) {
      timeoutId = setTimeout(click, 1000);
    }
  }, zakasnuvanje * 1000);
}

function delayedStop() {
  clearTimeout(timeoutId);
}
const url = new URL("https://www.youtube.com/watch?v=_7rT-ixivWU");

console.log("Protocol: " + url.protocol); //"https:"
console.log("Host " + url.host); //"www.youtube.com"
console.log("Pathname " + url.pathname); //"/watch"
console.log("Search " + url.search); //"?v=_7rT-ixivWU"
