function getComputerChoice(){
    let result;

    let randomNumber = Math.floor(Math.random() * 3);

    switch(randomNumber){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.trim()=='rock'&&computerSelection.trim()=='scissors'){
      return "You win! Rock beats scissors";
    }
    else if(playerSelection.trim()=='rock'&&computerSelection.trim()=='paper'){
        return "You lose! Paper beats rock";
    }
    else if(playerSelection.trim()=='rock'&&computerSelection.trim()=='rock'){
            return "It's a tie!";
        }
    else if(playerSelection.trim()=='paper'&&computerSelection.trim()=='rock'){
            return "You win! Paper beats rock";
        }
    else if(playerSelection.trim()=='paper'&&computerSelection.trim()=='scissors'){
        return "You lose! Scissors beats paper";
    }
    else if(playerSelection.trim()=='paper'&&computerSelection.trim()=='paper'){
        return "It's a tie!";
    }
    else if(playerSelection.trim()=='scissors'&&computerSelection.trim()=='paper'){
        return "You win! Scissors beats paper";
    }
    else if(playerSelection.trim()=='scissors'&&computerSelection.trim()=='rock'){
        return "You lose! Rock beats scissors";
    }
    else if(playerSelection.trim()=='scissors'&&computerSelection.trim()=='scissors'){
        return "It's a tie!";
    }
    else{
        return "Invalid input";
    }
}

function playGame(){
    let playerSelection = prompt("Enter your choice: ");
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    alert(playRound(playerSelection, computerSelection));
}

for(let i=1; i<=5; i++){
    playGame();
}
