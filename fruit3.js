function playRPS(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    console.log(`Player: ${playerChoice}`);
    console.log(`Computer: ${computerChoice}`);

    if (playerChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
}

// Example usage:
playRPS("rock");
