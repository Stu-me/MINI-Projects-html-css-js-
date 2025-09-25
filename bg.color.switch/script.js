const buttons = document.querySelectorAll('.button');// now we have all the buttons as nodelist( and not array)
const body = document.querySelector('body');

buttons.forEach(function(button){ // now we want to access each nodelist to check to whom it will be matched
    console.log(button);         // also the thing is that nodelist cant take for therefore we have to do it in foreach
    button.addEventListener('click',function(e){ // e is something the js api will do its like a blackbox for now 
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'orange'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'default'){
            body.style.backgroundColor = "black";
        }
    }); 
});