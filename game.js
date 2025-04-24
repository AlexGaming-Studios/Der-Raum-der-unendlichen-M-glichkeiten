const riddles = [
    {
        title: "Rätsel 1: Der Geheimcode",
        description: "Du betrittst einen Raum mit einem Koffer. Auf einem Zettel steht: 3, 5, 9, 7, 11. Im Notizbuch: „Die Fibonacci-Reihe.“",
        solution: "13",
        tip: "Schau dir die Zahlen genau an – erkennst du eine bekannte Zahlenreihe?"
    },
    {
        title: "Rätsel 2: Die Zahlenschrift",
        description: "Du findest eine Wand mit Strichen: „| || ||| |||| |||||“. Darunter steht: „Verändere die Reihenfolge, um den Code zu knacken.“",
        solution: "12345",
        tip: "Jeder Strich steht für eine Zahl – erkennst du das Muster?"
    },
    {
        title: "Rätsel 3: Das Uhrenrätsel",
        description: "Du findest eine alte Standuhr. Auf dem Zifferblatt sind nur die Zahlen 1, 3, 5, 7, 9 und 11 sichtbar. Ein Zettel sagt: „Der Schlüssel ist an der Stelle, an der sich der Mond befindet.“",
        solution: "5",
        tip: "Welche Uhrzeit passt zum Mond? Denk an Mitternacht."
    },
    {
        title: "Rätsel 4: Der Spiegel",
        description: "Im Raum hängt ein Spiegel. Dahinter siehst du die Zahl 3745 – doch im Spiegel erscheint 5473.",
        solution: "5473",
        tip: "Dreh die Zahl so, wie du sie im Spiegel siehst."
    },
    {
        title: "Rätsel 5: Die Lichter",
        description: "Ein Lichtschalter hat 5 Positionen. Daneben: „Licht für die richtige Reihenfolge.“ Und der Zettel zeigt: 3, 1, 4, 2, 5.",
        solution: "31425",
        tip: "Folge der Reihenfolge auf dem Zettel beim Umschalten."
    },
    {
        title: "Rätsel 6: Der Schlüssel zum Ausgang",
        description: "Eine Kiste mit einem Zahlenschloss trägt die Aufschrift: „Der letzte Schlüssel ist die Summe der Zahlen: 13, 17, 5, 1, 2.“",
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

    // Spezialfall: Rätsel 3 (Index 2) — Eingabe "12" ergibt Lösung "5"
    if (current === 2 && input === "12") {
        document.getElementById("message").textContent = "Mitternacht erkannt! Die gesuchte Zahl ist: 5";
        document.getElementById("answer").value = "5";
        return;
    }

    if (input === correct) {
        document.getElementById("message").textContent = "Richtig!";
        current++;
        setTimeout(showRiddle, 1000);
    } else {
        document.getElementById("message").textContent = "Falsch. Versuch's nochmal oder warte auf den Tipp.";
    }
}

window.onload = showRiddle;