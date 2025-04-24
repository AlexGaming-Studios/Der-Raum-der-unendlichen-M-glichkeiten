const riddles = [
    {
        title: "Rätsel 1: Der Geheimcode",
        description: "Du betrittst einen Raum mit einem Koffer. Auf einem Zettel steht: 3, 5, 9, 7, 11. Im Notizbuch: „Die Fibonacci-Reihe.“",
        solution: "13",
        tip: "Schau dir die Zahlen genau an – erkennst du eine bekannte Zahlenreihe?"
    },
    {
        title: "Rätsel 2: Die verschlüsselte Nachricht",
        description: "Im Koffer findest du eine Karte mit seltsamen Symbolen. Auf der Rückseite: „Löse den Code und finde die Zahl für den nächsten Schritt.“",
        solution: "17",
        tip: "Versuche einen Caesar-Code – verschiebe die Buchstaben im Alphabet."
    }
];

let current = 0;
let tipTimeout;

function showRiddle() {
    if (current >= riddles.length) {
        document.getElementById("riddle-container").innerHTML =
            "<h2>Herzlichen Glückwunsch!</h2><p>Du hast alle Rätsel gelöst!</p>";
        return;
    }

    const riddle = riddles[current];
    document.getElementById("riddle-title").textContent = riddle.title;
    document.getElementById("riddle-description").textContent = riddle.description;
    document.getElementById("answer").value = "";
    document.getElementById("message").textContent = "";
    document.getElementById("tip").classList.add("hidden");

    clearTimeout(tipTimeout);
    tipTimeout = setTimeout(() => {
        document.getElementById("tip").textContent = "Tipp: " + riddle.tip;
        document.getElementById("tip").classList.remove("hidden");
    }, 10000); // 10 Sekunden
}

function checkAnswer() {
    const input = document.getElementById("answer").value.trim();
    const correct = riddles[current].solution;

    if (input === correct) {
        document.getElementById("message").textContent = "Richtig!";
        current++;
        setTimeout(showRiddle, 1000);
    } else {
        document.getElementById("message").textContent = "Falsch. Versuch's nochmal oder warte auf den Tipp.";
    }
}

window.onload = showRiddle;