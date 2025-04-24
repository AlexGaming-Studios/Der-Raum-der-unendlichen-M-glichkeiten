const riddles = [
    {
        title: "Rätsel 1: Der Geheimcode",
        description: "Du betrittst einen Raum mit einem Koffer. Auf einem Zettel steht: 3, 5, 9, 7, 11. Im Notizbuch: „Die Fibonacci-Reihe.“",
        solution: "13",
        tip: "Schau dir die Zahlen genau an – erkennst du eine bekannte Zahlenreihe?"
    },
    {
        title: "Rätsel 2: Die Zahlenschrift",
        description: "An der Wand siehst du Striche: | || ||| |||| ||||| – darunter steht: „Verändere die Reihenfolge, um den Code zu knacken.“",
        solution: "12345",
        tip: "Zähle die Striche – sie stellen Zahlen dar!"
    },
    {
        title: "Rätsel 3: Das Uhrenrätsel",
        description: "Eine Standuhr zeigt nur die Zahlen 1, 3, 5, 7, 9, 11. Auf einem Zettel steht: „Der Schlüssel ist an der Stelle, an der sich der Mond befindet.“",
        solution: "5",
        tip: "Überlege, welche Uhrzeit oft mit dem Mond assoziiert wird. Subtrahiere diese Zahl mit 6"
    },
    {
        title: "Rätsel 4: Der Spiegel",
        description: "Hinter einem Spiegel erkennst du die Zahl 3745 – aber spiegelverkehrt. Welche Zahl ist es wirklich?",
        solution: "5473",
        tip: "Spiegle die Zahlen – was siehst du dann?"
    },
    {
        title: "Rätsel 5: Die Lichter",
        description: "Ein Lichtschalter mit fünf Positionen. Daneben ein Zettel: „Licht für die richtige Reihenfolge.“ Die Zahlen: 3, 1, 4, 2, 5.",
        solution: "31425",
        tip: "Drücke die Schalter in der Reihenfolge der Zahlen."
    },
    {
        title: "Rätsel 6: Der Schlüssel zum Ausgang",
        description: "Eine Kiste mit einem Zahlenschloss: „Der letzte Schlüssel ist die Summe der Zahlen.“ Darunter: 13, 17, 5, 1, 2.",
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
    document.getElementById("message").classList.remove("secret");
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

    // Spezialfall: Rätsel 3 (Index 2) – Eingabe "12" ergibt geheimen Tipp
    if (current === 2 && input === "12") {
        document.getElementById("message").textContent =
            "Geheimer Tipp: 12 Uhr ist Mitternacht – was passiert dann?";
        document.getElementById("message").classList.add("secret");
        return;
    }

    if (input === correct) {
        document.getElementById("message").textContent = "Richtig!";
        document.getElementById("message").classList.remove("secret");
        current++;
        setTimeout(showRiddle, 1000);
    } else {
        document.getElementById("message").textContent =
            "Falsch. Versuch's nochmal oder warte auf den Tipp.";
        document.getElementById("message").classList.remove("secret");
    }
}

window.onload = showRiddle;