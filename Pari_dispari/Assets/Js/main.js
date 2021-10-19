// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione). Dichiariamo chi ha vinto.


// inizializzazione delle variabili
const wordUserDigit = prompt("Scegli pari o dispari");
const numberUserDigit = Number(prompt("Scegli un numero da 1 a 5"));

document.getElementById("user_digit").innerHTML = `hai scelto ${wordUserDigit} e il numero ${numberUserDigit}`

// function randomNumberPc
function randomNumberPc(min, max) {
    return Math.floor(Math.random() * max - min + 1) + min;
    
}
let pcNumber = randomNumberPc(1, 5)
document.getElementById("pc_number").innerHTML = `il numero random del pc è ${pcNumber}`

// function sum
function sum (num1, num2) {
    return num1 + num2
    
}
let sommaUserAndPc = sum(numberUserDigit, pcNumber);

// function sommaPariDispari
function sommaPariDispari(somma) {
    if (somma % 2 == 0) {
    return "pari";
}  
    return "dispari";
}
let risultatoSomma = sommaPariDispari(sum(numberUserDigit, pcNumber));
document.getElementById("somma").innerHTML = `la somma dei due numeri è ${sommaUserAndPc} e risulta ${risultatoSomma}`

// condizione di verifica
if (wordUserDigit == risultatoSomma) {
    document.getElementById("vincitore").innerHTML = `perciò hai vinto`
} else {
    document.getElementById("vincitore").innerHTML = `perciò ha vinto il PC`
}