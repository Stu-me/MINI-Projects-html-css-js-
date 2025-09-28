const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault;
    result = querySelector('.lowOrHi');
    const num = Math.floor(Math.random()*10);
    const remain  = querySelector('.guesses"');
    const prevGuess = querySelector('.lastResult'); 
    const i=10;

    const number = parseInt(document.querySelector('#guessField'));
    const arr = new Array(10);
    if(number === num){
        result.innerHtml = `Hurray you get it right ${num} is the correct choice`;
      }
    else{
        result.innerHtml = ` Better luck next time `;
        i--;     
    }

})