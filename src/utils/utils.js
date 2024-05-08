export function formatTime(value) {
    return value < 10 ? '0' + value : value;
}

export function formatDisplay(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(
        remainingSeconds,
    )}`;
}

export function startStop() {
    if (!data.isRunning) {
        data.timer = setInterval(() => {
            data.seconds++;
            renderDisplay(data.seconds);
        }, 1000);
        dom.startStopBtn.textContent = 'Stop';
        data.isRunning = true;
    } else {
        clearInterval(data.timer);
        dom.startStopBtn.textContent = 'Start';
        data.isRunning = false;
    }
}

export function reset() {
    clearInterval(data.timer);
    data.seconds = 0;
    renderDisplay(data.seconds);
    dom.startStopBtn.textContent = 'Start';
    data.isRunning = false;
}
