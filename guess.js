/*
create a program that guesses a number from 1 to 10
then asks us to guess that number.
if it's higher say "too high" and ask again.
its it's lower say "too low" and ask again.
if it's the right number say "congratulations" and exit
*/

import readline from "readline-sync"

let userGuessedRight = false

// while(true){ // me playing
// guess a number from 1-10
let numberChosen = Math.ceil(Math.random() * 10)
// console.log(numberChosen)
// }
while (!userGuessedRight) {
    let guess = readline.question("What is your guess?")
    if (guess == numberChosen) {
        console.log("Congratulations")
        userGuessedRight = true
    }
    if (guess > numberChosen) {
        console.log("too high! try again")
        // userGuessedRight = true
    }
    if (guess < numberChosen) {
        console.log("too low! try again")
        // userGuessedRight = true
    }
    

    // console.log(guess)
}
// while(!userGuessedRight) {
//     console.log("What is your guess?")
// }




// make NaN if

