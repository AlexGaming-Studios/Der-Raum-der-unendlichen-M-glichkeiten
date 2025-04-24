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
        description: "Die Standuhr zeigt nur die ungeraden Zahlen. Ein Zettel sagt: „Der Schlüssel ist an der Stelle, an der sich der Mond befindet.“",
        solution: "12",
        tip: "Welche Uhrzeit wird mit dem Mond assoziiert?"
    },
    {
        title: "Rätsel 4: Die Zahlenschrift",
        description: "An der Wand steht: | || ||| |||| |||||. Darunter: „Verändere die Reihenfolge, um den Code zu knacken.“",
        solution: "12345",
        tip: "Zähle die Striche. Was bedeuten sie?"
    },
    {
        title: "Rätsel 5: Der Spiegel",
        description: "Im Spiegel siehst du 5473. Auf der Wand dahinter steht 3745 – spiegelverkehrt.",
        solution: "5473",
        tip: "Dreh die Zahl aus dem Spiegel um!"
    },
    {
        title: "Rätsel 6: Die Lichter",
        description: "Ein Schalter mit fünf Positionen. Auf dem Zettel: 3, 1, 4, 2, 5.",
        solution: "31425",
        tip: "Die Reihenfolge der Schalter ist der Schlüssel."
    },
    {
        title: "Rätsel 7: Der Schlüssel zum Ausgang",
        description: "Auf einer Kiste steht: „Der letzte Schlüssel ist die Summe der Zahlen.“ Daneben: 13, 17, 5, 1, 2.",
        solution: "38",
        tip: "Addiere alle Zahlen."
    }
];

let current = 0;
let tipTimeout;

function showRiddle() {
    if (current >= riddles.length) {
        document.getElementById("riddle-container").innerHTML = "<h2>Herzlichen Glückwunsch!</h2><p>Du hast alle Rätsel gelöst!</p>";
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
    }, 10000); // 10 Sekunden (für Demo-Zwecke)
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