/**
 * Wir speichern unser Spielstatus-Element hier, damit wir es später leichter verwenden können.
 */
const statusDisplay = document.querySelector('.game--status');

/**
 * Hier deklarieren wir einige Variablen, um den Spielzustand während des Spiels zu verfolgen.
 */

/**
 * Wir werden "gameActive" verwenden, um das Spiel im Falle eines Endszenarios anzuhalten.
 */
let gameActive = true;

/**
 * Hier speichern wir den aktuellen Spieler, damit wir wissen, wer am Zug ist.
 */
let currentPlayer = 'X';

/**
 * Hier wird unser aktueller Spielzustand gespeichert. Die Form von leeren Strings in einem Array ermöglicht es uns,
 * gespielte Zellen leicht zu verfolgen und den Spielstatus später zu überprüfen.
 */
let gameState = ['', '', '', '', '', '', '', '', ''];

/**
 * Hier haben wir einige Meldungen angegeben, die wir dem Benutzer während des Spiels anzeigen werden. Da wir einige
 * dynamische Faktoren in diesen Nachrichten haben, nämlich den aktuellen Spieler, haben wir sie als Funktionen
 * deklariert, sodass die eigentliche Nachricht jedes Mal mit aktuellen Daten erstellt wird, wenn wir sie brauchen.
 */
const winningMessage = () => `Spieler ${currentPlayer} hat gewonnen!`;
const drawMessage = () => 'Spiel endet unentschieden!';
const currentPlayerTurn = () => `Spieler ${currentPlayer} ist am Zug`;

/**
 * Wir legen die erste Nachricht fest, damit die Spieler wissen, wer an der Reihe ist.
 */
statusDisplay.innerHTML = currentPlayerTurn();

/**
 * Aufgaben:
 * - Interner Spielstatus aktualisieren
 * - Geklickte Zelle aktualisieren (UI)
 */
function handleCellPlayed(clickedCell, clickedCellIndex) {
  // TODO
}

/**
 * Aufgaben:
 * - Aktueller Spieler ermitteln
 * - Statusanzeige aktualisieren (UI)
 */
function handlePlayerChange() {
  // TODO
}

/**
 * Hier sind alle möglichen Gewinnkombinationen gespeichert.
 */
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

/**
 * Aufgaben:
 * - Überprüfe mithilfe der Variable "winningConditions", ob die Runde gewonnen wurde.
 * - Falls die Runde gewonnen wurde, aktualisiere die Statusanzeige und deaktiviere das Spiel.
 * - Falls die Runde unentschieden ausgegangen ist, ebenfalls die Statusanzeige und Spielstatus aktualisieren
 */
function handleResultValidation() {
  let roundWon = false;

  for (let i = 0; i <= 7; i++) {
    // TODO
  }

  if (roundWon) {
    // TODO

    return;
  }

  /**
   * Wir prüfen, ob es in unserem Spielstatus-Array irgendwelche Werte gibt, die noch nicht mit einem Spielerzeichen
   * gefüllt sind.
   */
  let roundDraw = !gameState.includes('');

  if (roundDraw) {
    // TODO

    return;
  }

  /**
   * Wenn wir hier ankommen, wissen wir, dass noch niemand das Spiel gewonnen hat und dass es noch Züge zu spielen gibt,
   * also machen wir weiter, indem wir den aktuellen Spieler wechseln.
   */
  handlePlayerChange();
}

/**
 * Aufgaben:
 * - Ignoriere den Klick, wenn die Zelle bereits geklickt wurde oder das Spiel pausiert ist
 * - Andernfalls Spiel fortsetzen mit "handleCellPlayed()" und "handleResultValidation()"
 */
function handleCellClick(clickedCellEvent) {
  /**
   * Wir speichern das angeklickte HTML-Element in einer Variable, um es leichter weiter verwenden zu können.
   */
  const clickedCell = clickedCellEvent.target;

  /**
   * Hier rufen wir das Attribut "data-cell-index" von der angeklickten Zelle ab, um festzustellen, wo sich diese Zelle
   * in unserem Gitter befindet. Bitte beachte, dass "getAttribute" einen String-Wert zurückgibt. Da wir eine
   * tatsächliche Zahl benötigen, werden wir sie in einen Integer (Zahl) umwandeln.
   */
  const clickedCellIndex = Number.parseInt(
    clickedCell.getAttribute('data-cell-index'),
    10
  );

  // TODO
}

/**
 * Aufgaben:
 * - Setze das Spiel zurück, damit neu gestartet werden kann
 */
function handleRestartGame() {
  // TODO
}

/**
 * Und schliesslich fügen wir unsere Event-Listener zu den eigentlichen Spielzellen hinzu, ebenso wie unserem
 * Neustart-Button.
 */
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);