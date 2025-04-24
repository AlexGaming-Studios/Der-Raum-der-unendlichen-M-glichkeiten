<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Das Rätselbuch: Abenteuer</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="game-container">
    <div id="timer-container">
      <p>Verbleibende Zeit: <span id="timer">60</span> Sekunden</p>
    </div>
    <div id="chapter-container">
      <p id="chapter-title">Kapitel 1: Der Anfang</p>
      <p id="chapter-description">
        Du befindest dich in einem geheimen Raum. Vor dir liegt ein mysteriöses Rätsel. Deine Reise beginnt hier.
      </p>
      <p id="riddle">Was ist 3 + 6 x 2 - 4?</p>
      <input type="text" id="answer-input" placeholder="Antwort eingeben" />
      <button id="submit-answer">Antwort einreichen</button>
      <p id="message-container"></p>
    </div>
    <div id="game-over" class="hidden">
      <p>Game Over!</p>
      <p>Die Zeit ist abgelaufen oder du hast das Rätsel nicht richtig gelöst. Das Abenteuer endet hier.</p>
    </div>
    <div id="next-chapter-container" class="hidden">
      <button id="next-chapter-btn">Zum nächsten Kapitel</button>
    </div>
  </div>
  <script src="game.js"></script>
</body>
</html>