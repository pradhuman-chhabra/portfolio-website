const date = new Date();

const n = date.toDateString();

const time = date.toLocaleTimeString();

document.getElementById("currentDate").innerText = "Today's Date: " + n;

document.getElementById("currentTime").innerText = "Time: " + time;
