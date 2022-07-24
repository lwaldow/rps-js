const VICTORY_TEXT = {
    start: "...",
    tie: "it was a tie!",
    youWinRound: "you won this round!!",
    cpuWinRound: "the CPU won this round!",
    youWinGame: "you won the tournament!!",
    cpuWinGame: "the CPU won the tournament!"
}

const WHO_BEATS_WHO = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
}

for (let name of Object.keys(WHO_BEATS_WHO)) {
    document.querySelector(`#${name}-button`).addEventListener("click", playRound);
}

const victoryTextElem = document.querySelector("#victory-text");
const playerScoreElem = document.querySelector("#player-score");
const cpuScoreElem = document.querySelector("#cpu-score");
const sbPlayerElem = document.querySelector("#sb-emoji-1");
const sbCPUElem = document.querySelector("#sb-emoji-2");
let enableGame = true;

let playerScore = 0;
let cpuScore = 0;

function updateState(status) {
    if (status === "youWinRound") {
        playerScore++;
    }
    else if (status === "cpuWinRound") {
        cpuScore++;
    }
    playerScoreElem.innerText = String(playerScore);
    cpuScoreElem.innerText = String(cpuScore);
    if (playerScore == 5) {
        victoryTextElem.innerText = VICTORY_TEXT.youWinGame;
        enableGame = false;
    } else if (cpuScore == 5) {
        victoryTextElem.innerText = VICTORY_TEXT.cpuWinGame;
        enableGame = false;
    }
    else {
        victoryTextElem.innerText = VICTORY_TEXT[status];
    }
}

function updateRoundIcons(choice, elem) {
    let emoji = '';
    switch (choice) {
        case "rock":
            emoji = "🪨";
            break;
        case "paper":
            emoji = "🧻";
            break;
        case "scissors":
            emoji = "🗡️";
            break;
    }
    elem.firstElementChild.innerText = emoji;
    elem.lastElementChild.innerText = choice;
}

function playRound(event) {
    if(!enableGame)
        return;
    let player = event.currentTarget.lastElementChild.innerText;
    let computer = getComputerChoice();

    updateRoundIcons(player, sbPlayerElem);
    updateRoundIcons(computer, sbCPUElem);

    if (computer === player) 
        updateState("tie");
    else if (WHO_BEATS_WHO[player] === computer) {
        return updateState("youWinRound");
    }
    else {
        return updateState("cpuWinRound");
    }
}

function getComputerChoice() {
    which = Math.floor(Math.random() * 3);
    switch (which) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "rock";
    }
}