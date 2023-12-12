//Data
let choosenNumbers = [];
let numbersMemory = [];
let choosenOperator = 0;
let display = 0;

//Number Aggregator
document.querySelectorAll('.number').forEach(numberButton => {
    numberButton.addEventListener('click', aggregate);
});
function aggregate(event) {
    //event.target fait référence au DOM qui s'est fait déclenché par le 'click'
    choosenNumbers.push(event.target.innerText);
    document.querySelector('.displayer').innerText = choosenNumbers.join('');
}

//Operator 
let operatorButton = document.querySelectorAll('.operator');
operatorButton.forEach(operator => {
    operator.addEventListener('click', operatorSaver);
});
function operatorSaver(event) {
    choosenOperator = event.target.innerText;

    //numbersMemory.push(choosenNumbers.join(''));
    document.querySelector('.displayer').innerHTML = numbersMemory;
    choosenNumbers.length = 0;

    console.log(numbersMemory);
    console.log(choosenOperator);
}

//Clear
let clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearChoosenNumbers);
function clearChoosenNumbers() {
    choosenNumbers.length = 0;
    numbersMemory.length = 0;
    choosenOperator.length = 0;
    document.querySelector('.displayer').innerText = 0;
}