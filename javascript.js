//Computer Choice

function getRandomInteger(min, max) {
  return Math.floor((Math.random() * (max - min) + min) * 10);
}

let choice = getRandomInteger(0.1, 0.4)

console.log("Test computer choice: " + (choice))

function getComputerChoice(choice) {
  if (choice == 1) {
    return "Rock"
  } else if (choice == 2) {
    return "Paper"
  } else {
    return "Scissors"
  }
  }

console.log("Test computer choice: " + (getComputerChoice(choice)))


//Get player choice from button and get computer choice and playRound

let playerSelection = ""
let computerSelection = ""

const buttonRock = document.getElementById('button1');
const selection1 = buttonRock.addEventListener('click', selectRock);

function selectRock() {
  choice = getRandomInteger(0.1, 0.4)
  computerSelection = getComputerChoice(choice);
  console.log("Computer choice: " + getComputerChoice(choice))
  playerSelection = "ROCK";
  console.log(playRound(playerSelection, computerSelection));
  console.log(playerScore)
  console.log(computerScore)
}

const buttonPaper = document.getElementById('button2');
const selection2 = buttonPaper.addEventListener('click', selectPaper);

function selectPaper() {
  choice = getRandomInteger(0.1, 0.4)
  computerSelection = getComputerChoice(choice);
  console.log("Computer choice: " + getComputerChoice(choice))
  playerSelection = "PAPER";
  console.log(playRound(playerSelection, computerSelection));
  console.log(playerScore)
  console.log(computerScore)
}

const buttonScissors = document.getElementById('button3');
const selection3 = buttonScissors.addEventListener('click', selectScissors);

function selectScissors() {
  choice = getRandomInteger(0.1, 0.4)
  computerSelection = getComputerChoice(choice);
  console.log("Computer choice: " + getComputerChoice(choice))
  playerSelection = "SCISSORS";
  console.log(playRound(playerSelection, computerSelection));
  console.log(playerScore)
  console.log(computerScore)
}


//plays a single round of Rock Paper Scissors and modifies DOM to display Result

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "ROCK") {
    //modifies DOM to display round result
    let div = document.getElementById('div1');
    let p = document.getElementById('results');
    results.textContent = "Tie. You both chose Rock.";
    div.appendChild(p);
    //modifies DOM to display computer choice
    p0.textContent = computerSelection;
    div0.appendChild(p0);
    //check winner
    checkWinner();
    //console message
    return "Tie. You both chose Rock.";
  } else if (playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "PAPER") {
    //modifies DOM to display round result
    let div = document.getElementById('div1');
    let p = document.getElementById('results');
    results.textContent = "Sorry! You loose. Paper beats rock.";
    div.appendChild(p);
    //modifies DOM to display computer choice
    p0.textContent = computerSelection;
    div0.appendChild(p0);
    //updates score and modifies DOM to display score
    computerScore = computerScore + 1;
    p2.textContent = playerScore + " - " + computerScore;
    div2.appendChild(p2);
    //check winner
    checkWinner();
    //console message
    return "Sorry! You loose. Paper beats rock."
  } else if (playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "SCISSORS") {
    //modifies DOM to display round result
    let div = document.getElementById('div1');
    let p = document.getElementById('results');
    results.textContent = "Congratulations! You win. Rock beats scissors.";
    div.appendChild(p);
    //modifies DOM to display computer choice
    p0.textContent = computerSelection;
    div0.appendChild(p0);
    //updates score and modifies DOM to display score
    playerScore = playerScore + 1;
    p2.textContent = playerScore + " - " + computerScore;
    div2.appendChild(p2);
    //check winner
    checkWinner();
    //console message
    return "Congratulations! You win. Rock beats scissors."
  } else if (playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "ROCK") {
    //modifies DOM to display round result
    let div = document.getElementById('div1');
    let p = document.getElementById('results');
    results.textContent = "Congratulations! You win. Paper beats rock.";
    div.appendChild(p);
    //modifies DOM to display computer choice
    p0.textContent = computerSelection;
    div0.appendChild(p0);
    //updates score and modifies DOM to display score
    playerScore = playerScore + 1;
    p2.textContent = playerScore + " - " + computerScore;
    div2.appendChild(p2);
    //check winner
    checkWinner();
    //console message
    return "Congratulations! You win. Paper beats rock."
  } else if (playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "PAPER") {
    //modifies DOM to display round result
    let div = document.getElementById('div1');
    let p = document.getElementById('results');
    results.textContent = "Tie. You both chose paper.";
    div.appendChild(p);
    //modifies DOM to display computer choice
    p0.textContent = computerSelection;
    div0.appendChild(p0);
    //check winner
    checkWinner();
    //console message
    return "Tie. You both chose paper."
  } else if (playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "SCISSORS") {
    //modifies DOM to display round result
    let div = document.getElementById('div1');
    let p = document.getElementById('results');
    results.textContent = "Sorry! You loose. Scissors beat paper.";
    div.appendChild(p);
    //modifies DOM to display computer choice
    p0.textContent = computerSelection;
    div0.appendChild(p0);
    //updates score and modifies DOM to display score
    computerScore = computerScore + 1;
    p2.textContent = playerScore + " - " + computerScore;
    div2.appendChild(p2);
    //check winner
    checkWinner();
    //console message
    return "Sorry! You loose. Scissors beat paper."
  } else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "ROCK") {
    //modifies DOM to display round result
    let div = document.getElementById('div1');
    let p = document.getElementById('results');
    results.textContent = "Sorry! You loose. Rock beats scissors.";
    div.appendChild(p);
    //modifies DOM to display computer choice
    p0.textContent = computerSelection;
    div0.appendChild(p0);
    //updates score and modifies DOM to display score
    computerScore = computerScore + 1;
    p2.textContent = playerScore + " - " + computerScore;
    div2.appendChild(p2);
    //check winner
    checkWinner();
    //console message
    return "Sorry! You loose. Rock beats scissors."
  } else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "PAPER") {
    //modifies DOM to display round result
    let div = document.getElementById('div1');
    let p = document.getElementById('results');
    results.textContent = "Congratulations! You win. Scissors beats paper.";
    div.appendChild(p);
    //modifies DOM to display computer choice
    p0.textContent = computerSelection;
    div0.appendChild(p0);
    //updates score and modifies DOM to display score
    playerScore = playerScore + 1;
    p2.textContent = playerScore + " - " + computerScore;
    div2.appendChild(p2);
    //check winner
    checkWinner();
    //console message
    return "Congratulations! You win. Scissors beats paper."
  } else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "SCISSORS") {
    //modifies DOM to display round result
    let div = document.getElementById('div1');
    let p = document.getElementById('results');
    results.textContent = "Tie. You both chose scissors.";
    div.appendChild(p);
    //modifies DOM to display computer choice
    p0.textContent = computerSelection;
    div0.appendChild(p0);
    //check winner
    checkWinner();
    //console message
    return "Tie. You both chose scissors."
  } else {
    return playerSelection + " is not a valid selection. Please try again!"
  }
}

//DOM manipulation for new score counter

let playerScore = 0
let computerScore = 0

let div2 = document.getElementById('div2');
let p2 = document.getElementById('score');

//DOM manipulation to show computer selection

let div0 = document.getElementById('div0')
let p0 = document.getElementById('compSelection')

//old checkwinner

function checkWinner() {
  if (playerScore == 5) {
    //Displays result
    p2.textContent = "YOU WIN!!!";
    div2.appendChild(p2);
    //Changes colour
    bodyColor[0].style.backgroundImage = "linear-gradient(green, rgb(32, 41, 47))";
    html[0].appendChild(bodyColor[0]);
    //alert("You win!");             Browser Alert message - removed as runs first
    //location.reload();             Reloads page
    setTimeout(function(){           //Reloads page in 1 second
      location.reload();
    }, 1000);
    //throw new Error("You win!");   Throws error in console
  } else if (computerScore ==5) {
    p2.textContent = "YOU LOOSE!!!";
    div2.appendChild(p2);
    bodyColor[0].style.backgroundImage = "linear-gradient(rgb(210, 33, 33), rgb(103, 16, 16))";
    html[0].appendChild(bodyColor[0]);
    setTimeout(function(){
      location.reload();
    }, 1000);
  } else {}
}

//change colour if WIN

let html = document.getElementsByTagName('html')
let bodyColor = document.getElementsByTagName('body')