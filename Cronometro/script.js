let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    return `${formattedHH}:${formattedMM}:${formattedSS}.<span class="milliseconds">${formattedMS}</span>`;
}

function print(txt) {
    document.getElementById("display").innerHTML = txt;
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
    document.getElementById("startStopBtn").innerHTML = '<i class="fas fa-pause"></i>';
    isRunning = true;
}

function stop() {
    clearInterval(timerInterval);
    document.getElementById("startStopBtn").innerHTML = '<i class="fas fa-play"></i>';
    isRunning = false;
}

function reset() {
    clearInterval(timerInterval);
    print('00:00:00.<span class="milliseconds">00</span>');
    elapsedTime = 0;
    document.getElementById("startStopBtn").innerHTML = '<i class="fas fa-play"></i>';
    isRunning = false;
}

function lap() {
    let lapTime = document.createElement("li");
    lapTime.innerHTML = timeToString(elapsedTime);
    document.getElementById("laps").appendChild(lapTime);
}

document.getElementById("startStopBtn").addEventListener("click", function() {
    if (isRunning) {
        stop();
    } else {
        start();
    }
});

document.getElementById("lapBtn").addEventListener("click", lap);
document.getElementById("resetBtn").addEventListener("click", reset);






