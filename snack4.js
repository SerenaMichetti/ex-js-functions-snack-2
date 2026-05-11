// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

function creaTimer(ms) {
  // Restituiamo una nuova funzione
  return function() {
    setTimeout(() => {
      console.log("Tempo scaduto!");
    }, ms);
  };
}

// Creiamo un timer da 2 secondi
const timerDueSecondi = creaTimer(2000);

console.log("Avvio del timer...");
timerDueSecondi(); // Dopo 2 secondi stamperà "Tempo scaduto!"