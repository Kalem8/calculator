let choosenNumbers = [];
let clearButton = document.querySelector('.clear');

document.querySelectorAll('.number').forEach(element => {
    element.addEventListener('click', (event) => {
        choosenNumbers.push(event.target.innerText);
        document.querySelector('.displayer').innerText = choosenNumbers.join('');
        console.log('choosenNumbers: ', choosenNumbers);
    });
});

clearButton.addEventListener('click', clearChoosenNumbers);

function clearChoosenNumbers() {
    choosenNumbers.length = 0;
    document.querySelector('.displayer').innerText = 0;
}
