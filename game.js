// game.js

let timer = 60; // Startzeit in Sekunden
let countdown;
let currentChapter = 1;
let gameOver = false;
let correctAnswer = 8; // Korrekte Antwort für das erste Rätsel (3 + 6 x 2 - 4)

const chapters = [
  {
    title: "Kapitel 1: Der Anfang",
    description: "Du befindest dich in einem geheimen Raum. Vor dir liegt ein mysteriöses Rätsel. Deine Reise beginnt hier.",
    riddle: "Was ist 3 + 6 x 2 - 4?",
    answer: 8,
    nextChapter: 2
  },
  {
    title: "Kapitel 2: Das Dunkel",
    description: "Das nächste Rätsel wartet auf dich. Du hörst das Rauschen des Windes im Hintergrund.",
    riddle: "Was ist 12 ÷ 4 + 5?",
    answer: 8,
    nextChapter: 3
  },
  {
    title: "Kapitel 3: Das Geheimnis",
    description: "Du stehst vor einer verschlossenen Tür. Nur das Rätsel kann dich hindurch lassen.",
    riddle: "Was ist 15 - (3 x 2)?",
    answer: 9,
    nextChapter: 4
  },
  {
    title: "Kapitel 4: Das Ende",
    description: "Du hast das letzte Rätsel erreicht. Es ist dein letzter Test, bevor du entkommen kannst.",
    riddle: "Was ergibt 7 x 2 + 6?",
    answer: 20,
    nextChapter: null // Endkapitel
  }
];

// Timer starten
function startTimer() {
  countdown = setInterval(updateTimer, 1000);
}

// Timer aktualisieren
function updateTimer() {
  if (timer <= 0) {
    clearInterval(countdown);
    gameOver = true;
    document.getElementById('game-over').classList.remove('hidden');
    document.getElementById('chapter-container').classList.add('shaking'); // Schüttel-Animation aktivieren
    document.getElementById('message-container').innerText = "Die Zeit ist abgelaufen!";
    return;
  }

  timer--;
  document.getElementById('timer').innerText = timer;
}

// Rätsel und Kapitel aktualisieren
function loadChapter() {
  let chapter = chapters[currentChapter - 1];
  document.getElementById('chapter-title').innerText = chapter.title;
  document.getElementById('chapter-description').innerText = chapter.description;
  document.getElementById('riddle').innerText = chapter.riddle;
}

// Nächste Kapitel starten
function nextChapter() {
  if (gameOver) return; // Wenn das Spiel vorbei ist, nichts tun

  let chapter = chapters[currentChapter - 1];
  let userAnswer = parseInt(document.getElementById('answer-input').value);

  if (userAnswer === chapter.answer) {
    document.getElementById('message-container').innerText = "Rätsel gelöst! Du kannst weitermachen!";
    document.getElementById('message-container').style.display = "block";

    // Wenn es ein nächstes Kapitel gibt
    if (chapter.nextChapter) {
      currentChapter = chapter.nextChapter;
      loadChapter();
    } else {
      // Spiel gewonnen, Endkapitel erreicht
      document.getElementById('message-container').innerText = "Du hast das Abenteuer erfolgreich abgeschlossen!";
      document.getElementById('next-chapter-container').classList.add('hidden');
    }
  } else {
    document.getElementById('message-container').innerText = "Falsche Antwort! Versuche es nochmal.";
    document.getElementById('message-container').style.display = "block";
  }
}

document.getElementById('submit-answer').addEventListener('click', nextChapter);

document.getElementById('next-chapter-btn').addEventListener('click', function() {
  document.getElementById('next-chapter-container').classList.add('hidden');
  document.getElementById('game-over').classList.add('hidden');
  loadChapter();
  startTimer();
});

// Initiales Laden des Spiels
loadChapter();
startTimer();