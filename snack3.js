// Snack 3
// Crea una funzione eseguiOperazione
// - Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback).
//  La funzione deve eseguire l'operazione fornita sui due numeri.

//dichiaro una funzione che prende in input tre parametri e ritorna una callback 
function eseguiOperazione(num1, num2, operazione) {
    return operazione(num1, num2)
}

//dichiaro uan variabile chiamata operazione in cui invoco la funzione eseguiOperazione a cui passo i tre parametri in maniera anonima
const operazione = eseguiOperazione(3, 5,
    (a, b) => {
        return a + b
    }
)

//stampo in console il risultato della funzione
console.log(operazione)

