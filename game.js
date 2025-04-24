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
    },
    {
        title: "Rätsel 3: Das Uhrenrätsel",
        description: "Vor dir steht eine alte Standuhr. Auf dem Zifferblatt sind nur die Zahlen 1, 3, 5, 7, 9 und 11 sichtbar. Auf einem Zettel steht: 'Der Schlüssel ist an der Stelle, an der sich der Mond befindet.'",
        solution: "5",
        tip: "Überlege, welche Uhrzeit mit dem Mond assoziiert wird."
    },
    {
        title: "Rätsel 4: Die Zahlenschrift",
        description: "Auf einer Wand stehen Zahlen in einer seltsamen Reihenfolge: '| || ||| |||| |||||'. Darunter steht: 'Verändere die Reihenfolge, um den Code zu knacken.'",
        solution: "12345",
        tip: "Schau dir die Striche genau an – sie repräsentieren Zahlen."
    },
    {
        title: "Rätsel 5: Der Spiegel",
        description: "Im Raum hängt ein Spiegel. Auf der Wand hinter dem Spiegel sind Zahlen geschrieben: 3745. Im Spiegel erscheinen sie als 5473.",
        solution: "5473",
        tip: "Denk daran, die Zahlen im Spiegel umzukehren."
    },
    {
        title: "Rätsel 6: Die Lichter",
        description: "Ein Lichtschalter an der Wand hat fünf Positionen. Daneben liegt ein Zettel mit den Zahlen 3, 1, 4, 2, 5.",
        solution: "3, 1, 4, 2, 5",
        tip: "Die Zahlen auf dem Zettel geben dir die Reihenfolge der Schalter."
    },
    {
        title: "Rätsel 7: Der Schlüssel zum Ausgang",
        description: "Du findest eine Kiste mit einem Zahlenschloss. Darunter stehen die Zahlen 13, 17, 5, 1, 2.",
        solution: "38",
        tip: "Berechne die Summe der Zahlen."
    },
    // Neues Rätsel 8:
    {
        title: "Rätsel 8: Die geheime Farbe",
        description: "In einem Raum sind verschiedene Farbfelder an der Wand. Darunter steht: 'Die Farbe der Freiheit.'",
        solution: "Blau",
        tip: "Denke an das Symbol der Freiheit."
    },
    // Neues Rätsel 9:
    {
        title: "Rätsel 9: Der Code des Schlüssels",
        description: "In einem Schrank findest du einen Schlüssel, der mit Zahlen markiert ist: 2, 5, 8, 11, 14.",
        solution: "16",
        tip: "Finde den nächsten Wert in der Zahlenreihe."
    },
    // Neues Rätsel 10:
    {
        title: "Rätsel 10: Das verschlüsselte Bild",
        description: "Auf einem Tisch liegt ein Bild mit einem Rätsel: 'Bilde das Bild zusammen.' Es scheint in Puzzle-Form zu sein, doch einige Teile fehlen.",
        solution: "4 Teile",
        tip: "Sieh dir das Bild genau an – es gibt ein Muster, das zu den fehlenden Teilen führt."
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