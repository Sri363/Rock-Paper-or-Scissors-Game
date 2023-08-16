let confirmation = confirm("can we play rock,paper or scissors?");

if (confirmation) {
    alert("let's play");
    let playerOne = prompt("Enter rock, paper or scissors")
    let playerChoice = playerOne.trim().toLowerCase();
    if (playerOne) {
        if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {

            let computer = Math.floor(Math.random() * 3 + 1);
            if (computer === 1) {
                computer = "rock";
                console.log(computer);
            } else if (computer === 2) {
                computer = "paper";
                console.log(computer);
            } else {
                computer = "scissors";
                console.log(computer);
            }
            if (playerChoice === computer) {
                alert(`Computer choose ${computer} ,its a tie!`);
            } else if (playerChoice === "rock" && computer === "paper") {
                alert(`Computer choose ${computer} ,Computer wins!`);
            } else if (playerChoice === "paper" && computer === "scissors") {
                alert(`Computer choose ${computer} ,You Wins!`);
            } else {
                alert(`Computer choose ${computer} ,You wins!`)
            }
        } else {
            alert("please enter a valid choice")
        }
    } else {
        console.log(null)
    }

} else {
    alert("Bye...Come again...");
}