let timer; // variable to hold the timer
let seconds = 0; // variable to hold the elapsed seconds

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function formatTime(value) {
  return value < 10 ? '0' + value : value;
}

function formatDisplay(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(remainingSeconds)}`;
}

function startTimer() {
  timer = setInterval(() => {
    seconds++;
    display.textContent = formatDisplay(seconds);
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  seconds = 0;
  display.textContent = formatDisplay(seconds);
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

