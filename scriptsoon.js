// Set the launch date to 1 month from now
let now = new Date();
let launchDate = new Date();
launchDate.setMonth(now.getMonth() + 1);
launchDate.setHours(0, 0, 0, 0);

function updateCountdown() {
    let currentTime = new Date().getTime();
    let timeRemaining = launchDate - currentTime;

    let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (timeRemaining < 0) {
        clearInterval(interval);
        document.querySelector(".countdown").innerHTML = "<h2>We're Live!</h2>";
    }
}

let interval = setInterval(updateCountdown, 1000);
