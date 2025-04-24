const riddles = [
    {
        title: "Rätsel 1: Der Geheimcode",
        description: "Du betrittst einen Raum mit einem Koffer. Auf einem Zettel steht: 3, 5, 9, 7, 11. Im Notizbuch: „Die Fibonacci-Reihe.“",
        solution: "13",
        tip: "Schau dir die Zahlen genau an – erkennst du eine bekannte Zahlenreihe?"
    },
    {
        title: "Rätsel 2: Das Uhrenrätsel",
        description: "Eine alte Standuhr zeigt nur die Zahlen 1, 3, 5, 7, 9 und 11. Ein Zettel sagt: „Der Schlüssel ist an der Stelle, an der sich der Mond befindet.“",
        solution: "5",
        tip: "Welche Uhrzeit wird häufig mit dem Mond assoziiert?"
    },
    {
        title: "Rätsel 3: Die Zahlenschrift",
        description: "An der Wand stehen Striche: „| || ||| |||| |||||“. Darunter steht: „Verändere die Reihenfolge, um den Code zu knacken.“",
        solution: "12345",
        tip: "Zähle die Striche – jeder Block ist eine Zahl."
    },
    {
        title: "Rätsel 4: Der Spiegel",
        description: "Hinter einem Spiegel siehst du eine Zahl: 3745 – aber sie erscheint im Spiegel als 5473.",
        solution: "5473",
        tip: "Dreh die Zahl so, wie du sie im Spiegel sehen würdest."
    },
    {
        title: "Rätsel 5: Die Lichter",
        description: "Ein Schalter hat 5 Positionen. Ein Zettel liegt daneben: „Licht für die richtige Reihenfolge.“ Die Zahlen 3, 1, 4, 2, 5 stehen darauf.",
        solution: "31425",
        tip: "Die Zahlen geben die Umschaltreihenfolge der Positionen an."
    },
    {
        title: "Rätsel 6: Der Schlüssel zum Ausgang",
        description: "Eine Kiste zeigt die Zahlen 13, 17, 5, 1, 2. Aufschrift: „Der letzte Schlüssel ist die Summe der Zahlen.“",
        solution: "38",
        tip: "Addiere alle Zahlen zusammen."
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