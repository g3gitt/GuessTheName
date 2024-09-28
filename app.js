const names = [
    'harry potter',
    'hermione granger',
    'ron weasley',
    'albus dumbledore',
    'severus snape',
    'voldemort',
    'sirius black',
    'rubeus hagrid',
    'draco malfoy',
    'ginny weasley',
    'luna lovegood',
    'neville longbottom',
    'minerva mcgonagall',
    'bellatrix lestrange',
    'dolores umbridge',
    'fleur delacour',
    'cedric diggory',
    'remus lupin',
    'horace slughorn',
    'kingsley shacklebolt',
    'arthur weasley',
    'molly weasley',
    'fred weasley',
    'george weasley',
    'percy weasley',
    'pansy parkinson',
    'fabian prewett',
    'ludo bagman',
    'bathilda bagshot',
    'phineas nigellus black',
    'regulus black',
    'lavender brown',
    'vincent crabbe',
    'colin creevey',
    'alastor moody',
    'ariana dumbledore',
    'vernon dursley',
    'petunia dursley',
    'marge dursley',
    'argus filch',
    'mundungus fletcher',
    'gregory goyle',
    'helga hufflepuff',
    'gilderoy lockhart',
    'lucius malfoy',
    'garrick ollivander',
    'peter pettigrew',
    'albus severus potter',
    'james sirius potter',
    'lily luna potter',
    'quirinus quirrell',
    'rowena ravenclaw',
    'tom marvolo riddle',
    'salazar slytherin',
    'dean thomas',
    'andromeda tonks',
    'sybill trelawney',
    'aragog',
    'dobby',
    'hedwig',
    'peeves',
    'scabbers',
    'narcissa malfoy',
    'moaning myrtle',
    'fenrir greyback',
    'ginevra weasley',
    'bill weasley',
    'charlie weasley',
    'alice longbottom',
    'frank longbottom',
    'poppy pomfrey',
    'madam maxime',
    'nicolas flamel',
    'mafalda hopkirk',
    'victor krum',
    'leonard muggins',
    'romilda vane',
    'elphias doge',
    'bertha jorkins',
    'mundungus fletcher',
    'lavender brown',
    'goyle',
    'barty crouch jr',
    'barty crouch sr',
    'peter pettigrew',
    'fleur delacour',
    'gellert grindelwald',
    'firenze',
    'neville longbottom',
    'pansy parkinson',
    'james potter',
    'lily potter',
    'luna lovegood',
    'cho chang',
    'fred weasley',
    'george weasley',
    'molly weasley',
    'arthur weasley',
    'rubeus hagrid',
    'minerva mcgonagall',
    'severus snape',
    'horace slughorn',
    'remus lupin',
    'sirius black',
    'moaning myrtle',
    'peter pettigrew',
    'dudley dursley',
    'argus filch',
    'tom riddle',
    'bellatrix lestrange',
    'kingsley shacklebolt',
    'griphook',
    'scabbers',
    'hedwig',
    'aragog',
    'dobby',
    'gilderoy lockhart',
    'bathilda bagshot',
    'fenrir greyback',
    'lavender brown',
    'alice longbottom',
    'frank longbottom',
    'colin creevey',
    'vincent crabbe',
    'gregory goyle',
    'sirius black',
    'albus dumbledore',
    'dolores umbridge',
    'fleur delacour',
    'cedric diggory',
    'ginevra weasley',
    'neville longbottom',
    'dean thomas',
    'narcissa malfoy',
    'ron weasley',
    'hermione granger',
    'ariana dumbledore',
    'quirinus quirrell',
    'barty crouch',
    'horace slughorn',
    'percy weasley',
    'charlie weasley',
    'bill weasley',
    'fleur delacour',
    'madam pomfrey',
    'marjorie dursley',
    'petunia dursley',
    'vernon dursley',
    'alastor moody',
    'petunia dursley',
    'argus filch',
    'mundungus fletcher',
    'fenrir greyback',
    'dudley dursley',
    'scabbers',
    'hedwig',
    'goyle',
    'moaning myrtle',
    'neville longbottom',
    'romilda vane',
    'elphias doge',
    'gellert grindelwald',
    'bathilda bagshot',
    'charity burbage',
    'poppy pomfrey',
    'nicolas flamel',
    'voldemort',
    'james potter',
    'lily potter',
    'slytherin',
    'ravenclaw',
    'hufflepuff',
    'gryffindor',
    'kingsley shacklebolt',
    'argus filch',
     'He-Who-Must-Not-Be-Named'
];

const desc = [
    "Harry Potter: The Chosen One and professional Quidditch crasher.",
    "Hermione Granger: The Brightest Witch, saving the wizarding world one perfectly organized study session at a time.",
    "Ron Weasley: Wizarding wingman.",
    "Albus Dumbledore: Owner of the most impressive beard in Hogwarts history.",
    "Severus Snape: Potions master and savior of the Chosen One.",
    "Voldemort: The Dark Lord with a bad hair day... that lasted forever.",
    "Sirius Black: The only prisoner to ever escape Azkaban.",
    "Rubeus Hagrid: The gamekeeper with a heart bigger than his shoes.",
    "Draco Malfoy: The bad boy of Hogwarts.",
    "Ginny Weasley: The youngest Weasley sibling.",
    "Luna Lovegood: Where gravity defies reading norms.",
    "Neville Longbottom: The son of Auror parents, Frank and Alice Longbottom.",
    "Minerva McGonagall: Hogwarts Transfiguration Professor and Head of Gryffindor House.",
    "Bellatrix Lestrange: Death Eater, Voldemort's loyal follower, and pure-blood witch.",
    "Dolores Umbridge: Ministry-appointed Hogwarts High Inquisitor.",
    "Fleur Delacour: Beauxbatons student and talented witch.",
    "Cedric Diggory: Hufflepuff student and Triwizard Tournament victim.",
    "Remus Lupin: Defense Against the Dark Arts Professor and werewolf.",
    "Horace Slughorn: Potions Master and former Hogwarts Professor.",
    "Kingsley Shacklebolt: Auror and Order member.",
    "Arthur Weasley: Ministry of Magic employee and patriarch.",
    "Molly Weasley: Devoted mother.",
    "Fred Weasley: Prankster and twin son.",
    "George Weasley: Prankster and twin son.",
    "Percy Weasley: Ministry employee and middle son.",
    "Pansy Parkinson: Slytherin student and Draco's friend.",
    "Fabian Prewett: Auror and Molly's brother.",
    "Ludo Bagman: Former Ministry employee and gambler.",
    "Bathilda Bagshot: Historian and mysterious figure.",
    "Phineas Nigellus Black: Former Hogwarts Headmaster.",
    "Regulus Black: Sirius's brother and mysterious figure.",
    "Lavender Brown: Gryffindor student and enthusiastic fan.",
    "Vincent Crabbe: Slytherin student and Draco's friend.",
    "Colin Creevey: Gryffindor student and enthusiastic photographer.",
    "Alastor Moody: Retired Auror and temporary Defense Against the Dark Arts Professor.",
    "Ariana Dumbledore: Albus's sister and mysterious figure.",
    "Vernon Dursley: Harry's Muggle uncle.",
    "Petunia Dursley: Harry's Muggle aunt.",
    "Marge Dursley: Vernon's sister and Petunia's sister.",
    "Argus Filch: Hogwarts caretaker and Squib.",
    "Mundungus Fletcher: Shady character and Order member.",
    "Gregory Goyle: Slytherin student and Draco's friend.",
    "Helga Hufflepuff: Hogwarts founder and hardworking witch.",
    "Gilderoy Lockhart: Charlatan and former Hogwarts Professor.",
    "Lucius Malfoy: Wealthy pure-blood and influential Death Eater.",
    "Garrick Ollivander: Renowned wandmaker.",
    "Peter Pettigrew: Traitor and former Marauder.",
    "Albus Severus Potter: Harry's son.",
    "James Sirius Potter: Harry's son.",
    "Lily Luna Potter: Harry's daughter.",
    "Quirinus Quirrell: Former Defense Against the Dark Arts Professor.",
    "Rowena Ravenclaw: Hogwarts founder and intelligent witch.",
    "Tom Marvolo Riddle: The Dark Lord with a bad hair day... that lasted forever.",
    "Salazar Slytherin: Hogwarts founder and Parselmouth.",
    "Dean Thomas: Gryffindor student and artist.",
    "Andromeda Tonks: Bellatrix's sister and Narcissa's cousin.",
    "Sybill Trelawney: Divination Professor.",
    "Aragog: Hagrid's giant spider friend.",
    "Dobby: Loyal House-Elf and Harry's friend.",
    "Hedwig: Harry's owl.",
    "Peeves: Poltergeist and Hogwarts prankster.",
    "Scabbers: Ron's pet rat and Peter Pettigrew's disguise.",
    "Narcissa Malfoy: Lucius's wife and Draco's mother.",
    "Moaning Myrtle: Hogwarts ghost.",
    "Fenrir Greyback: Werewolf and Death Eater.",
    "Ginevra Weasley: Youngest Weasley child and talented witch.",
    "Bill Weasley: Older son and Curse Breaker.",
    "Charlie Weasley: Dragon handler and older son.",
    "Alice Longbottom: Auror and torture survivor.",
    "Frank Longbottom: Auror and torture survivor.",
    "Poppy Pomfrey: Hogwarts nurse.",
    "Madam Maxime: Beauxbatons Headmistress.",
    "Nicolas Flamel: Alchemist and former Hogwarts teacher.",
    "Mafalda Hopkirk: Ministry of Magic employee.",
    "Victor Krum: Durmstrang student and Triwizard Tournament champion.",
    "Leonard Muggins",
    "Romilda Vane: Gryffindor student and enthusiastic fan.",
    "Elphias Doge: Order member and friend of Albus Dumbledore.",
    "Bertha Jorkins: Ministry employee and unfortunate victim.",
    "Mundungus Fletcher: Shady character and Order member.",
    "Lavender Brown: Gryffindor student and enthusiastic fan.",
    "Goyle: Slytherin student and Draco's friend.",
    "Barty Crouch Jr.: Death Eater and Polyjuice impersonator.",
    "Barty Crouch Sr.: Ministry employee and strict father.",
    "Peter Pettigrew: Traitor and former Marauder.",
    "Fleur Delacour: Beauxbatons student and talented witch.",
    "Gellert Grindelwald: Dark wizard and former ally of Albus Dumbledore.",
    "Firenze: Centaur and Hogwarts teacher.",
    "Neville Longbottom: Gryffindor student and Herbology expert.",
    "Pansy Parkinson: Slytherin student and Draco's friend.",
    "James Potter: Harry's father and Gryffindor student.",
    "Lily Potter: Harry's mother and talented witch.",
    "Luna Lovegood: Ravenclaw student and dreamy individual.",
    "Cho Chang: Ravenclaw student and Quidditch player.",
    "Fred Weasley: Prankster and twin son.",
    "George Weasley: Prankster and twin son.",
    "Molly Weasley: Devoted mother.",
    "Arthur Weasley: Ministry of Magic employee and patriarch.",
    "Rubeus Hagrid: Hogwarts Gamekeeper and half-giant.",
    "Minerva McGonagall: Transfiguration Professor and Head of Gryffindor.",
    "Severus Snape: Potions Master and complex character.",
    "Horace Slughorn: Potions Master and former Hogwarts Professor.",
    "Remus Lupin: Defense Against the Dark Arts Professor and werewolf.",
    "Sirius Black: Harry's godfather and wrongly accused wizard.",
    "Moaning Myrtle: Hogwarts ghost.",
    "Peter Pettigrew: Traitor and former Marauder.",
    "Dudley Dursley: Harry's Muggle cousin.",
    "Argus Filch: Hogwarts caretaker and Squib.",
    "Tom Riddle: Lord Voldemort's birth name.",
    "Bellatrix Lestrange: Death Eater and fanatical pure-blood.",
    "Kingsley Shacklebolt: Auror and Order member.",
    "Griphook: Goblin and former Gringotts employee.",
    "Scabbers: Ron's pet rat and Peter Pettigrew's disguise.",
    "Hedwig: Harry's owl.",
    "Aragog: Hagrid's giant spider friend.",
    "Dobby: Loyal House-Elf and Harry's friend.",
    "Gilderoy Lockhart: Charlatan and former Hogwarts Professor.",
    "Bathilda Bagshot: Historian and mysterious figure.",
    "Fenrir Greyback: Werewolf and Death Eater.",
    "Lavender Brown: Gryffindor student and enthusiastic fan.",
    "Alice Longbottom: Auror and torture survivor.",
    "Frank Longbottom: Auror and torture survivor.",
    "Colin Creevey: Gryffindor student and enthusiastic photographer.",
    "Vincent Crabbe: Slytherin student and Draco's friend.",
    "Gregory Goyle: Slytherin student and Draco's friend.",
    "Sirius Black: Harry's godfather and wrongly accused wizard.",
    "Albus Dumbledore: Former Hogwarts Headmaster and wise wizard.",
    "Dolores Umbridge: Ministry-appointed Hogwarts High Inquisitor.",
    "Fleur Delacour: Beauxbatons student and talented witch.",
    "Cedric Diggory: Hufflepuff student and Triwizard Tournament victim.",
    "Ginevra Weasley: Youngest Weasley child and talented witch.",
    "Neville Longbottom: Gryffindor student and Herbology expert.",
    "Dean Thomas: Gryffindor student and artist.",
    "Narcissa Malfoy: Lucius's wife and Draco's mother.",
    "Ron Weasley: Harry's best friend and loyal companion.",
    "Hermione Granger: Brilliant student and Harry's best friend.",
    "Ariana Dumbledore: Albus's sister and mysterious figure.",
    "Quirinus Quirrell: Former Defense Against the Dark Arts Professor.",
    "Barty Crouch: Ministry employee and strict father.",
    "Horace Slughorn: Potions Master and former Hogwarts Professor.",
    "Percy Weasley: Ministry employee and middle son.",
    "Charlie Weasley: Dragon handler and older son.",
    "Bill Weasley: Older son and Curse Breaker.",
    "Fleur Delacour: Beauxbatons student and talented witch.",
    "Madam Pomfrey: Hogwarts nurse.",
    "Marjorie Dursley: Vernon's sister and Petunia's sister.",
    "Petunia Dursley: Harry's Muggle aunt.",
    "Vernon Dursley: Harry's Muggle uncle.",
    "Alastor Moody: Retired Auror and temporary Defense Against the Dark Arts Professor.",
    "Petunia Dursley: Harry's Muggle aunt.",
    "Argus Filch: Hogwarts caretaker and Squib.",
    "Mundungus Fletcher: Shady character and Order member.",
    "Fenrir Greyback: Werewolf and Death Eater.",
    "Dudley Dursley: Harry's Muggle cousin.",
    "Scabbers: Ron's pet rat and Peter Pettigrew's disguise.",
    "Hedwig: Harry's owl.",
    "Goyle: Slytherin student and Draco's friend.",
    "Moaning Myrtle: Hogwarts ghost.",
    "Neville Longbottom: Gryffindor student and Herbology expert.",
    "Romilda Vane: Gryffindor student and enthusiastic fan.",
    "Elphias Doge: Order member and friend of Albus Dumbledore.",
    "Gellert Grindelwald: Dark wizard and former ally of Albus Dumbledore.",
    "Bathilda Bagshot: Historian and mysterious figure.",
    "Charity Burbage: Hogwarts Professor and unfortunate victim.",
    "Poppy Pomfrey: Hogwarts nurse.",
    "Nicolas Flamel: Alchemist and former Hogwarts teacher.",
    "Voldemort: The Dark Lord with a bad hair day... that lasted forever.",
    "James Potter: Harry's father and Gryffindor student.",
    "Lily Potter: Harry's mother and talented witch.",
    "Salazar Slytherin: Hogwarts founder and Parselmouth.",
    "Rowena Ravenclaw: Hogwarts founder and intelligent witch.",
    "Helga Hufflepuff: Hogwarts founder and hardworking witch.",
    "Godric Gryffindor: Hogwarts founder and brave wizard.",
    "Kingsley Shacklebolt: Auror and Order member.",
    "Argus Filch: Hogwarts caretaker and Squib.",
    "He-Who-Must-Not-Be-Named: The Dark Lord with a bad hair day... that lasted forever."

];



let target, guessName, attempts, guessedLetters,answer,l;

const board = document.getElementById('board');
const feedback = document.getElementById('feedback');
const attemptsLeftElem = document.getElementById('attemptsLeft');
const gameOverModal = document.getElementById('Modal');
const gameOverMessage = document.getElementById('gameOverMessage');
const keys = document.querySelectorAll('.key');

function startGame() {
    l=[Math.floor(Math.random() * names.length)];
    target = names[l];
    answer=desc[l]
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

