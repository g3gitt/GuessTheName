const names = [
    'harry potter', 'hermione granger', 'ron weasley', 'albus dumbledore', 'severus snape',
    'voldemort', 'sirius black', 'rubeus hagrid', 'draco malfoy', 'ginny weasley',
    'luna lovegood', 'neville longbottom', 'minerva mcgonagall', 'bellatrix lestrange', 
    'dolores umbridge', 'fleur delacour', 'cedric diggory', 'remus lupin', 'horace slughorn',
    'kingsley shacklebolt', 'arthur weasley', 'molly weasley', 'fred weasley', 'george weasley',
    'percy weasley', 'pansy parkinson','youknowwho','fabian prewett','ludo bagman',
    'Bathilda Bagshot',
    'phineas nigellus black',
    'regulus black',
    'lavender brown',
    'vincent crabbe',
    'colin creevy',
    'alastar moody',
    'ariana dumbledore',
    'vernon dursley',
    'petunia dursley',
    'marge dursley',
    'argus filch',
    'mundungus fletcher',
    'gregory goyle',
    'helga hufflepuff',
    'bellatrix lestrange',
    'gilderoy lockhart',
    'lucius malfoy',
    'garrick ollivander',
    'peter pettigrew',
    'Albus severus potter',
    'james sirius potter',
    'lily luna potter',
    'quirinus quirrell',
    'rowena ravenclaw',
    'tom marvolo riddle',
    'salazar slytherin',
    'dean thomas',
    'andromeda tonks',
    'remus lupin',
    'sybill trelawney',
    'dolores umbridge',
    'aragog',
    'dobby',
    'hedwig',
    'peeves',
    'scabbers'

];

let target = names[Math.floor(Math.random() * names.length)];
let guessName = target.replace(/[a-z]/g, '_');
let attempts = 10;
let guessedLetters = new Set();

const board = document.getElementById('board');
const userLetter = document.getElementById('userLetter');
const submitLetterButton = document.getElementById('submitLetter');
const feedback = document.getElementById('feedback');
const attemptsLeftElem = document.getElementById('attemptsLeft');

function updateGameBoard() {
   
    board.textContent = guessName.split('').join(' ');
}

function handleGuess() {
    const input = userLetter.value.toLowerCase().trim();

    if (input.length !== 1 || !/^[a-z]$/.test(input)) {
        feedback.textContent = 'Please enter a vaild letter.';
        return;
    }

    if (guessedLetters.has(input)) {
        feedback.textContent = `You already guessed "${input}".`;
        return;
    }

    guessedLetters.add(input);

    if (target.includes(input)) {
        let newDisplay = '';
        for (let i = 0; i < target.length; i++) {
            newDisplay += target[i] === input ? input : guessName[i];
        }
        guessName = newDisplay;
    } else {
        attempts--;
    }

    if (guessName === target) {
        feedback.textContent = 'Congratulations! You guessed the name!';
        submitLetterButton.disabled = true;
    } else if (attempts === 0) {
        feedback.textContent = `Game Over! The name was "${target}".`;
        submitLetterButton.disabled = true;
    } else {
        feedback.textContent = '';
    }

    attemptsLeftElem.textContent = `Attempts Left: ${attempts}`;
    updateGameBoard();
    userLetter.value = '';
}

submitLetterButton.addEventListener('click', handleGuess);
userLetter.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleGuess();
    }
});


updateGameBoard();
