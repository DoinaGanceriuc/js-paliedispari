// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione). Dichiariamo chi ha vinto.


// inizializzazione delle variabili
const wordUserDigit = prompt("Scegli pari o dispari");
const numberUserDigit = Number(prompt("Scegli un numero da 1 a 5"));
const numberPc = Math.floor(Math.random() * 5) + 1;
console.log(numberPc);

let sum = numberUserDigit + numberPc
console.log(sum);


// condzione di verifica
if (sum % 2 == 0) {
    console.log("la somma è pari");
} else {
     console.log("la somma è dispari");
}