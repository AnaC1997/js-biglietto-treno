const numeroKilometri = parseInt(prompt("Inserisci il numero di chilometri che vuoi percorrere: esempio 1k"));
const eta = parseInt(prompt("Inserisci la tua età"));

console.log("numeroKilometri", numeroKilometri);
console.log("età", eta);

const costo = 0.21;
const costoTotale = numeroKilometri * costo;
const sconto20 = 0.20;
const sconto40 = 0.40;

if (Number.isFinite(numeroKilometri) && Number.isFinite(eta)){

    if (eta <= 17) {
    console.log(costoTotale - costoTotale * sconto20); // Sconto del 20%
    document.getElementById("messagge").innerHTML = "Il costo del biglietto è: " + (costoTotale - costoTotale * sconto20).toFixed(2) + "€";

} else if (eta >= 65) {
    console.log(costoTotale - costoTotale * sconto40); // Sconto del 40%
    document.getElementById("messagge").innerHTML = "Il costo del biglietto è: " + (costoTotale - costoTotale * sconto40).toFixed(2) + "€";
} else {
    console.log(costoTotale); // Nessuno sconto, costo normale
    document.getElementById("messagge").innerHTML = "Il costo del biglietto è: " + costoTotale.toFixed(2) + "€";
}


}


else{
    console.log("Errore")
    document.getElementById("messagge").innerHTML = "Errrore, inserire solo numeri" 
}


   
/*
if (eta <= 17) {
    console.log(costoTotale - costoTotale * sconto20); // Sconto del 20%
    document.getElementById("messagge").innerHTML = "Il costo del biglietto è: " + (costoTotale - costoTotale * sconto20).toFixed(2) + "€";

} else if (eta >= 65) {
    console.log(costoTotale - costoTotale * sconto40); // Sconto del 40%
    document.getElementById("messagge").innerHTML = "Il costo del biglietto è: " + (costoTotale - costoTotale * sconto40).toFixed(2) + "€";
} else {
    console.log(costoTotale); // Nessuno sconto, costo normale
    document.getElementById("messagge").innerHTML = "Il costo del biglietto è: " + costoTotale.toFixed(2) + "€";
}*/


