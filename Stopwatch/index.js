let timerInterval;
let elapsedTime = 0;
let paused = true;

const display = document.getElementById("display");
const toggleButton = document.getElementById("toggle");
const resetButton = document.getElementById("reset");
const timestampButton = document.getElementById("timestamp");
const timestampsList = document.getElementById("timestamps");

function formatTime(milliseconds) {
  const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
  const seconds = Math.floor((milliseconds / 1000) % 60);
  const ms = Math.floor((milliseconds % 1000) / 10);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(ms).padStart(2, "0")}`;
}

function updateDisplay() {
  display.textContent = formatTime(elapsedTime);
}

function startTimer() {
  if (paused) {
    paused = false;
    const startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 10);
  }
}

function pauseTimer() {
  if (!paused) {
    clearInterval(timerInterval);
    paused = true;
  }
}

function toggleTimer() {
  if (paused) {
    startTimer();
    toggleButton.textContent = "Pause";
  } else {
    pauseTimer();
    toggleButton.textContent = "Resume";
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  paused = true;
  updateDisplay();
  timestampsList.innerHTML = "";
  toggleButton.textContent = "Start";
}

function addTimestamp() {
  const li = document.createElement("li");
  li.textContent = formatTime(elapsedTime);
  timestampsList.appendChild(li);
}

toggleButton.addEventListener("click", toggleTimer);
resetButton.addEventListener("click", resetTimer);
timestampButton.addEventListener("click", addTimestamp);
