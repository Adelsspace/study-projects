'use strict';

/*
console.log( document.querySelector('.message').textContent)

document.querySelector('.message').textContent = "Correct Number!"

console.log( document.querySelector('.message').textContent)

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23
console.log( document.querySelector('.guess').value)
*/

let secretNumber = Math.trunc(Math.random()* 20)+ 1;
let score = 20;
let hightscore = 0;


function displayMessage(message){
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log( guess);

    if (!guess){
        // document.querySelector('.message').textContent = "No number"
        displayMessage("No number")
    } else if( guess === secretNumber){
        // document.querySelector('.message').textContent = "Correct Number"
        displayMessage("Correct Number")
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector(".number").textContent = secretNumber
        document.querySelector('.number').style.width = '30rem'
        if (score > hightscore){
            hightscore = score;
            document.querySelector('.highscore').textContent = hightscore
        }

    }else if (guess !== secretNumber){
        if (score > 1){
            // document.querySelector('.message').textContent = guess > secretNumber ? "Too high!" : "Too low!";
            displayMessage(guess > secretNumber ? "Too high!" : "Too low!")
            score--;
            document.querySelector('.score').textContent = score;
        } else{
            // document.querySelector('.message').textContent = "You lost the game ^_^"
            displayMessage("You lost the game ^_^")
            document.querySelector('.score').textContent = 0;
        }
        }  
    
})

document.querySelector('.again').addEventListener('click',function(){
    secretNumber = Math.trunc(Math.random()* 20)+ 1;
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector(".number").textContent = '?'
    document.querySelector('.guess').value = ''
    // document.querySelector('.message').textContent = "Start guessing..."
    displayMessage("Start guessing...")
    document.querySelector('.score').textContent = score;

})