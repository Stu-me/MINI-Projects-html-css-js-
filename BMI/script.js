const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid input - ${height} - this will not be entertained as valid`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid input - ${weight} - this will not be entertained as valid`;
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
        const bmiINdx = document.querySelector("#bmiIndex");
        if(bmi<18.6){
            bmiINdx.innerHTML = `Your are Underweight`;
        }
        else if(bmi>=18.6 && bmi<24.9){
            bmiINdx.innerHTML = `Your are Healthy`;
        }
        else{
            bmiINdx.innerHTML = `Your are Overweight`;
        }
    }
});