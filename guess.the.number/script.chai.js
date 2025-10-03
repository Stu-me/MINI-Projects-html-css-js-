let randomNum = Math.trunc(Math.random()*100)+1;
// const submit = document.querySelector('.form');
const guessedVal = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const startOver = document.querySelector('.resultParas');
const prevGuessOutput = document.querySelector('.guesses');
const leftGuessCount = document.querySelector('.remains');
const message = document.querySelector('.lowOrHi')
const errBox = document.querySelector('#errBox');
// const errorBox = document.querySelector('#alert')

const p = document.createElement('p');// creates a new element that is still in the memory only 

let prevGuess = [];
let numGuess = 10;
let playGame = true;

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        if(!playGame) return;
        const guess = parseInt(guessedVal.value);
        validateInput(guess);
    });
}
function validateInput(value){
    if(isNaN(value)){
        printErr("sir ...  100% literacy sirr...  enter a number ...sir....")
        // alert('Please enter a valid mumber '); // popup alert
    }
    else if(value<1){
        alert('Please enter a number  more than 1');
    }
    else if(value>100){
        alert('please enter a number less than 100');
    }
    else{
        // verified that the input is num and valid 
        prevGuess.push(value);
        numGuess--;
        resultOut(value);
        if(numGuess === 0){
            displayMessage(`Game over.Random number was ${randomNum}`);
            endGame();
        }
        else{
            checkGuess(value);
        }
    }
}
function checkGuess(value){
    if(value === randomNum){
        displayMessage(`you guessed it right`);
        endGame();
    }
    else if(value<randomNum){
        displayMessage(`Number is Too low`);
    }
    else if (value>randomNum){
        displayMessage(`Number is Too high`);
    }
}
function resultOut(value){
    guessedVal.value = '';
    // prevGuessOutput += `${guess}, `;
    prevGuessOutput.innerHTML = prevGuess
    leftGuessCount.innerHTML = `${numGuess}, `;
}
function printErr(message){
    errBox.textContent = message;
    errBox.style.display = "block";
    setTimeout(()=>{
        errBox.style.display = "none";
    },3000);
}
function displayMessage(mess){
    message.innerHTML= `<h2 id="newGame">${mess}<h2>`;
}
function endGame(){
    guessedVal.value = '';
    guessedVal.disabled = true;  // now user can't type anymore
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGameButton">Start new Games</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame(){
    const newGameButton = document.querySelector('#newGameButton');
    newGameButton.addEventListener('submit',(e)=>{
        randomNum = Math.trunc(Math.random()*100)+1;
        prevGuess = [];
        numGuess = 10;
        prevGuessOutput.innerHTML = '';
        leftGuessCount.innerHTML = numGuess;
        guessedVal.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}