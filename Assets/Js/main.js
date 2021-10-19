// Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma

/* Strumenti
-prompt
-if/else
-function()
*/


// inizializzazione delle variabili
const userDigitWord = prompt("Digita una parola");
/* console.log(userDigitWord); */

const palindromeWord = userDigitWord.split("").reverse().join("");

/* console.log(palindromeWord); */

// condizione di verifica
if (userDigitWord == palindromeWord) {
    console.log("la parola inserita è palindroma");

} else {
    console.log("la parola inserita NON è palindroma");

}