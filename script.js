

const WHO_BEATS_WHO = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
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

function validatePlayerChoice(input) {
    input = input.toLowerCase().trim();
    if (input !== "rock" && input !== "paper" && input !== "scissors") return null;
    return input;
}

function playRound(player, computer) {

    if (computer === player) 
        return "It's a tie! Go again!";
    if (WHO_BEATS_WHO[player] === computer)
        return "You win this round!";
    else return "The computer wins this round!";

}

function game() {
    alert("Welcome to ROCK, PAPER, SCISSORS! \n Click OK to begin Round 1.");
    let playerCount = 0;
    let roundCount = 0;
    while (roundCount < 5 && playerCount < 3 && roundCount - playerCount < 3) {
        let computer = getComputerChoice();
        console.log(computer);

        let player = validatePlayerChoice(prompt(`ROUND ${roundCount + 1}\n  YOU: ${playerCount} CPU: ${roundCount - playerCount} \n  Please select your fighter:`));
        while (player == null) {
            player = validatePlayerChoice(prompt(`ROUND ${roundCount + 1}\n  INVALID CHOICE!\n  Please select your fighter:`));
        }

        winner = playRound(player, computer);
        
        if (winner === "You win this round!") {
            playerCount++;
            roundCount++;
        } else if (winner === "The computer wins this round!") {
            roundCount++;
        }

        alert(`You chose: ${player.toUpperCase()}\nComputer chose: ${computer.toUpperCase()}\n  ${winner}`);
    }
    alert(`You won ${playerCount} out of the 5 rounds. The computer won ${roundCount - playerCount}.\n  ${playerCount >= 3 ? "You won!" : "You lost!"}`);
}


