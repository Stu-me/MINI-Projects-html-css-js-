let randomNum = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt'); // submit button selected 
const userInput = document.querySelector('#guessField'); // input box selected 
const guessSlot = document.querySelector('.guesses');   // prevguess ke next ka area 
const remaining = document.querySelector('.output'); // guess remaing ka next ka area
const lowORHi =  document.querySelector('.lowOrHi');    // a empty paragraph at the last 
const startOver = document.querySelector('.resutlParas'); // the outer box that covers lastresult and gueses
const message = document.querySelector('#message');

let arrGuess = []; // array to store the previous result
let numGuess = 10;  // num that will count the remaining guess

let palyGame = true; // checker that will tell the user if he can play more or not 
if(palyGame){
    // start();
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        let val  = parseInt(userInput.value);
        validateInput(val);
    })
}
function validateInput(value){
    // checks if the input is valid to be passed
    if(isNaN(value) || value<1 || value>100){
        if(isNaN(value)) displayMessage(`Your values is not a number --enter the valid inputs`);
        else displayMessage(`Your value is out of the range (1 to 100)`);
    }
    else{
        verifyInput(value);
    }
}
function verifyInput(value){
    // checks if the input is correct or wrong
    // arrGuess.push(value);
    // numGuess--;
    if(value === randomNum) {
        displayMessage(`Your luck worked ${value} is the correct answer`);
        end();
    }
    else if(value<randomNum){
        setTimeout(() => {
             arrGuess.push(value);
             numGuess--;
            displayMessage(`You should try again and make some bigger number if you wanna win `);
        },2000)
        displayMessage('thinking......')
    }
    else if(value>randomNum){
         setTimeout(() => {
             arrGuess.push(value);
             numGuess--;
             displayMessage(`You should try again and make some smaller number if you wanna win `);
        },2000);
        displayMessage(`thinking...... `);
    }
}
function displayMessage(mess){
    // last ka empty pargraph mein message krega // if values are not valid 
    if(arrGuess.length>10){
        end();
    }

    else{
        guessSlot.innerHTML = arrGuess;
        remaining.innerHTML = numGuess;
        lowORHi.innerHTML= mess;
    }
}
function updateStatsForWrongVal(value){
    // maybe wrong values ko display krna hai 
}
function start(){
    displayMessage('Game starting...................');
    setTimeout(() => {
        arrGuess = [];
        numGuess = 10;
        guessSlot.innerHTML = arrGuess;
        displayMessage('GAME STARTED');
    }, 3000);
    end();g
}
function end(){
    displayMessage('Game over .................. wait to reset the components');
    setTimeout(()=>{
        start();
    },2000)
}

