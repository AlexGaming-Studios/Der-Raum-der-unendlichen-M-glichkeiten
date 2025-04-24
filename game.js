let currentRiddle = 1;

const answers = {
    1: '13', // Beispiel für das erste Rätsel
    2: '17',
    3: '12',
    4: '12345',
    5: '5473',
    6: '31425',
    7: '38'
};

const tips = {
    1: 'Schau dir die Zahlen genau an und überlege, ob es eine bekannte Zahlenreihe gibt, die zu ihnen passt.',
    2: 'Versuche, die Buchstaben durch Verschiebung im Alphabet zu entschlüsseln. Denke an den Caesar-Code.',
    3: 'Überlege, welche Uhrzeit mit dem Mond assoziiert wird und überprüfe, ob sich etwas bei dieser Uhrzeit tut.',
    4: 'Betrachte die Striche genau und überlege, was sie möglicherweise darstellen könnten.',
    5: 'Denk daran, dass du die Zahlen im Spiegel betrachten musst. Drehe sie um, um die Lösung zu finden.',
    6: 'Überlege, ob die Zahlen auf dem Zettel mit der Reihenfolge der Schalter zu tun haben könnten.',
    7: 'Berechne die Summe der Zahlen, um den Code zu finden.'
};

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value;

    if (userAnswer === answers[currentRiddle]) {
        document.getElementById('message').textContent = 'Richtig! Du hast das Rätsel gelöst.';
        currentRiddle++;
        if (currentRiddle <= 7) {
            document.getElementById('riddle').textContent = `Rätsel ${currentRiddle}: Nächstes Rätsel`;
            document.getElementById('tip').textContent = '';
        } else {
            document.getElementById('riddle').textContent = 'Herzlichen Glückwunsch! Du hast alle Rätsel gelöst!';
            document.getElementById('tip').textContent = '';
        }
    } else {
        document.getElementById('message').textContent = 'Leider falsch. Tipp wird angezeigt.';
        document.getElementById('tip').textContent = tips[currentRiddle];
    }
}