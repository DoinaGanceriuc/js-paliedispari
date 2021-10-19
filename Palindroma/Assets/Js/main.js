// Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma

/* Strumenti
-prompt
-if/else
-function()
*/


// inizializzazione delle variabili
const userDigitWord = prompt("Digita una parola");
const palindromeWord = userDigitWord.split("").reverse().join("");


// condizione di verifica
/* if (userDigitWord == palindromeWord) {
    console.log("la parola inserita è palindroma");

} else {
    console.log("la parola inserita NON è palindroma");

} */

// definizione di una funzione
/**
 * Questa funzione restituisce il risultato di una parola palindroma
 * @param {string} word - indica una stringa da passare in input
 * @returns {boolean} - restituisce il valore boolean true se la condizione risulta vera. Altrimenti restituisce il valore boolean false se la condizione non si verifica
 */
function palindrome (word) {
    if (word == palindromeWord) {
    return true;
} else {
    return false;
} 
}


// condizione di verifica
if (palindrome(userDigitWord) == true) {
    document.querySelector("h1").innerHTML = `la parola ${userDigitWord} è palindroma`
} else {
   document.querySelector("h1").innerHTML = `la parola ${userDigitWord} NON è palindroma`
}