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
  document.getElementById("// game.js

let timer = 60; // Startzeit in Sekunden
let countdown = setInterval(updateTimer, 1000); // Timer alle 1 Sekunde aktualisieren
let gameOver = false;
let correctAnswer = 8; // Die korrekte Antwort auf das Rätsel

// Timer aktualisieren
function updateTimer() {
  if (timer <= 0) {
    clearInterval(countdown);
    gameOver = true;
    document.getElementById('game-over').classList.remove('hidden');
    document.getElementById('room').classList.add('shaking'); // Schüttel-Animation aktivieren
    document.getElementById('message-container').innerText = "Die Zeit ist abgelaufen!";
    return;
  }

  timer--;
  document.getElementById('timer').innerText = timer;
}

// Antwort einreichen
document.getElementById('submit-answer').addEventListener('click', function() {
  if (gameOver) return; // Wenn das Spiel vorbei ist, nichts tun

  let userAnswer = parseInt(document.getElementById('answer-input').value);
  
  if (userAnswer === correctAnswer) {
    document.getElementById('message-container').innerText = "Rätsel gelöst! Du hast gewonnen!";
  } else {
    document.getElementById('message-container').innerText = "Falsche Antwort. Versuche es nochmal!";
  }

  document.getElementById('message-container').style.display = "block";
});).innerHTML = `
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