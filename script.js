//Data
let choosenNumbers = [];
let numbersMemory = [];

let choosenOperator = [];

//Numbers displayer
document.querySelectorAll('.number').forEach(element => {
    element.addEventListener('click', (event) => {
        choosenNumbers.push(event.target.innerText);
        document.querySelector('.displayer').innerText = choosenNumbers.join('');
        //console.log('choosenNumbers: ', choosenNumbers);
    });
});

//Clear
let clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearChoosenNumbers);
function clearChoosenNumbers() {
    choosenNumbers.length = 0;
    numbersMemory.length = 0;
    choosenOperator.length = 0;
    document.querySelector('.displayer').innerText = 0;
}

//Operator 
let operatorButton = document.querySelectorAll('.operator');
operatorButton.forEach(clickedOperator => {
    clickedOperator.addEventListener('click', operatorSaver);
});

function operatorSaver(event) {
    choosenOperator.push(event.target.innerText);

    numbersMemory = choosenNumbers.join('');
    document.querySelector('.displayer').innerHTML = numbersMemory;
    choosenNumbers.length = 0;

    console.log(numbersMemory);
    console.log(choosenOperator);
}