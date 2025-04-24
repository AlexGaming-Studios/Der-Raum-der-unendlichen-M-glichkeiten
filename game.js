// game.js
let timer;
let countdown;
let timeLeft = 300; // 5 Minuten
let gameRunning = false;

function startGame() {
  if (gameRunning) return; // Verhindert doppelte Starts
  gameRunning = true;
  document.getElementById("start-button").disabled = true;
  startTimer();
  document.getElementById("room").innerHTML = `
    <h1>Rätsel lösen...</h1>
    <p>Versuche, das Rätsel zu lösen, bevor die Zeit abläuft. Andernfalls...</p>
  `;
}

function startTimer() {
  countdown = setInterval(function() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.getElementById("timer").textContent = `${padZero(minutes)}:${padZero(seconds)}`;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(countdown);
      triggerGameOver();
    }
  }, 1000);
}

function padZero(num) {
  return num < 10 ? '0' + num : num;
}

function triggerGameOver() {
  document.getElementById("room").style.display = "none";
  document.getElementById("message-container").style.display = "block";
  document.getElementById("message").textContent = "Die Zeit ist abgelaufen! Etwas Schreckliches passiert!";
  document.getElementById("game-over").style.display = "block";
  
  // Schreckliches Szenario im Raum
  let room = document.getElementById("room-container");
  room.style.backgroundColor = "#222";
  room.innerHTML = `<h1 style="color: red;">Schreckliche Entität ist erschienen!</h1><p>Du hast das Rätsel nicht rechtzeitig gelöst...</p>`;
  room.classList.add("shaking");
  setTimeout(() => {
    room.classList.remove("shaking");
  }, 1000);
}

function resetGame() {
  timeLeft = 300;
  gameRunning = false;
  document.getElementById("start-button").disabled = false;
  document.getElementById("room").style.display = "block";
  document.getElementById("message-container").style.display = "none";
  document.getElementById("room-container").style.backgroundColor = "#333";
  document.getElementById("room-container").classList.remove("shaking");
  startGame();
}