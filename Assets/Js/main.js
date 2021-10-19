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