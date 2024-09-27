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


let target, guessName, attempts, guessedLetters;

const board = document.getElementById('board');
const feedback = document.getElementById('feedback');
const attemptsLeftElem = document.getElementById('attemptsLeft');
const gameOverModal = document.getElementById('Modal');
const gameOverMessage = document.getElementById('gameOverMessage');
const keys = document.querySelectorAll('.key');

function startGame() {
    target = names[Math.floor(Math.random() * names.length)];
    guessName = target.replace(/[a-z]/g, '_');
    attempts = 10;
    guessedLetters = new Set();
    updateGameBoard();
    attemptsLeftElem.textContent = `Attempts Left: ${attempts}`;
    feedback.textContent = '';
    gameOverModal.style.display = 'none'; 
    gameOverMessage.textContent = ''; 
    restartModal.style.display = 'none'; 
    restartMessage.textContent = '';
    
    resetKeyboard();
}

function updateGameBoard() {
    board.textContent = guessName.split('').join(' ');
}

function handleGuess(input) {
    if (input.length !== 1 || !/^[a-z]$/.test(input)) {
        feedback.textContent = 'Please enter a valid letter.';
        return;
    }

    if (guessedLetters.has(input)) {
        feedback.textContent = `You already guessed "${input}".`;
        return;
    }

    guessedLetters.add(input);
    const currentKeyButton = document.querySelector(`.key[data-key="${input.toUpperCase()}"]`);

    if (target.includes(input)) {
        let newDisplay = '';
        for (let i = 0; i < target.length; i++) {
            newDisplay += target[i] === input ? input : guessName[i];
        }
        guessName = newDisplay;

        if (currentKeyButton) {
            currentKeyButton.classList.add('correct');
        }
    } else {
        attempts--;

        if (currentKeyButton) {
            currentKeyButton.classList.add('incorrect');
        }
    }

    if (guessName === target) {
        restartMessage.textContent = `Yes! You guessed the name correctly: "${target}"`;
        restartModal.style.display = 'flex'; 
    } else if (attempts <= 0) {
        gameOverMessage.textContent = `The name was "${target}".`;
        gameOverModal.style.display = 'flex'; 
    } else {
        feedback.textContent = '';
    }
    
    attemptsLeftElem.textContent = `Attempts Left: ${attempts}`;
    updateGameBoard();
}

function resetKeyboard() {
    keys.forEach(key => {
        key.classList.remove('correct', 'incorrect');
    });
}

function restartGame() {
    startGame();
}

document.addEventListener('keypress', (event) => {
    handleGuess(event.key.toLowerCase());
});

keys.forEach(key => {
    key.addEventListener('click', () => {
        handleGuess(key.dataset.key.toLowerCase());
    });
});

startGame();

