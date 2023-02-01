const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS'
let gameIsRunning = false;
const getPlayerChoice = function() {
    const selection = prompt(`${ROCK}, ${PAPER}, or ${SCISSORS}?`, '').toUpperCase();
    if(selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS) {
        alert(`Invalid object! We chose ${DEFAULT_USER_CHOICE} for you!`);
        return;
    }
    return selection;
}

const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

const getWinner = (
    cChoice,
    pChoice = DEFAULT_USER_CHOICE
) =>
    cChoice === pChoice
        ? RESULT_DRAW
        : (cChoice === ROCK && pChoice === PAPER) ||
        (cChoice === PAPER && pChoice === SCISSORS) ||
        (cChoice === SCISSORS && pChoice === ROCK)
        ? RESULT_PLAYER_WINS
        : RESULT_COMPUTER_WINS;


    // if (pChoice === cChoice) {
    //     return RESULT_DRAW;
    // } else if (
    //     cChoice === ROCK && pChoice === PAPER ||
    //     cChoice === PAPER && pChoice === SCISSORS ||
    //     cChoice === SCISSORS && pChoice ===ROCK
    // ){
    //     return RESULT_PLAYER_WINS;
    // } else {
    //     return RESULT_COMPUTER_WINS;
    // }


startGameBtn.addEventListener('click', () => {
    if(gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    let winner;
    if (playerChoice) {
        winner = getWinner(computerChoice, playerChoice);
    } else {
        winner = getWinner(computerChoice);
    }

    let message =  `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore `;
    if (winner === RESULT_DRAW) {
        message = message + 'had a draw';
    } else if (winner === RESULT_COMPUTER_WINS) {
        message = message + 'computer wins';
    } else {
        message = message + 'you win';
    }
    alert(message);
    gameIsRunning = false;
});

// not related to the game

const sumUp = (resultHandler, ...numbers) => {
    const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
    };

    let sum = 0;
    for (const num of numbers) {
        sum += validateNumber(num);
    }
    resultHandler(sum);
};

const subtractUp = function (resultHandler) {
    let sum = 0;
    for (const num of arguments) { //don't use that
        sum -= num;
    }
    return sum;
};

const showResult = (result) => {
    alert('The sum of adding all the numbers is ' + result);
};

sumUp(showResult, 5, 10, -3, 6, 10, 46);
sumUp(showResult, 5, 10, -3, 6, 10, 25, 68);
subtractUp(showResult, 5, 10, -3, 6, 10, 25, 68);