document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('start-button');
    const gameScreen = document.getElementById('game-screen');
    const intro = document.getElementById('intro');
    const submitButton = document.getElementById('submit-answer');
    const answerInput = document.getElementById('answer-input');
    const currentChapter = document.getElementById('current-chapter');
    const currentRiddle = document.getElementById('current-riddle');
    const timeDisplay = document.getElementById('time');
    const getTipButton = document.getElementById('get-tip');
    const tipText = document.getElementById('tip-text');

    const puzzles = [
        { chapter: "Kapitel 1: Der Eingang", riddle: "Der Schlüssel liegt in der Zahl der Buchstaben des ersten Wortes, das du siehst.", answer: "6", timeLimit: 60 },
        { chapter: "Kapitel 2: Der Flur der Spiegel", riddle: "Die Spiegel zeigen die Zahl „2“, aber sie ist gespiegelt. Welche Zahl ist richtig?", answer: "5", timeLimit: 60 },
        { chapter: "Kapitel 3: Die Uhr des Schicksals", riddle: "Ordne die Uhren in der Reihenfolge ihrer Stunde: 1:00, 4:00, 12:00, 3:00, 9:00.", answer: "1, 3, 4, 9, 12", timeLimit: 60 },
        // Weitere Rätsel hier hinzufügen
    ];

    let currentPuzzleIndex = 0;
    let timer;
    let remainingTime = puzzles[currentPuzzleIndex].timeLimit;

    // Spiel starten
    startButton.addEventListener('click', function () {
        intro.classList.add('hidden');
        gameScreen.classList.remove('hidden');
        startTimer();
        loadPuzzle();
    });

    // Antwort abgeben
    submitButton.addEventListener('click', function () {
        const userAnswer = answerInput.value.trim();
        if (userAnswer === puzzles[currentPuzzleIndex].answer) {
            alert('Rätsel gelöst!');
            currentPuzzleIndex++;
            if (currentPuzzleIndex < puzzles.length) {
                loadPuzzle();
            } else {
                alert('Herzlichen Glückwunsch, du hast das Spiel gewonnen!');
            }
        } else {
            alert('Falsche Antwort. Versuche es noch einmal.');
        }
        answerInput.value = '';
    });

    // Tipp holen
    getTipButton.addEventListener('click', function () {
        if (remainingTime <= 50) {
            tipText.textContent = "Vielleicht hilft dir ein mathematischer Ansatz im Labyrinthraum?";
        } else if (remainingTime <= 40) {
            tipText.textContent = "Überprüfe noch einmal die Zahlenschlösser.";
        } else {
            tipText.textContent = "Schau genau auf die Zahlen und ihre Bedeutungen.";
        }
    });

    // Puzzle laden
    function loadPuzzle() {
        const puzzle = puzzles[currentPuzzleIndex];
        currentChapter.textContent = puzzle.chapter;
        currentRiddle.textContent = puzzle.riddle;
        remainingTime = puzzle.timeLimit;
        timeDisplay.textContent = formatTime(remainingTime);
        resetTimer();
    }

    // Timer starten
    function startTimer() {
        timer = setInterval(function () {
            remainingTime--;
            timeDisplay.textContent = formatTime(remainingTime);
            if (remainingTime <= 0) {
                clearInterval(timer);
                alert('Zeit abgelaufen!');
            }
        }, 1000);
    }

    // Timer zurücksetzen
    function resetTimer() {
        clearInterval(timer);
        startTimer();
    }

    // Zeit formatieren
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secondsLeft = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(secondsLeft).padStart(2, '0')}`;
    }
});