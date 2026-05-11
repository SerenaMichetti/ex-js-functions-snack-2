// Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.


function stampaOgniSecondo(saluto) {

  const intervallo = setInterval(() =>{
    console.log(saluto)
  }, 1000)

  return intervallo
}

const salutoAlSecondo = stampaOgniSecondo("Hello boolean!")