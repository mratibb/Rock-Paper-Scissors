let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const gameOver_div = document.getElementById("action-message");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const choices_div = document.getElementById("moves");
const userSmall = "User".fontsize(3).sub();
const compSmall = "Comp".fontsize(3).sub();

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function resetGame() {
    location.reload();
}

function gameOver() {
    result_p.innerHTML = `You lost!! ⚰️`;
    gameOver_div.innerHTML = "Click reset to play more!!!";
    choices_div.classList.add('hide');
}
function won() {
    result_p.innerHTML = `You won!! 🏆🥇`;
    gameOver_div.innerHTML = "Click reset to play more!!!";
    choices_div.classList.add('hide');
}

function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${userSmall} beats ${convertToWord(computerChoice)}${compSmall}`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
    if (userScore == 5) {
        won();
    }
}

function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${userSmall} loses to ${convertToWord(computerChoice)}${compSmall}`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
    if (computerScore == 5) {
        gameOver();
    }
}

function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${userSmall} equals ${convertToWord(computerChoice)}${compSmall} ==> It's a draw!! 🌓`;
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 300);
}

function game(userChoice) {
        const computerChoice = getComputerChoice();
        switch (userChoice + computerChoice) {
            case "rs":
            case "pr":
            case "sp":
                win(userChoice, computerChoice);            
                break;
            case "rp":
            case "ps":
            case "sr":
                lose(userChoice, computerChoice);
                break;
            case "rr":
            case "pp":
            case "ss":
                draw(userChoice, computerChoice);
                break;
    }
}

function main() {
        rock_div.addEventListener('click', () => game("r"));
        paper_div.addEventListener('click', () => game("p"));
        scissors_div.addEventListener('click', () => game("s"));
}

main();
