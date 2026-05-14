// Crea una funzione che ferma un timer dopo un certo tempo
// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, 
// ma si deve fermare dopo il tempo di stop.



function eseguiEferma(messaggio, startTime, stopTime) {

    //definisco un intervallo che lancia un console.log ogni 'startTime'
    //mi salvo l'id dell'intervallo per stopparlo in seguito
    const id= setInterval(() => {
        console.log(messaggio)
    }, startTime)

    //per fermare l'intervallo dopo 'stopTime' ms sfrutto il setTimeout che lancia la clearInterval 
    setTimeout(() => { 
        console.log("sto fermando l'intervallo")
        clearInterval(id);
    }, stopTime)
    
}

eseguiEferma('mi stanno chiamando', 1000, 5000)

