//  Snack 1
// Crea una funzione che somma due numeri.

// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.

function somma(num1, num2){
    return num1 + num2
}

const totale = somma(8,2);

console.log(totale);



// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile

const sommaAnonima = function(num1, num2){
    return num1 + num2
}
const risultato = sommaAnonima(3,9);

console.log(risultato)


// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

const arrowSomma=((a, b)=> a + b);

const ab = arrowSomma(6,8);

console.log(ab);