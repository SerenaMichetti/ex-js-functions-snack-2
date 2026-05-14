// Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, 
// incrementando un contatore e stampandolo.


function creaContatoreAutomatico(intervallo) {

    let contatore = 0;

    return function (){

        setInterval(()=>{
            contatore++;
            console.log(`Incremento: ${contatore}`)
        }, intervallo)
    }
}

const incremento= creaContatoreAutomatico(1000)

incremento()