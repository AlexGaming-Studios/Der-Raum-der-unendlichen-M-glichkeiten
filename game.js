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
        tip: "Versuche einen Caesar-Code – verschiebe die Buchstaben im Alphabet.",
        encryptedMessage: "Khoor Zruog" // Beispiel: "Hello World" verschlüsselt
    }
];

let current = 0;
let tipTimeout;
let caesarKey = 0;
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

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

    // Wenn es sich um das zweite Rätsel handelt, zeige die Caesar-Tabelle
    if (current === 1) {
        document.getElementById("caesar-table").style.display = "block";
        generateCaesarTable();  // Tabelle erzeugen
    } else {
        document.getElementById("caesar-table").style.display = "none";
    }

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

// Caesar-Scheibe als Tabelle erzeugen
function generateCaesarTable() {
    const tableBody = document.querySelector("#caesar-table tbody");
    tableBody.innerHTML = "";  // Tabelle zurücksetzen

    for (let i = 0; i < alphabet.length; i++) {
        const row = document.createElement("tr");

        const shiftCell = document.createElement("td");
        shiftCell.textContent = i;
        row.appendChild(shiftCell);

        const letterCell = document.createElement("td");
        const letter = alphabet[(i + caesarKey) % 26];
        letterCell.textContent = letter;
        row.appendChild(letterCell);

        tableBody.appendChild(row);
    }
}

function rotateWheel(direction) {
    // Rotieren je nach Richtung
    if (direction === 'left') {
        caesarKey = (caesarKey - 1 + 26) % 26;  // Links drehen
    } else if (direction === 'right') {
        caesarKey = (caesarKey + 1) % 26;  // Rechts drehen
    }
    
    document.getElementById("caesar-key").textContent = caesarKey;
    generateCaesarTable();  // Tabelle nach der Änderung neu erzeugen
}

document.getElementById("rotate-left").addEventListener("click", () => rotateWheel('left'));
document.getElementById("rotate-right").addEventListener("click", () => rotateWheel('right'));

// Die Funktion zum Entschlüsseln der Nachricht
function decryptCaesar(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (alphabet.includes(char.toUpperCase())) {
            const newChar = alphabet[(alphabet.indexOf(char.toUpperCase()) + shift) % 26];
            result += char === char.toUpperCase() ? newChar : newChar.toLowerCase();
        } else {
            result += char;
        }
    }
    return result;
}

// Beispiel: Text entschlüsseln, der mit dem aktuellen Caesar-Schlüssel verschlüsselt wurde
function checkCaesarCipher() {
    const encryptedMessage = riddles[1].encryptedMessage;  // Text aus Rätsel 2
    const decryptedMessage = decryptCaesar(encryptedMessage, caesarKey);
    document.getElementById("message").textContent = "Entschlüsselte Nachricht: " + decryptedMessage;

    // Wenn der Text entschlüsselt wurde, und die Zahl 17 gefunden wird:
    if (decryptedMessage.includes("Hello World")) {
        current++;
        setTimeout(showRiddle, 1000);
    }
}

window.onload = showRiddle;