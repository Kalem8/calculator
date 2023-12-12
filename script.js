//Data
let selectedNumbers = [];
let memorisedNumbers = 0;
let choosenOperator = 0;

//Number Aggregator
document.querySelectorAll('.number').forEach(numberButton => {
    numberButton.addEventListener('click', aggregate);
});
function aggregate(event) {
    //event.target fait référence au DOM qui s'est fait déclenché par le 'click'
    selectedNumbers.push(event.target.innerText);
    document.querySelector('.displayer').innerText = selectedNumbers.join('');
}

//Operator 
let operatorButton = document.querySelectorAll('.operator');
operatorButton.forEach(operator => {
    operator.addEventListener('click', operatorSaver);
});
function operatorSaver(event) {
    choosenOperator = event.target.innerText;
    document.querySelector('.displayer').innerText = choosenOperator;
    memorisedNumbers = selectedNumbers.join('');
    selectedNumbers.length = 0;
    console.log(memorisedNumbers);
}

//Calculator
document.querySelector('.egal').addEventListener('click', calculate);
function calculate () {
    if (choosenOperator == '+') {
        let sum = Number(memorisedNumbers) + Number(selectedNumbers.join(''));
        document.querySelector('.displayer').innerText = sum;
        console.log(sum)
    } else if (choosenOperator == '-') {
        let minus = Number(memorisedNumbers) - Number(selectedNumbers.join(''));
        document.querySelector('.displayer').innerText = minus;
    } else if (choosenOperator == '/') {
        let divide = Number(memorisedNumbers) / Number(selectedNumbers.join(''));
        document.querySelector('.displayer').innerText = divide;
    }
}
    //Clear
let clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearselectedNumbers);
function clearselectedNumbers() {
    selectedNumbers.length = 0;
    memorisedNumbers.length = 0;
    choosenOperator.length = 0;
    document.querySelector('.displayer').innerText = 0;
}

