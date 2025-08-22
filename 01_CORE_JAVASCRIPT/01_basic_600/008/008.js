/* 

8. Random Integer Guess Game

Write a JavaScript program where the program takes a random integer between 1 and 10, 
and the user is then prompted to input a guess number. The program displays a message 
"Good Work" if the input matches the guess number otherwise "Not matched".    

*/

'use strict';

let x = Math.floor(Math.random() * 10) + 1; //random number 1-10
console.log(x);

let userInput = prompt('I\'m thinking about a number between 1 and 10; guess it!');
let y = Number(userInput);

if (x == y ) {
    console.log('Good Work!');
}
else {
    console.log('Not matched!');
}


/* while (true) {
    
    let x = Math.floor(Math.random() * 10) + 1; // numero casuale 1-10
    console.log('Numero da indovinare:', x);
    
    let userInput = prompt('Sto pensando a un numero tra 1 e 10; indovinalo!');
    let y = Number(userInput); // converte l'input in numero
    
    console.log('Numero generato:', x, 'Numero inserito:', y);
    
    // Controlla se l'utente ha annullato o inserito un valore non valido
    if (userInput === null) {
        console.log('Gioco annullato!');
        break;
    }
    
    if (isNaN(y)) {
        console.log('Per favore inserisci un numero valido!');
        continue;
    }
    
    if (x === y) {
        console.log('Bravo! Hai indovinato!');
        break;
    }
    else {
        console.log('Non hai indovinato! Riprova...');
    }
} */
