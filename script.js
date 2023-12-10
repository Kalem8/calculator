//Actions de l'utilisateur 
document.querySelectorAll('.number').forEach(element => {
    element.addEventListener('click', (event) => {
        // Actions à effectuer lors du clic
        choosenNumbers.push(event.target.innerText);

        document.querySelector('.displayer').innerText = choosenNumbers.join('');

        console.log('choosenNumbers: ', choosenNumbers);

    });
});

//Bases de données 
let choosenNumbers = [];

//Algorithme 

//Visuel

