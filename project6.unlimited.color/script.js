const start = document.querySelector('#start');
const end = document.querySelector('#end');
const btcolor = document.querySelector('#start')

function createColor(){
    const  hex = "0123456789ABCDEF";// all hex values 
    let color = '#';//every color code must start with 
    for(let i=0;i<6;i++){
    // we ran loop 6 time cause we need 6 values
    // i.e two for red , green and blue
    color += hex[Math.trunc(Math.random()*16)];
    // here we are accessing the hex indexes
    }
 return color;
};
let intervalId;
//function
const changingColorFunc = function(){
    const changeBg = function(){
        document.body.style.backgroundColor = createColor();
    }
    intervalId  = setInterval(changeBg,500);
}
//function
const stopChanging = function(){
    clearInterval(intervalId);
    document.body.style.backgroundColor = 'black';
}

document.querySelector('#start').addEventListener('click',changingColorFunc)
document.querySelector('#end').addEventListener('click',stopChanging)